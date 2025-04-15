import axios from "axios";
type Donation = {
  amount: number;
  specialMessage: string;
  socialURLOrBuyMeACoffee: string;
  recipientId: number;
  donorId: number;
};
export const getReceivedDonations = async () => {
  try {
    const response = await axios.get("http://localhost:4000/donation");
    return response.data || [];
  } catch (err) {
    console.log("error while getting received donations", err);
  }
};
export const addDonation = async (donation: Donation) => {
  try {
    const response = await axios.post("http://localhost:4000/donation", {
      ...donation,
    });
    console.log(response.data);

    return response.data;
  } catch (err) {
    console.log("error while adding donation", err);
  }
};
