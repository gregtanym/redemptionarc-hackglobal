"use client";

import React from "react";
import { Compass } from "@phosphor-icons/react";
import MainHeader from "../MainHeader";

const DiscoverHeader = () => {
  return (
    <MainHeader>
      <div className="relative z-10 flex flex-col justify-around h-28 w-full px-3">
        <h1 className="text-white text-2xl">
          Hey, <span className="font-bold">Ryan!</span>
        </h1>
        <div className="text-white text-2xl flex items-center">
          <Compass className="mr-3" size={30} />
          <span>Discover Lyf Today!</span>
        </div>
      </div>
    </MainHeader>
  );
};

export default DiscoverHeader;
