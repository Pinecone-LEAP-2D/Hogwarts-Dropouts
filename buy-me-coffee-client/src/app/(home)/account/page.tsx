import { ChangePassword } from "./_components/ChangePassword";
import { EditProfile } from "./_components/EditProfile";
import { PaymentDetail } from "./_components/PaymentDetail";
import { SuccessMessage } from "./_components/SuccessMessage";

export default function Home() {
  return (
    <div className="w-3/7  flex flex-col justify-center ">
      <EditProfile />
      <ChangePassword />
      <PaymentDetail />
      <SuccessMessage />
    </div>
  );
}
