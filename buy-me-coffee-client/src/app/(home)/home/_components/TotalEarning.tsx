"use client";

import { Button } from "@/components/ui/button";
import { useDonations } from "@/providers/DonationProvider";
import { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const TotalEarning = () => {
  const { totalEarning, fetchTotalEarnings } = useDonations();
  useEffect(() => {
    fetchTotalEarnings(1);
  }, []);
  return (
    <div className="w-[900px] h-[260px] space-y-5 border rounded-2xl p-8 bg-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            className="rounded-full"
            src="/AvatarImage.png"
            width={48}
            height={48}
            alt="Jake's avatar"
          />
          <p className="font-bold">Jake</p>
        </div>
        <Button className="bg-[#F4F4F5] text-black">Share page link</Button>
      </div>
      <hr className="my-4" />
      <div className="flex gap-4">
        <p className="font-bold text-2xl">Earnings</p>
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last 30 days">Last 30 days</SelectItem>
              <SelectItem value="last 90 days">Last 90 days</SelectItem>
              <SelectItem value="all time">All time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <p className="font-bold text-3xl">${totalEarning}</p>
      </div>
    </div>
  );
};
