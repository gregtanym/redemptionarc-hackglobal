"use client";
import React from "react";
import {
  UserCircle,
  MagnifyingGlass,
  SlidersHorizontal,
} from "@phosphor-icons/react";

const Searchbar = () => {
  return (
    <div className="w-full text-white rounded-full flex justify-around items-center self-center relative h-2/5">
      <div className="absolute top-0 left-0 w-full h-full rounded-full backdrop-blur-sm bg-white/30 z-0"></div>
      <MagnifyingGlass size={25} className="z-10 w-1/4" />
      <div className="z-10 w-2/3">
        <div className="text-md font-medium">Search Places</div>
        <div className="text-xs">Date Range • Number of guests</div>
      </div>
      <SlidersHorizontal size={25} className="z-10 w-1/4" />
    </div>
  );
};

export default Searchbar;
