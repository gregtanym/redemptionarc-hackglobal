import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const QrCodeComponent = () => {
  return (
    <div className="bg-black relative rounded-xl text-white min-h-[500px] max-h-[900px] h-[70vh]  w-[80vw]">
      <img src="/images/lyfLogo.png" className="absolute top-0 right-0"></img>
      <div className="flex flex-col items-center justify-center my-10">
        <img className="pb-2" src="/images/ryanProfile.png"></img>
        <p className="pb-4">Ryan Loh</p>
        <img className="z-10" src="/images/qrCode.png"></img>
        <img
          src="/images/squiggly.png"
          className="z-0 w-[80vw] absolute bottom-0"
        ></img>
      </div>
    </div>
  );
};

export default QrCodeComponent;
