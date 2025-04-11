import React, { useState } from "react";
import { Header } from "./Header";
import { Input } from "@/components/ui/input";
import { CreatorProfile } from "./CreatorProfile";

type SearchBoxProps = {
  onSearch: (query: string) => void;
};

export const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <>
      <div>
        <Header />
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Explore Creators</h2>
          <Input
            type="text"
            placeholder={"Search name"}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow w-[200px]"
          />
          <CreatorProfile />
        </div>
      </div>
    </>
  );
};
