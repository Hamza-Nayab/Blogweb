import { query } from "express";
import user from "../models/usermodel.js";
import bcryptjs from "bcryptjs";
import { errhandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { email, username, password } = req.body;
  console.log(email + username + password);
  if (
    !email ||
    !username ||
    !password ||
    email === "" ||
    username === "" ||
    password == ""
  ) {
    return next(errhandler(400,"All fields are required"));
  }
  const hashed = bcryptjs.hashSync(password, 10);

  const newUser = new user({
    username,
    email,
    password: hashed,
  });
  try {
    await newUser.save();
    console.log("done");
    res.status(200).json({ message: "Signup Successful" });
  } catch (err) {
    next(err);
  }
};
