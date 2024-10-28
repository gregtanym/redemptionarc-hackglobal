"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UsersData from "../../data/UsersData";
import { useGlobalContext } from "@/app/Context/store";

const QrCodeComponent = () => {
  const { selectedUserId } = useGlobalContext();
  const user = UsersData.find((user) => user.userId === selectedUserId);
  return (
    <div className="bg-black relative rounded-xl text-white min-h-[500px] max-h-[900px] h-[70vh]  w-[80vw]">
      <img src="/images/lyfLogo.png" className="absolute top-0 right-0"></img>
      <div className="flex flex-col items-center justify-center my-10">
        <Avatar className="w-[100px] h-[100px]">
          <AvatarImage src={user.profileImg} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="pb-4">{user.userName}</p>
        <img className="z-10" src="/images/qrCode.png"></img>
        <img
          src="/images/squiggly.png"
          className="z-2 w-[80vw] absolute bottom-0"
        ></img>
      </div>
    </div>
  );
};

export default QrCodeComponent;
