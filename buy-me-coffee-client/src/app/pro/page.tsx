"use client";

import { DonationAmount } from "@/app/pro/_components/DonationAmount";
import { AboutUserInfo } from "./_components/AboutUserInfo";
import { Header } from "@/components/Header";
import { SelectCoverImage } from "./_components/SelectCoverImage";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Header />
      <SelectCoverImage />
      <div className="flex gap-5 justify-center">
        <AboutUserInfo />
        <DonationAmount />
      </div>
    </div>
  );
}
