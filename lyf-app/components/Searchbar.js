"use client";
import React from "react";
import {
  MagnifyingGlass,
  SlidersHorizontal,
} from "@phosphor-icons/react";

const Searchbar = () => {
  return (
    <div className="py-2.5 w-full text-white rounded-full flex justify-around items-center self-center relative">
      <div className="absolute top-0 left-0 w-full h-full rounded-full backdrop-blur-sm bg-white/30 z-0"></div>
        <MagnifyingGlass size={23} className="z-10 w-1/6 ml-2" />
        <div className="z-10 w-4/6 mr-5">
            <div className="text-md font-semibold">Search places</div>
            <div className="text-xs">Date Range • Number of guests</div>
        </div>
        <SlidersHorizontal size={25} className="z-10 w-2/6" />
    </div>
  );
};

export default Searchbar;
