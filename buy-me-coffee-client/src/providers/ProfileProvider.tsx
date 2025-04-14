"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { createContext, useContext } from "react";
type ProfileType = {
  id: string;
  name: string | undefined;
  avatarImage: string | undefined;
  socialMediaURL: string | undefined;
  about: string | undefined;
  backgroundImage: string | undefined;
  successMessage: string | undefined;
  bankCards: BankCard[];
};
type BankCard = {
  id: number;
  country: string;
  firstName: string;
  lastName: string;
  cardNumber: string;
  expiryDate: string;
  year: string;
  cvc: number;
};
type ProfileContextType = {
  user: ProfileType;
  handleLogout: () => void;
  updateProfile: (values: ProfileType) => Promise<void>;
  updateCardInfo: (values: BankCard) => Promise<void>;
};
const ProfileContext = createContext<ProfileContextType>(
  {} as ProfileContextType
);
export const ProfileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : 0;
  const { data: user, refetch } = useQuery({
    queryKey: ["profile", userId],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:4000/profile/?currentUser=${userId}`
      );
      console.log(response.data);

      return response.data;
    },
  });

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    router.push("/logIn");
  };

  const updateProfile = async (values: ProfileType) => {
    const response = await axios.put("http://localhost:4000/profile", {
      profileId: user.id,
      ...values,
    });
    await refetch();
    console.log(response.data);
  };
  const updateCardInfo = async (values: BankCard) => {
    const response = await axios.put("http://localhost:4000/profile", values);
    console.log(response.data);
    await refetch();
  };

  return (
    <ProfileContext.Provider
      value={{
        user: user,
        handleLogout: handleLogout,
        updateProfile: updateProfile,
        updateCardInfo: updateCardInfo,
      }}>
      {!user ? <div>...loading</div> : children}
    </ProfileContext.Provider>
  );
};
export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    console.log("context is not defined");
  }
  return context;
};
