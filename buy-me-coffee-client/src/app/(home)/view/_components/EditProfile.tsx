import { EditProfile } from "../../account/_components/EditProfile";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const EditPro = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="bg-[#F4F4F5] text-black">Edit page</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="start">
        <EditProfile />
      </PopoverContent>
    </Popover>
  );
};
