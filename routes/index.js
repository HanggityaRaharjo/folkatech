import express from "express";
import { createUser, getUserById, getUsers } from "../controllers/User.js";
import {
  createProduct,
  getAllProducts,
  getProductById,
  getProductByCategory,
} from "../controllers/Product.js";
import { Login, Me, Register } from "../controllers/Authentication.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getProductsCartByUserId, storeCart } from "../controllers/UserCart.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.post("/token", refreshToken);
router.get("/me", Me);

router.get("/users", getUsers);
router.get("/user/:id", getUserById);
router.post("/user/create", createUser);

router.get("/products", getAllProducts);
router.get("/product/:id", getProductById);
router.get("/products/category/:category_name", getProductByCategory);
router.post("/product", createProduct);

router.get("/cart/user/:id", getProductsCartByUserId);
router.post("/cart", storeCart);

export default router;
