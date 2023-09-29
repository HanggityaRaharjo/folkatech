import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import ProductCategory from "./ProductCategory.js";
import Users from "./User.js";
import ProductImage from "./ProductImage.js";

const { DataTypes } = Sequelize;

const Product = db.define(
  "products",
  {
    product_name: {
      type: DataTypes.STRING,
    },
    category_id: {
      type: DataTypes.INTEGER,
    },
    brand: {
      type: DataTypes.STRING,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

Product.hasMany(ProductImage, {
  foreignKey: "product_id",
});

Product.belongsTo(ProductCategory, {
  foreignKey: "category_id",
});

export default Product;
