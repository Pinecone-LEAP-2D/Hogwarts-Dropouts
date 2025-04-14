"use client";
import { Button } from "@/components/ui/button";
import { useDonations } from "@/providers/DonationProvider";
import { Heart } from "lucide-react";

export const AboutUserInfo = () => {
  const { donations, loading } = useDonations();

  const hasSupporters = Array.isArray(donations) && donations.length > 0;

  return (
    <div className="w-[630px] h-auto bg-white space-y-6 p-4 rounded-2xl">
      <div className="space-y-5 border rounded-2xl p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              className="rounded-full"
              src="/AvatarImage.png"
              width={48}
              height={48}
              alt="Jake's avatar"
            />
            <p className="font-bold">Jake</p>
          </div>
          <Button className="bg-[#F4F4F5] text-black">Edit page</Button>
        </div>
        <hr className="my-4" />
        <div>
          <p className="font-medium">About Jake</p>
          <p>
            I'm a typical person who enjoys exploring different things. I also
            make music and art as a hobby. Follow me along!
          </p>
        </div>
      </div>

      <div className="space-y-2 border rounded-2xl p-4">
        <p className="font-medium">Social Media URL</p>
        <a
          className="text-blue-600 hover:underline"
          href="https://buymecoffee.com/spacerulz44"
          target="_blank">
          https://buymecoffee.com/spacerulz44
        </a>
      </div>
      <div className="space-y-4 border rounded-2xl p-4">
        <p className="font-medium">Recent Supporters</p>

        {!hasSupporters && !loading && (
          <div className="flex flex-col items-center justify-center text-center text-gray-500 space-y-2">
            <Heart className="w-6 h-6" />
            <p className="font-medium">Be the first one to support Jake</p>
          </div>
        )}

        {hasSupporters && (
          <div className="space-y-2">
            {donations.map(donation => (
              <div
                key={donation.id}
                className="bg-gray-100 p-3 rounded-md shadow-sm">
                <p>
                  <span className="font-semibold">
                    {donation.donor?.username}
                  </span>{" "}
                  donated ${donation.amount}
                </p>
                {donation.specialMessage && (
                  <p className="text-sm text-gray-600">
                    "{donation.specialMessage}"
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
