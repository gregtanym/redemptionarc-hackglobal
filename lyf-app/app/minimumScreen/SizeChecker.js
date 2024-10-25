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
          ERROR: REDUCE SCREEN SIZE
        </div>
        <div className="text-center text-xl">
          This site is optimised for browsers lesser than 500px only.
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default SizeChecker;
