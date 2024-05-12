import { query } from "express";
import user from "../models/usermodel.js";
import bcryptjs from "bcryptjs";
import { errhandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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
    return next(errhandler(400, "All fields are required"));
  }
  const hashed = bcryptjs.hashSync(password, 10);

  const newUser = new user({
    username,
    email,
    password: hashed,
  });
  try {
    await newUser.save();
    console.log("User Registered");
    res.status(200).json({ message: "Signup Successful" });
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    next(errhandler(400, "all fields are required"));
  }

  try {
    const checkUser = await user.findOne({ email });

    if (!checkUser) {
      return next(errhandler(404, "User not found"));
    }

    const chkpass = bcryptjs.compareSync(password, checkUser.password);
    if (!chkpass) {
      return next(errhandler(404, "Password incorrect"));
    }
    const token = jwt.sign({ id: checkUser._id }, process.env.SK);
    const { password: pass, ...rest } = checkUser._doc;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (err) {
    next(err);
  }
};
