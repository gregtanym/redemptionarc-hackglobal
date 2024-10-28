"use client";

import React from "react";
import MainHeader from "./MainHeader";
import Searchbar from "./Searchbar";
import { useGlobalContext } from "@/app/Context/store";
import UsersData from "../data/UsersData";

const BookingsHeader = () => {
  const { selectedUserId } = useGlobalContext();
  const user = UsersData.find((user) => user.userId === selectedUserId);
  return (
    <MainHeader>
      <div className="relative z-10 flex flex-col justify-evenly h-40 w-full">
        <div className="px-3">
          <h1 className="text-white text-2xl">
            Hey, <span className="font-bold">{user.userName}!</span>
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
