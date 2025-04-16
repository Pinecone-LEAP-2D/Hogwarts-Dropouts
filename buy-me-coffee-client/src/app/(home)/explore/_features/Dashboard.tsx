"use client";
import axios from "axios";
import { CreatorProfile } from "../_components/CreatorProfile";
import { useEffect, useState } from "react";
import { ProfileType } from "@/providers/ProfileProvider";

export const Dashboard = () => {
  const [allCreators, setAllCreators] = useState<ProfileType[]>([]);
  const getAllCreators = async () => {
    const response = await axios.get("http://localhost:4000/profile/explore");
    setAllCreators(response.data);
  };
  useEffect(() => {
    const fetchData = async () => {
      await getAllCreators();
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-5">
      {allCreators.map((creator, index) => {
        return <CreatorProfile key={index} creatorInfo={creator} />;
      })}
    </div>
  );
};
