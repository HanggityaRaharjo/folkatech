import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Product from "./Product.js";

const { DataTypes } = Sequelize;

const Users = db.define(
  "users",
  {
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

// Users.hasMany(Product, {
//   foreignKey: "user_id",
// });

export default Users;
