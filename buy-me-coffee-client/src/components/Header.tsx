import { Coffee } from "lucide-react";
import { Button } from "./ui/button";
export const Header = () => {
  return (
    <div className="flex p-5 justify-between px-15 w-full">
      <div className="flex font-extrabold items-center gap-2">
        <Coffee size={55} />
        <p className="text-xl">Buy Me Coffee</p>
      </div>
      <div className="flex gap-2">
        <Button className="p-7 rounded-full bg-white text-black hover:bg-amber-200 font-bold text-lg">
          Log in
        </Button>
        <Button className="p-7 rounded-full bg-white text-black hover:bg-amber-200 font-bold text-lg">
          Sign Up
        </Button>
      </div>
    </div>
  );
};
