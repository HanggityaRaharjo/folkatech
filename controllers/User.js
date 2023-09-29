import Users from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (req, res) => {
  const id = req.params.id;

  try {
    const users = await Users.findByPk(id);
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (req, res) => {
  const { first_name, last_name, email, password, confirmation_password } =
    req.body;

  if (password !== confirmation_password) {
    return res
      .status(404)
      .json({ msg: "Password and Confirmation Password are not same" });
  }
  try {
    const users = await Users.create({
      first_name,
      last_name,
      email,
      password,
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  const { first_name, last_name, email, password, confirmation_password } =
    req.body;

  if (password !== confirmation_password) {
    return res
      .status(404)
      .json({ msg: "Password and Confirmation Password are not same" });
  }
  try {
    const users = await Users.create({
      first_name,
      last_name,
      email,
      password,
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};
