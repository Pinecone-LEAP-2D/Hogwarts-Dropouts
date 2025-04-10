import express from "express";
import { createBankCard } from "../controllers/bankAccControllers/postBankAcc";
export const bankAccRouter = express.Router();
bankAccRouter.post("/bank-acc",createBankCard)