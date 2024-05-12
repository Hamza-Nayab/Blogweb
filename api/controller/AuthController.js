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
    console.log("User Registered");
    res.status(200).json({ message: "Signup Successful" });
  } catch (err) {
    next(err);
  }
};


export const signin = async (req, res, next)=>{
  const {email,password} = req.body;

  if(!email || !password || email === "" || password ===""){
    next(errhandler(400,"all fields are required"))
  }
  try{
    const checkUser = user.findOne({email});
    if(!checkUser){
      next(errhandler(404,"User not found"));
    }
    const chkpass = bcryptjs.compareSync(password,checkUser.password);
    if(!chkpass){
      next(errhandler(404,"Password incorrect"));
    }
    const token = jwt.sign({id:checkUser._id, },process.env.SK);

    res.status(200).cookie('access_token', token,{
      httpOnly:true,
    }).json('')
  }
  catch(err){
    next(err);
  }
}