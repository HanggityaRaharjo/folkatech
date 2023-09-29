import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Product from "./Product.js";

const { DataTypes } = Sequelize;

const ProductImage = db.define(
  "product_image",
  {
    links: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default ProductImage;
