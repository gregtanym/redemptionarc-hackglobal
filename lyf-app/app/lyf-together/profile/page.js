"use client";
import React from "react";
import MainHeader from "@/components/MainHeader";
import { User } from "@phosphor-icons/react";
import { useGlobalContext } from "../../Context/store";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  const { selectedUserId } = useGlobalContext();
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <MainHeader>
        <div className="flex text-white relative z-10 items-center">
          <User size={35} className="mx-4" />
          <div className="font-semibold text-2xl">My Profile</div>
        </div>
      </MainHeader>
      <div className="w-5/6 mt-8 bg-red-500 flex flex-col items-center">
        <Avatar className="w-[100px] h-[100px]">
          <AvatarImage src="/images/ryannn.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="font-semibold">Ryan Loh</div>
        <div className="text-sm">
          Solo travelling is the best!!! I will do it forever and ever
        </div>
        <div className="flex flex-col items-start mt-3 w-full">
          <div className="font-semibold">Badges</div>
          <div className="flex mt-2">
            <img className="z-10 mr-4" src="/icons/Badge1.svg"></img>
            <img className="z-10 mr-4" src="/icons/Badge2.svg"></img>
            <img className="z-10 mr-4" src="/icons/Badge3.svg"></img>
          </div>
        </div>
        <div>Settings</div>
        <div>More</div>
      </div>
    </div>
  );
};

export default Profile;
