import { response } from "express";
import Users from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  const { first_name, last_name, email, password, confirmation_password } =
    req.body;
  if (password !== confirmation_password)
    return res
      .status(400)
      .json({ msg: "Password and confirmation password did not match" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    const user = await Users.create({
      first_name: first_name,
      last_name: last_name,
      password: hashPassword,
      email: email,
    });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};

export const Me = async (req, res) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) {
      return res.sendStatus(401); // Unauthorized
    }
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }
      req.user = user; // Menambahkan informasi pengguna ke objek permintaan

      res.json(user);
    });
  } catch (error) {}
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findAll({ where: { email: email } });
    const match = await bcrypt.compare(password, user[0].password);
    if (!match) return res.status(400).json({ msg: "Invalid Password" });

    const userId = user[0].id;
    const first_name = user[0].first_name;

    const user_email = user[0].email;
    const accessToken = jwt.sign(
      { userId, first_name, user_email },
      process.env.ACCESS_TOKEN,
      { expiresIn: "1d" }
    );
    const refreshToken = jwt.sign(
      { userId, first_name, user_email },
      process.env.REFRESH_TOKEN,
      { expiresIn: "1d" }
    );

    await Users.update(
      { refresh_token: accessToken },
      { where: { id: userId } }
    );
    res.cookie("refreshToken", accessToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      secure: true,
    });
    return res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: "User not found" });
  }
};
