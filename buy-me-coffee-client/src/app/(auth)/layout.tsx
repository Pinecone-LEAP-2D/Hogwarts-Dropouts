import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Formik, Field, ErrorMessage } from "formik";
import { Coffee } from "lucide-react";
import { Form } from "react-hook-form";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full  bg-gray-100 ">
      <div className="w-1/2  bg-amber-400">
        <div className="flex  font-bold text-2xl gap-2 items-center h-1/10 justify-center">
          <Coffee />
          <p> Buy Me Coffee </p>
        </div>
        <div className="flex flex-col items-center justify-center h-8/10 ">
          <img src="coffee.png" />
          <p className="font-bold">Fund your creative work</p>
          <p>
            Accept support. Start a membership. Set up a shop. It's easier than
            you think.
          </p>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
