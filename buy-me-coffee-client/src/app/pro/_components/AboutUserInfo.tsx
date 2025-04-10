import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export const AboutUserInfo = () => {
  return (
    <div className="w-[630px] h-[630px] bg-white space-y-6 ">
      <div className="space-y-5 outline-1 rounded-2xl p-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <img
              className="rounded-full"
              src="AvatarImage.png"
              width={48}
              height={48}
            />
            <p className="font-bold">Jake</p>
          </div>
          <Button className="bg-[#F4F4F5] text-black">Edit page</Button>
        </div>
        <div>
          <hr className="mb-5" />
          <p className="font-medium">About Jake</p>
          <p>
            i'm typical person who enjoys exploring different things. I also
            make music art as a hobby. Follow me along
          </p>
        </div>
      </div>
      <div className="space-y-5 outline-1 rounded-2xl p-4">
        <p className="font-medium">Social media URL</p>
        <a>https://buymecoffee.com/spacerulz44</a>
      </div>
      <div className="space-y-5 outline-1 rounded-2xl p-4">
        <p className="font-medium">Recent Supporters</p>
        <div className="space-y-5 outline-1 rounded-2xl p-4 items-center justify-center flex flex-col">
          <Heart />
          <p className="font-medium">Be the first one to support Jake</p>
        </div>
      </div>
    </div>
  );
};
