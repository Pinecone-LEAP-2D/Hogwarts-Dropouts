"use client";
import { Search } from "./_components/SearchBox";
import { Dashboard } from "./_features/Dashboard";

export default function Home() {
  return (
    <div className="w-4/7  flex flex-col justify-center p-5 gap-5">
      <p className="text-2xl font-bold">Explore creators</p>
      <Search />
      <Dashboard />
    </div>
  );
}
