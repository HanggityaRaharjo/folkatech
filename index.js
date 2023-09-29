import express from "express";
import db from "./config/Database.js";
import router from "./routes/index.js";
import dotenv from "dotenv";
import cors from "cors";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import Product from "./models/Product.js";
import ProductCategory from "./models/ProductCategory.js";
import ProductImage from "./models/ProductImage.js";
import Users from "./models/User.js";
import UserCart from "./models/UserCart.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(fileUpload());
app.use(express.static("public"));
try {
  await db.authenticate();
  // await Users.sync();
  // await ProductCategory.sync();
  // await Product.sync();
  // await ProductImage.sync();
  // await UserCart.sync();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(process.env.BACK_END_PORT, () => {
  console.log("Server is running on port", process.env.BACK_END_PORT);
});
