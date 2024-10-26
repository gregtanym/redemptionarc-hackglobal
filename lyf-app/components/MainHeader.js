"use client";

import React from "react";
import room1 from "../public/images/room1.png";
import { UserCircle, Compass } from "@phosphor-icons/react";

const MainHeader = ({ children }) => {
  return (
    <div
      className="w-full relative h-auto bg-cover bg-center bg-no-repeat rounded-b-3xl shadow-shadow-strong p-4"
      style={{ backgroundImage: `url(${room1.src})` }}
    >
      <div className="absolute top-0 left-0 w-full inset-0 rounded-b-3xl bg-black opacity-45"></div>
      <div className="flex justify-end h-1/5">
        <UserCircle size={40} color="white" className="relative z-10" />
      </div>
      {children}
    </div>
  );
};

export default MainHeader;
