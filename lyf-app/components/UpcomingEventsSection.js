"use client";
import React from "react";
import eventData from "../data/SampleEventsData.json";
import Image from "next/image";

const UpcomingEventsSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between items-center w-full mb-3">
        <div className="text-2xl font-bold">My upcoming Events</div>
        <div className="underline cursor-pointer">See all</div>
      </div>
      <div className="w-full">
        {eventData.map((event, index) => {
          const eventDate = new Date(event.datetime);
          const month = eventDate.toLocaleDateString("en-US", {
            month: "short",
          });
          const day = eventDate.getDate();
          return (
            <div className="flex w-full h-44 items-start" key={index}>
              <div className="flex flex-col items-center">
                <div className="flex flex-col justify-center items-center bg-date-card-bg border border-date-card-border h-12 w-12 rounded-lg p-3">
                  <div className=" uppercase text-sm">{month}</div>
                  <div className="font-bold text-sm -mt-1">{day}</div>
                </div>
                {index !== eventData.length - 1 && (
                  <div className="w-px h-32 bg-date-card-border"></div>
                )}
              </div>
              <div className="relative ml-5 mb-3 w-full h-40 cursor-pointer">
                <Image
                  src={"/images/room1.png"}
                  alt="event-img"
                  layout={"fill"}
                  objectFit="cover"
                  className="rounded-2xl"
                />
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.6))",
                  }}
                >
                  <div className="absolute bottom-3 left-4 w-full flex items-end justify-start text-white text-lg">
                    <p className="">{event.title}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingEventsSection;
