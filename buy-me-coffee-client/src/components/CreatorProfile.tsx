import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "@/components/ui/button";

export const CreatorProfile = () => {
  return (
    <div className="w-[900px] h-[225px] outline-2 p-4 rounded-xl">
      <div className="flex gap-3 justify-between">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <h2 className="text-2xl font-bold">Morty</h2>
        </div>
        <Button variant="outline">View profile</Button>
      </div>
      <div className="flex gap-15">
        <div>
          <h2 className="text-xl font-bold w-[420px] h-[36px]">About Morty</h2>
          <p className="w-[420px] h-[80px]">
            Morty Smith is a main character from Rick and Morty, first appearing
            in 2013. He's a nervous, kind-hearted teenager who travels through
            dimensions with his genius but reckless grandfather, Rick Sanchez.
          </p>
        </div>
        <div className="w-[420px] h-[64px]">
          <h2 className="text-xl font-bold">Social media URL</h2>
          <p>https://buymecoffee.com/morty69</p>
        </div>
      </div>
    </div>
  );
};
