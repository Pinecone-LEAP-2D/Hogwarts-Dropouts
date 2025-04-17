import { Coffee } from "lucide-react";
import { Button } from "./ui/button";
// export const Header = () => {
//   return (
//     <div className="flex p-5 justify-between px-15 w-full">
//       <div className="flex font-extrabold items-center gap-2">
//         <Coffee size={55} />
//         <p className="text-xl">Buy Me Coffee</p>
//       </div>
//       <div className="flex gap-2">
//         <Button className="p-7 rounded-full bg-amber-300 text-black hover:bg-amber-200 font-bold text-lg">
//           Log in
//         </Button>
//         <Button className="p-7 rounded-full bg-white border-amber-300 border text-black hover:bg-amber-200 font-bold text-lg">
//           Sign Up
//         </Button>
//       </div>
//     </div>
//   );
// };
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Header = () => {
  const router = useRouter();

  return (
    <div className="flex p-5 justify-between px-15 w-full">
      <div
        // onClick={() => router.push("/home")}
        className="flex font-extrabold items-center gap-2 hover:opacity-80 transition cursor-pointer">
        <Link href="/" className="cursor-pointer">
          <a>
            <Coffee size={55} />
            <p className="text-xl">Buy Me Coffee</p>
          </a>
        </Link>
      </div>

      <div className="flex gap-2">
        <Button className="p-7 rounded-full bg-amber-300 text-black hover:bg-amber-200 font-bold text-lg">
          Log in
        </Button>
        <Button className="p-7 rounded-full bg-white border-amber-300 border text-black hover:bg-amber-200 font-bold text-lg">
          Sign Up
        </Button>
      </div>
    </div>
  );
};
