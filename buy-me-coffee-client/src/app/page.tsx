"use client";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-between relative">
      <Header />
      <div className="flex justify-center h-full items-center flex-col gap-8">
        <img src="coffee.png" alt="" className="w-[350px] h-[350px]" />
        <div>
          <Button className="p-10 px-20 rounded-full bg-amber-300 text-black hover:bg-amber-200 font-bold text-xl">
            Start my page
          </Button>
        </div>
      </div>
      <div className="flex justify-end items-end absolute bottom-0.5 right-0">
        <img src="coffeegang.png" alt="" className="w-[400px] h-[400px] " />
      </div>
      <div className="flex justify-start items-start absolute bottom-1 p-10">
        <img src="cup.png" alt="" className="w-[250px] h-[250px]" />
      </div>
    </div>
  );
}
