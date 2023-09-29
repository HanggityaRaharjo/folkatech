import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Product from "./Product.js";

const { DataTypes } = Sequelize;

const ProductCategory = db.define(
  "product_categories",
  {
    category_name: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default ProductCategory;
