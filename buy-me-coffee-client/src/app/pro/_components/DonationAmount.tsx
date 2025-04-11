"use client";
import { Coffee } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const DonationAmount = () => {
  return (
    <div className="w-[600px] h-[500px] bg-white outline-1 rounded-2xl p-5 space-y-5">
      <div>
        <p className="font-bold text-xl">Buy Jake a Coffee</p>
      </div>
      <div>
        <p className="font-medium">Select amount:</p>
        <div className="flex gap-4">
          <Button className="bg-[#F4F4F5] text-black w-[72px] h-[40px]">
            <Coffee />
            $1
          </Button>
          <Button className="bg-[#F4F4F5] text-black w-[72px] h-[40px]">
            <Coffee />
            $2
          </Button>
          <Button className="bg-[#F4F4F5] text-black w-[72px] h-[40px]">
            <Coffee />
            $5
          </Button>
          <Button className="bg-[#F4F4F5] text-black w-[72px] h-[40px]">
            <Coffee />
            $10
          </Button>
        </div>
      </div>
      <div>
        <p className="font-medium">Enter BuyMeCoffee or social account URL:</p>
        <Input placeholder="buymecoffee.com/" />
      </div>
      <div>
        <p className="font-medium">Special message:</p>
        <Textarea placeholder="Please write your message here" />
      </div>
      <div>
        <Button className="w-[560px]">Support</Button>
      </div>
    </div>
  );
};
