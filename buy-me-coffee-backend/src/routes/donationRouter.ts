import express from "express";
import { donationPay } from "../controllers/donationControllers/createDonation";
import { getReceivedDonation } from "../controllers/donationControllers/getReceivedDonation";
import { getTotalEarnings } from "../controllers/donationControllers/getTotalEarningDonation";
import { searchDonations } from "../controllers/donationControllers/getSearchDonations";
import {createDonationMid} from "../middleware/createDonationMid";
export const donationRouter = express.Router();
donationRouter.post("/",createDonationMid, donationPay);
donationRouter.get("/", getReceivedDonation)
donationRouter.get("/total-earnings/:userId", getTotalEarnings)
donationRouter.get("/search/:userId",searchDonations)
