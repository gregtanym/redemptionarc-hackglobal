import React from "react";
import popularDestinations from "@/data/popularDestination.json";
import Link from "next/link";
import Image from "next/image";
import { useGlobalContext } from "@/app/Context/store";

function PopularDestination(props) {
  const { setNotClickableText, setOpenNotClickable } = useGlobalContext();

  return (
    <div>
      <h1 className="font-bold text-xl mt-4 mb-2 ml-4">Popular Destinations</h1>

      <div className="">
        <div className="flex justify-center space-x-2">
          {popularDestinations.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer"
              passHref
              onClick={() => {
                setNotClickableText(
                  "Sorry none of our locations are clickable, however you can click on App Exclusive to see our exclusive locations!"
                );
                setOpenNotClickable(true);
              }}
            >
              <div className="group flex flex-col items-center space-y-2 cursor-pointer">
                <div className="w-28 h-40 rounded-lg overflow-hidden transform transition duration-300 ease-in-out group-hover:scale-105 group-active:scale-110">
                  <Image
                    src={item["imageSrc"]}
                    alt={item["imageName"]}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                    width={128}
                    height={160}
                    quality={100}
                  />
                </div>
                <p className="text-sm font-medium text-center">
                  {item["imageName"]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularDestination;
