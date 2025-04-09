import express from "express";
import { signup } from "../controllers/authenticationControllers/signup";
export const userRouter = express.Router();
userRouter.post("/", signup);
