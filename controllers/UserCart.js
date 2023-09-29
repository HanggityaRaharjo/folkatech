import Product from "../models/Product.js";
import ProductImage from "../models/ProductImage.js";
import Users from "../models/User.js";
import UserCart from "../models/UserCart.js";

export const getProductsCartByUserId = async (req, res) => {
  //   return res.json(req.params.id);
  try {
    const userCarts = await UserCart.findAll({
      where: { userId: req.params.id },
      include: [
        { model: Users },
        { model: Product, include: { model: ProductImage } },
      ],
    });

    const response = {
      data: userCarts.map((cart) => ({
        type: "cart",
        id: cart.id,
        attributes: {
          quantity: cart.quantity,
          total_price: cart.total_price,
          created: cart.createdAt,
          updated: cart.updatedAt,
        },
        relationship: {
          user: {
            data: {
              type: "user",
              id: cart.user.id,
              attributes: {
                first_name: cart.user.first_name,
                last_name: cart.user.last_name,
                email: cart.user.email,
                created: cart.createdAt,
                updated: cart.updatedAt,
              },
            },
          },
          product: {
            data: {
              type: "product",
              id: cart.productId,
              attributes: {
                product_name: cart.product.product_name,
                brand: cart.product.brand,
                stock: cart.product.stock,
                price: cart.product.price,
                created: cart.createdAt,
                updated: cart.updatedAt,
              },
              relationship: {
                image: cart.product.product_images.map((item) => ({
                  data: {
                    type: "image",
                    id: item.id,
                    attributes: {
                      source: item.links,
                      created: item.createdAt,
                      updated: item.updatedAt,
                    },
                  },
                })),
              },
            },
          },
        },
        links: `${process.env.BACK_END_ENDPOINT_URL}/cart/${cart.id}`,
      })),
    };

    res.json(response);
  } catch (error) {}
};

export const storeCart = async (req, res) => {
  const { quantity, total_price, productId, userId } = req.body;
  //   return res.json({ test: "sampe sini asd" });
  try {
    const cart = await UserCart.create({
      quantity: quantity,
      total_price: total_price,
      productId: productId,
      userId: userId,
    });
    return res.status(201).json(cart);
  } catch (error) {
    console.log(error);
  }
};
