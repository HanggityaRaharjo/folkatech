import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Product from "./Product.js";
import Users from "./User.js";

const { DataTypes } = Sequelize;

const UserCart = db.define(
  "user_carts",
  {
    quantity: {
      type: DataTypes.INTEGER,
    },
    total_price: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);
UserCart.belongsTo(Product);
UserCart.belongsTo(Users);

export default UserCart;
