import { Donation } from "@/providers/DonationProvider";
import axios from "axios";

export const getReceivedDonations = async () => {
  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : 0;
  try {
    const response = await axios.get(
      `https://hogwarts-dropouts-sv7s.onrender.com/donation/${userId} `
    );

    return response.data || [];
  } catch (err) {
    console.log("error while getting received donations", err);
  }
};
export const addDonation = async (donation: Donation) => {
  try {
    const response = await axios.post(
      "https://hogwarts-dropouts-sv7s.onrender.com/donation",
      {
        ...donation,
      }
    );

    return response.data;
  } catch (err) {
    console.log("error while adding donation", err);
  }
};
