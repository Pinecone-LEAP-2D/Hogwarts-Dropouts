"use client";
import { useState, createContext, useContext, useEffect } from "react";
import { getReceivedDonations } from "@/app/utils/Axios";
import { addDonation } from "@/app/utils/Axios";
import axios from "axios";
type receivedDonations = {
  id: number;
  amount: number;
  specialMessage: string;
  socialURLOrBuyMeACoffee: string;
  recipientId: number;
  donorId: number;
  donor: {
    id: number;
    email: string;
    username: string;
  };
};

type Donation = {
  amount: number;
  specialMessage: string;
  socialURLOrBuyMeACoffee: string;
  recipientId: number;
  donorId: number;
};

type DonationContextType = {
  donations: receivedDonations[];
  loading: boolean;
  fetchDonations: () => Promise<void>;
  createDonations: (donation: Donation) => Promise<void>;
};

const DonationContext = createContext<DonationContextType>(
  {} as DonationContextType
);

export const DonationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [donations, setDonations] = useState<receivedDonations[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDonations = async () => {
    try {
      const data = await getReceivedDonations();
      setDonations(data || []);
    } catch (error) {
      console.error("Error fetching donations:", error);
    } finally {
      setLoading(false);
    }
  };
  const createDonations = async (donation: Donation) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/donation",
        donation
      );
      setDonations(prev => [response.data, ...prev]);
    } catch (err) {
      console.log("err while creating new donations", err);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  return (
    <DonationContext.Provider
      value={{ donations, loading, fetchDonations, createDonations }}>
      {loading ? <div>Loading...</div> : children}
    </DonationContext.Provider>
  );
};

export const useDonations = () => useContext(DonationContext);
