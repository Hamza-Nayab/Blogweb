import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userroute.js";
import Authroute from "./routes/Authroute.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user", userRouter);

app.use("/api/auth", Authroute);

app.listen(port, () => {
  console.log(`running on port: ${port}`);
});
