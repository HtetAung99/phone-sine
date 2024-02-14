"use client";

import { CircleUserRound, ShoppingBag, Search } from "lucide-react";
import { useState } from "react";
import { NavList } from "./navItem/navList";
export default function NavBar() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <nav className="flex justify-between items-center px-[3vw] py-2 shadow-md">
      <h1 className="text-2xl font-bold pr-2 ">Phone Sine</h1>
      <div>
        <NavList />
      </div>
      <div className="flex items-center">
        <input
          className="border border-gray-300 rounded-3xl px-3 py-0 w-28 text-base"
          type="text"
          placeholder="Search"
        />

        <button className="pl-1 pr-1.5">
          <Search className="w-5 h-5  text-neutral-600 hover:text-black" />
        </button>

        <button className="p-1.5">
          <ShoppingBag className="w-5 h-5  text-neutral-600 hover:text-black" />
        </button>

        <button
          onClick={() => {
            setIsClicked(true);
          }}
          className="p-1.5"
        >
          <CircleUserRound className="w-5 h-5  text-neutral-600 hover:text-black" />
        </button>
      </div>
    </nav>
  );
}
