import express from "express";
import userController from "../controller/usercontroller.js";

const router = express.Router();

router.get("/test",userController);



export default router;