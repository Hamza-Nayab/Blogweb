import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;
// const db =
//   "mongodb+srv://hamzanayab:hamza@mernblog.zqav0wp.mongodb.net/mern-blog";

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`running on port: ${port}`);
});
