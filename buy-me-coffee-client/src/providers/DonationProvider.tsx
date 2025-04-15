"use client";
import { useState, createContext, useContext, useEffect } from "react";
import { getReceivedDonations } from "@/app/utils/Axios";
import axios from "axios";
import { useProfile } from "./ProfileProvider";
import { LoadingProvider, useLoading } from "./LoaderProvider";
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
  isLoading: boolean;
  fetchDonations: () => Promise<void>;
  createDonations: (donation: Donation) => Promise<void>;
  totalEarning: number;
  fetchTotalEarnings: (userId: number) => Promise<void>;
  searchDonations: (filters: {
    amount?: string;
    date?: string;
  }) => Promise<void>;
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
  // const [loading, setLoading] = useState(true);
  const { isLoading, setIsLoading } = useLoading();

  const fetchDonations = async () => {
    try {
      const data = await getReceivedDonations();
      setDonations(data || []);
    } catch (error) {
      console.error("Error fetching donations:", error);
    } finally {
      setIsLoading(false);
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
  const [totalEarning, setTotalEarnings] = useState<number>(0);

  // const { userId } = useProfile();

  const fetchTotalEarnings = async (userId: number) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/donation/total-earnings/${userId}`
      );
      setTotalEarnings(res.data.totalEarnings || 0);
    } catch (err) {
      console.error("Error fetching total earnings:", err);
    }
  };

  const { userId } = useProfile();
  const searchDonations = async (filters: {
    amount?: string;
    date?: string;
  }) => {
    try {
      const params = new URLSearchParams(filters).toString();
      const res = await axios.get(
        `http://localhost:4000/donation/search/${userId}?${params}`
      );
      setDonations(res.data.donations || []);
    } catch (err) {
      console.error("Error searching donations:", err);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  return (
    <DonationContext.Provider
      value={{
        donations,
        isLoading,
        fetchDonations,
        createDonations,
        totalEarning,
        fetchTotalEarnings,
        searchDonations,
      }}>
      {isLoading ? <div>hhhh</div> : children}
    </DonationContext.Provider>
  );
};

export const useDonations = () => useContext(DonationContext);
