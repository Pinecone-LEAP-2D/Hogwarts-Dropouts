"use client";

import { useState } from "react";
import { Step1 } from "./_components/Step1";
import { Step2 } from "./_components/Step2";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignUpStepperForm() {
  const [step, setStep] = useState<number>(0);

  return (
    <div className="w-full h-screen flex items-center justify-center relative bg-white flex-col">
      <div className="flex items-end justify-end p-4 top-0 right-0 absolute">
        <Link href={"/logIn"}>
          <Button className="p-7 rounded-full bg-white text-black hover:bg-amber-200 font-bold text-lg">
            Log
          </Button>
        </Link>
      </div>
      <div className="w-1/3 py-10">
        <h2 className="text-xl font-bold">Create Your Account</h2>
        <p className="text-sm text-muted-foreground">
          {step === 0
            ? "Choose a username for your page"
            : "Enter your email and password"}
        </p>
      </div>
      {step === 0 && <Step1 setStep={setStep} />}
      {step === 1 && <Step2 />}
    </div>
  );
}
