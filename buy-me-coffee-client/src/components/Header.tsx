import { Coffee } from "lucide-react";
import { Button } from "./ui/button";
export const Header = () => {
  return (
    <div className="flex p-5 justify-between px-15 w-full">
      <div className="flex font-extrabold gap-2">
        <Coffee />
        <p>Buy Me Coffee</p>
      </div>
      <Button>Log out</Button>
    </div>
  );
};
