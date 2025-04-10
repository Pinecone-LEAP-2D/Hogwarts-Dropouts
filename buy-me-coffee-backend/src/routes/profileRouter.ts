import express from "express";
import { addProfile } from "../controllers/userControllers/addProfile";
import { updateProfile } from "../controllers/userControllers/updateProfile";
import { getAllProfile } from "../controllers/userControllers/getAllProfile";
export const profileRouter = express.Router();
profileRouter.post("/profile", addProfile);
profileRouter.put("/profile", updateProfile);
profileRouter.get("/profile", getAllProfile);
