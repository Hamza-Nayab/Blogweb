import { query } from "express";
import user from "../models/usermodel.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
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
    return res.status(400).json({ message: "All fields are Required" });
  }
  const hashed =  bcryptjs.hashSync(password,10);

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
    res.status(420).json({ message: err });
  }
};
