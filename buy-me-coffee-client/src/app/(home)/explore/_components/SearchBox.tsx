"use client";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

type SearchBoxProps = {
  onSearch: (query: string) => void;
};
export const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex gap-2 items-center">
      <SearchIcon color="gray" />
      <Input
        type="text"
        placeholder={"Search name"}
        value={query}
        onChange={e => setQuery(e.target.value)}
        className=" w-[200px]"
      />
    </div>
  );
};
