"use client";
import { useState, createContext, useContext, useEffect } from "react";
import { getReceivedDonations } from "@/app/utils/Axios";
type Donation = {
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

type DonationContextType = {
  donations: Donation[];
  loading: boolean;
  fetchDonations: () => Promise<void>;
};

const DonationContext = createContext<DonationContextType>(
  {} as DonationContextType
);

export const DonationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [donations, setDonations] = useState<Donation[]>([]);
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

  useEffect(() => {
    fetchDonations();
  }, []);

  return (
    <DonationContext.Provider value={{ donations, loading, fetchDonations }}>
      {loading ? <div>Loading donations...</div> : children}
    </DonationContext.Provider>
  );
};

export const useDonations = () => useContext(DonationContext);
