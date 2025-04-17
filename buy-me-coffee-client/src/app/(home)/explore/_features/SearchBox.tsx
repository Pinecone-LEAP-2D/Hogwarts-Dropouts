"use client";
import { Input } from "@/components/ui/input";
import { ProfileType } from "@/providers/ProfileProvider";
import axios from "axios";
import { SearchIcon } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

export const SearchBox = (props: {
  setProfiles: Dispatch<SetStateAction<ProfileType[]>>;
}) => {
  const { setProfiles } = props;
  const [searchValue, setSearchValue] = useState("");
  const getPros = async (value: string) => {
    const response = await axios.get(
      `http://localhost:4000/profile/explore?name=${value}`
    );
    setProfiles(response.data);
  };
  const handleSearchValueChange = async (e: string) => {
    console.log(e);
    setSearchValue(e);
    await getPros(e);
  };
  return (
    <div className="flex gap-2 items-center">
      <SearchIcon color="gray" />
      <Input
        type="text"
        placeholder={"Search name"}
        value={searchValue}
        onChange={e => handleSearchValueChange(e.target.value)}
        className=" w-[250px]"
      />
    </div>
  );
};
