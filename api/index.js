import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userroute.js"


dotenv.config();

const app = express();
const port = 3000;

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });



app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`running on port: ${port}`);
});
