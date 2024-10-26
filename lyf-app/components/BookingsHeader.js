"use client";

import React from "react";
import MainHeader from "./MainHeader";
import Searchbar from "./Searchbar";

const BookingsHeader = () => {
  return (
    <MainHeader>
      <div className="relative z-10 flex flex-col justify-evenly h-40 w-full">
        <div className="px-3">
          <h1 className="text-white text-2xl">
            Hey, <span className="font-bold">Suresh!</span>
          </h1>
          <div className="text-white text-2xl mb-2">
            Tell us where you want to go
          </div>
        </div>
        <Searchbar />
      </div>
    </MainHeader>
  );
};

export default BookingsHeader;
