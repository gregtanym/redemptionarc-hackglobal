import React from "react";
import DiscoverHeader from "../discover/DiscoverHeader";
import QrCodeComponent from "./QrCodeComponent";

const QrScanPage = () => {
  return (
    <div>
      <DiscoverHeader />
      <div className="flex flex-col text-center items-center h-screen mb-4">
        <h2 className="font-bold text-[25px] pt-10 pb-4">Scan your QR Code here</h2>
        <p className="text-[18px] w-[80vw] pb-8">
          Scan QR code to access shared spaces available at your stay
        </p>
        <QrCodeComponent />
      </div>
    </div>
  );
};

export default QrScanPage;
