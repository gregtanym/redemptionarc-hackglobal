"use client";

import React from "react";
import { Compass } from "@phosphor-icons/react";
import MainHeader from "../MainHeader";
import UsersData from "../../data/UsersData";
import { useGlobalContext } from "@/app/Context/store";

const DiscoverHeader = () => {
  const { selectedUserId } = useGlobalContext();
  const user = UsersData.find((user) => user.userId === selectedUserId);
  return (
    <MainHeader>
      <div className="relative z-10 flex flex-col justify-around h-28 w-full px-3">
        <h1 className="text-white text-2xl">
          Hey, <span className="font-bold">{user.userName}!</span>
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
