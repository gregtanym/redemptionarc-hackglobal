"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SizeChecker = ({ children }) => {
  const [isWindowSizeValid, setIsWindowSizeValid] = useState(true);

  const checkWindowSize = () => {
    if (window !== undefined) {
      if (window.innerWidth > 500) {
        // Change 1200 to your desired width threshold
        setIsWindowSizeValid(false);
      } else {
        setIsWindowSizeValid(true);
      }
    }
  };

  useEffect(() => {
    if (window !== undefined) {
      checkWindowSize();
      window.addEventListener("resize", checkWindowSize);
      return () => {
        window.removeEventListener("resize", checkWindowSize);
      };
    }
  }, []);

  if (!isWindowSizeValid) {
    return (
      <div className="h-screen flex justify-center items-center flex-col">
        <div className="flex justify-center items-center">
          Sorry! Please reduce your screen size as is site is supposed to be a
          mobile app.
        </div>
        <div className="text-center text-xl">
          This site is optimised for browsers lesser than 500px only.
        </div>
        <div>
          <Image
            src="/icons/SizeCheckError.svg"
            alt="404 Error"
            width="400"
            height="60"
          />
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default SizeChecker;
