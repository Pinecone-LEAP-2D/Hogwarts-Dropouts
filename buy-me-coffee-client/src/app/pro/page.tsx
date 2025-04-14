"use client";

import { DonationAmount } from "@/app/pro/_components/DonationAmount";
import { AboutUserInfo } from "./_components/AboutUserInfo";
import { Header } from "@/components/Header";
import { SelectCoverImage } from "./_components/SelectCoverImage";

export default function Home() {
  return (
    <div className="w-full h-screen relative">
      <Header />
      <SelectCoverImage />
      <div className="flex gap-5 absolute left-1/2 top-[300px] transform -translate-x-1/2">
        <AboutUserInfo />
        <DonationAmount />
      </div>
    </div>
  );
}
