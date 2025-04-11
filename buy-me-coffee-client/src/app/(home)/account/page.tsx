import { EditProfile } from "./_components/EditProfile";
import { PaymentDetail } from "./_components/PaymentDetail";

export default function Home() {
  return (
    <div className="w-1/3 h-[100%] flex flex-col justify-center overflow-scroll">
      <EditProfile />
      <PaymentDetail />
    </div>
  );
}
