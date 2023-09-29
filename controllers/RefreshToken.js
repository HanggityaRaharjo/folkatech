import Users from "../models/User.js";
import jwt from "jsonwebtoken";

export const refreshToken = async (req, res) => {
  console.log("Ini token", req);
  try {
    const refreshToken = req.cookies.refreshToken;
    return res.json({ token: refreshToken, data: "sampe sini" });
    if (!refreshToken) return res.sendStatus(401);
  } catch (error) {
    console.log(error);
  }
};
