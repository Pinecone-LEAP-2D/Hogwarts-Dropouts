"use client";
import { useState, createContext, useContext, useEffect } from "react";
import { getReceivedDonations } from "@/app/utils/Axios";
import axios from "axios";
import { useProfile } from "./ProfileProvider";
import { Loader } from "@/components/Loader";
import moment from "moment";
type receivedDonations = {
  id: number;
  amount: number;
  specialMessage: string;
  socialURLOrBuyMeACoffee: string;
  recipientId: number;
  createdAt: string;
  donorId: number;
  donor: {
    id: number;
    email: string;
    username: string;
  };
};
export type Donation = {
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
  const [loading, setLoading] = useState(true);
  const { user } = useProfile();
  // const fetchDonations = async () => {
  //   try {
  //     setLoading(true);
  //     const data = await getReceivedDonations();
  //     setDonations(data || []);
  //   } catch (error) {
  //     console.error("Error fetching donations:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const fetchDonations = async () => {
    try {
      setLoading(true);
      const data = await getReceivedDonations(user.id);
      console.log(data, "dataaaaa");

      const formattedData = data.map((donation: receivedDonations) => ({
        ...donation,
        createdAt: moment().startOf("day").fromNow(),
      }));
      console.log(formattedData);

      setDonations(formattedData || []);
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
      // setLoading(true);
      const params = new URLSearchParams(filters).toString();
      const res = await axios.get(
        `http://localhost:4000/donation/search/${userId}?${params}`
      );
      setDonations(res.data.donations || []);
    } catch (err) {
      console.error("Error searching donations:", err);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  return (
    <DonationContext.Provider
      value={{
        donations,
        isLoading: loading,
        fetchDonations,
        createDonations,
        totalEarning,
        fetchTotalEarnings,
        searchDonations,
      }}>
      <Loader loading={loading}>{children}</Loader>
    </DonationContext.Provider>
  );
};

export const useDonations = () => useContext(DonationContext);
