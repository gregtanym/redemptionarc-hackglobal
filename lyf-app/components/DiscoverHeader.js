"use client";

import React from "react";
import room1 from "../images/room1.png";
import { UserCircle, Compass } from "@phosphor-icons/react";

const DiscoverHeader = () => {
  return (
    <div
      className="w-full h-44 bg-cover bg-center bg-no-repeat rounded-b-3xl shadow-shadow-strong p-4"
      style={{ backgroundImage: `url(${room1.src})` }}
    >
      <div className="absolute top-0 left-0 w-full h-44 rounded-b-3xl bg-black opacity-45"></div>
      <div className="flex justify-end h-1/5">
        <UserCircle size={40} color="white" className="relative z-10" />
      </div>
      <div className="relative z-10 flex flex-col justify-around h-4/5 w-full px-3">
        <h1 className="text-white text-2xl">
          Hey, <span className="font-bold">Suresh!</span>
        </h1>
        <div className="text-white text-2xl flex items-center">
          <Compass className="mr-3" size={30} />
          <span>Discover Lyf Today!</span>
        </div>
      </div>
    </div>
  );
};

export default DiscoverHeader;
