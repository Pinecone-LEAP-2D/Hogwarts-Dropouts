"use client";

import { Loader } from "@/components/Loader";
import { SearchByAmount } from "./_components/SearchByAmount";
import { TotalEarning } from "./_components/TotalEarning";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <Loader loading={loading}>
      <div className="w-full h-screen">
        <div className="w-[955px] h-[990px] flex flex-col m-auto gap-6">
          <TotalEarning />
          <SearchByAmount />
        </div>
      </div>
    </Loader>
  );
}
