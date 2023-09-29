import Product from "../models/Product.js";
import path from "path";
import ProductCategory from "../models/ProductCategory.js";
import ProductImage from "../models/ProductImage.js";
import Users from "../models/User.js";

export const getAllProducts = async (req, res) => {
  try {
    const currentPage = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 12;
    const offset = (currentPage - 1) * perPage;

    const products = await Product.findAll({
      include: [{ all: true }],
      limit: perPage,
      offset: offset,
    });

    const response = {
      links: {
        current: `${process.env.BACK_END_ENDPOINT_URL}/products?page=${currentPage}&perPage=${perPage}`,
        next: `${process.env.BACK_END_ENDPOINT_URL}/products?page=${
          currentPage + 1
        }&perPage=${perPage}`,
        previous: `${process.env.BACK_END_ENDPOINT_URL}/products?page=${
          currentPage != 1 ? currentPage - 1 : 1
        }&perPage=${perPage}`,
      },
      data: products.map((product) => ({
        type: "product",
        id: product.id,
        attributes: {
          product_name: product.product_name,
          stock: product.stock,
          price: product.price,
          brand: product.brand,
          created: product.createdAt,
          updated: product.updatedAt,
        },
        relationship: {
          category: {
            data: { id: product.product_category.id, type: "category" },
          },
          image: product.product_images.map((image) => ({
            type: "image",
            id: image.id,
            source: image.links,
          })),
        },
        links: `${process.env.BACK_END_ENDPOINT_URL}/product/${product.id}`,
      })),
      included: products.map((product) => [
        {
          type: "category",
          id: product.product_category.id,
          attributes: {
            name: product.product_category.category_name,
            created: product.product_category.createdAt,
            updated: product.product_category.updatedAt,
          },
        },
        {
          type: "image",
          id: product.product_images.id,
          data: product.product_images.map((image) => ({
            attributes: {
              source: image.links,
              created: image.createdAt,
              updated: image.updatedAt,
            },
          })),
        },
      ]),
    };
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: { id: req.params.id },
      include: { all: true },
    });

    const included = [
      {
        type: "category",
        id: product.product_category.id,
        attributes: {
          category_name: product.product_category.category_name,
        },
      },
    ];
    product.product_images.forEach((image) => {
      included.push({
        type: "image",
        id: image.id,
        attributes: {
          category_name: product.product_category.category_name,
        },
      });
    });

    const response = {
      data: [
        {
          type: "product",
          id: product.id,
          attributes: {
            product_name: product.product_name,
            stock: product.stock,
            price: product.price,
            brand: product.brand,
            created: product.createdAt,
            updated: product.updatedAt,
          },
          relationship: {
            category: {
              data: { id: product.product_category.id, type: "category" },
            },
            image: product.product_images.map((image) => ({
              id: image.id,
              type: "image",
              source: image.links,
            })),
          },
        },
      ],
      included: included,
    };

    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

export const getProductByCategory = async (req, res) => {
  // return res.json({ data: "sampe sini" });
  try {
    const productCategory = await ProductCategory.findOne({
      where: { category_name: req.params.category_name },
    });
    // return res.json(productCategory);
    if (productCategory) {
      const products = await Product.findAll({
        where: {
          category_id: productCategory.id,
        },
        include: { all: true },
      });

      const response = {
        data: products.map((product) => ({
          type: "product",
          id: product.id,
          attributes: {
            product_name: product.product_name,
            stock: product.stock,
            price: product.price,
            created: product.createdAt,
            updated: product.updatedAt,
          },
          relationship: {
            category: {
              data: { id: product.product_category.id, type: "category" },
            },
            image: product.product_images.map((image) => ({
              type: "image",
              id: image.id,
            })),
          },
          links: `${process.env.BACK_END_ENDPOINT_URL}/product/${product.id}`,
        })),
        included: products.map((product) => [
          {
            type: "category",
            id: product.product_category.id,
            attributes: {
              name: product.product_category.category_name,
              created: product.product_category.createdAt,
              updated: product.product_category.updatedAt,
            },
          },
          {
            type: "image",
            id: product.product_images.id,
            data: product.product_images.map((image) => ({
              attributes: {
                source: image.links,
                created: image.createdAt,
                updated: image.updatedAt,
              },
            })),
          },
        ]),
      };

      res.json(response);
    }
    res.status(404).json({ msg: "Data not found" });
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (req, res) => {
  const { product_name, category_id, brand, stock, price } = req.body;
  const allowedType = [".jpg", ".png", ".jpeg"];
  if (!req.files) return res.status(400).json({ msg: "File not found" });
  const fileImage = req.files.product_image;
  const imageSize = fileImage.size;
  const imageExtension = path.extname(fileImage.name);
  const fileName = fileImage.md5 + imageExtension;
  const urlImage = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  if (!allowedType.includes(imageExtension.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Format File" });
  if (imageSize > 5000000)
    return res.status(400).json({ msg: "File must be less than 5MB" });

  fileImage.mv(`./public/images/${fileName}`, async (err) => {
    if (err) {
      return res.status(500).json({ msg: err.message });
    }
    try {
      const product = await Product.create({
        product_name: product_name,
        category_id: category_id,
        brand: brand,
        stock: stock,
        price: price,
      });

      const productImage = await ProductImage.create({
        links: urlImage,
        product_id: product.id,
      });

      res.json({
        data: product,
        imageSource: urlImage,
      });
    } catch (error) {
      res.json({
        msg: error.message,
      });
    }
  });
};

export const updateProduct = async (req, res) => {
  const id = req.params.id;

  const { product_name, category_id, brand, stock, price } = req.body;
  const allowedType = [".jpg", ".png", ".jpeg"];
  if (!req.files) return res.status(400).json({ msg: "File not found" });
  const fileImage = req.files.product_image;
  const imageSize = fileImage.size;
  const imageExtension = path.extname(fileImage.name);
  const fileName = fileImage.md5 + imageExtension;
  const urlImage = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  if (!allowedType.includes(imageExtension.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Format File" });
  if (imageSize > 5000000)
    return res.status(400).json({ msg: "File must be less than 5MB" });

  fileImage.mv(`./public/images/${fileName}`, async (err) => {
    if (err) {
      return res.status(500).json({ msg: err.message });
    }
    try {
      const product = await Product.update(
        {
          product_name: product_name,
          category_id: category_id,
          brand: brand,
          stock: stock,
          price: price,
        },
        { where: { id: id } }
      );

      const productImage = await ProductImage.create({
        links: urlImage,
        product_id: product.id,
      });

      res.json({
        data: product,
        imageSource: urlImage,
      });
    } catch (error) {
      res.json({
        msg: error.message,
      });
    }
  });
};
