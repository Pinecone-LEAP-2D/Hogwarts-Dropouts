"use client";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="w-full h-screen bg-amber-300 flex flex-col justify-between">
      <Header />
      <div className="flex justify-center h-full items-center flex-col gap-4">
        <img src="coffee.png" alt="" className="w-[350px] h-[350px]" />
        <Button className="p-10 px-20 rounded-full bg-white text-black hover:bg-amber-200 font-bold text-xl">
          Start
        </Button>
      </div>
    </div>
  );
}
