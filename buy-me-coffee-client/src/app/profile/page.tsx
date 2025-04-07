"use client";
import { Header } from "@/components/Header";
import { CreateProfile } from "./_components/CreateProfile";
import { SetPay } from "./_components/SetPay";
export default function Home() {
  return (
    <div className="flex flex-col w-full items-center">
      <Header />
      <SetPay />
      {/* <CreateProfile /> */}
    </div>
  );
}
