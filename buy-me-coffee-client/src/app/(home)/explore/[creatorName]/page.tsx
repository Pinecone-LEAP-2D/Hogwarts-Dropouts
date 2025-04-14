import { AboutUserInfo } from "@/app/pro/_components/AboutUserInfo";
import { DonationAmount } from "@/app/pro/_components/DonationAmount";
import axios from "axios";
import { useParams } from "next/navigation";

export default function Home() {
  const { creatorName } = useParams();
  const getCreatorInfo = async () => {
    const response = await axios.get(
      `http://localhost:4000/profile/${creatorName}`
    );
  };
  return (
    <div className="w-4/7  flex flex-col justify-center p-5 gap-5 z-100 bg-white">
      <div className="flex gap-5 absolute left-1/2 top-[300px] transform -translate-x-1/2">
        <AboutUserInfo />
        <DonationAmount />
      </div>
    </div>
  );
}
