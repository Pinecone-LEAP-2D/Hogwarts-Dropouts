import { CreateProfile } from "@/app/profile/_components/CreateProfile";
import { EditProfile } from "./_components/EditProfile";

export default function Home() {
  return (
    <div className="w-1/3 h-[100%] flex flex-col justify-center">
      <EditProfile />
    </div>
  );
}
