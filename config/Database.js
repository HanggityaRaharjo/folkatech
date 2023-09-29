import { Sequelize } from "sequelize";

const db = new Sequelize("folkatech", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
export default db;
