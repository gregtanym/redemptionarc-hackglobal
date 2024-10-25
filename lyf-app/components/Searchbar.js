"use client";

import React from "react";
import room1 from "../images/room1.png";
import {
  UserCircle,
  MagnifyingGlass,
  SlidersHorizontal,
} from "@phosphor-icons/react";

const Searchbar = () => {
  return (
    <div
      className="w-full h-52 bg-cover bg-center bg-no-repeat rounded-b-3xl shadow-shadow-strong p-4"
      style={{ backgroundImage: `url(${room1.src})` }}
    >
      <div className="absolute top-0 left-0 w-full h-52 rounded-b-3xl bg-black opacity-45"></div>
      <div className="flex justify-end h-1/5">
        <UserCircle size={40} color="white" className="relative z-10" />
      </div>
      <div className="relative z-10 flex flex-col justify-evenly h-4/5 w-full">
        <div className="px-3">
          <h1 className="text-white text-2xl">
            Hey, <span className="font-bold">Suresh!</span>
          </h1>
          <div className="text-white text-2xl">
            Tell us where you want to go
          </div>
        </div>
        <div className="w-full text-white rounded-full flex justify-around items-center self-center relative h-2/5">
          <div className="absolute top-0 left-0 w-full h-full rounded-full backdrop-blur-sm bg-white/30 z-0"></div>
          <MagnifyingGlass size={25} className="z-10 w-1/4" />
          <div className="z-10 w-2/3">
            <div className="text-md font-medium">Search Places</div>
            <div className="text-xs">Date Range • Number of guests</div>
          </div>
          <SlidersHorizontal size={25} className="z-10 w-1/4" />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
