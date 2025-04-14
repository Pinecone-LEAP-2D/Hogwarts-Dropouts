"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { createContext, useContext } from "react";
type ProfileType = {
  id: string;
  name: string;
  avatarImage: string;
  socialMediaURL: string;
  about: string;
  backgroundImage: string;
  successMessage: string;
};
type ProfileContextType = {
  user: ProfileType;
  handleLogout: () => void;
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
    const response = await axios.put("http://localhost:4000/profile", values);
  };

  return (
    <ProfileContext.Provider
      value={{
        user: user,
        handleLogout: handleLogout,
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
