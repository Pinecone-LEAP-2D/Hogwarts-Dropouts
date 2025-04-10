import express from "express";
import { signup } from "../controllers/authenticationControllers/signup";
import { updateUser } from "../controllers/authenticationControllers/updateUser";
import { idValid } from "../middlewares/authMiddleware/idValid";
export const userRouter = express.Router();
userRouter.post("/", signup);
userRouter.put("/", idValid, updateUser);
