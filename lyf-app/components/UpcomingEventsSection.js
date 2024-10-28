"use client";
import React from "react";
import eventData from "../data/SampleEventsData.json";
import Image from "next/image";
import { MapPin } from "lucide-react";

const UpcomingEventsSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between items-center w-full mb-3 mt-4">
        <h1 className="font-bold text-xl ml-4">My Upcoming Events</h1>
        <div className="underline cursor-pointer mr-4">See all</div>
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
              <div className="flex flex-col items-center ml-4">
                <div className="bg-white flex flex-col justify-center items-center border border-date-card-border h-12 w-12 rounded-lg p-3">
                  <div className=" uppercase text-sm">{month}</div>
                  <div className="font-bold text-sm -mt-1">{day}</div>
                </div>
                {index !== eventData.length - 1 && (
                  <div className="w-px h-32 bg-date-card-border"></div>
                )}
              </div>

              {/*images*/}
              <div className="relative ml-5 mb-3 w-full h-40 cursor-pointer mr-4 group transform transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={event.img}
                    alt="event-img"
                    fill
                    style={{ objectFit: "cover" }}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.6))",
                  }}
                >
                  <div className="absolute bottom-9 left-4 w-full flex items-end justify-start text-white text-lg font-regular">
                    <MapPin size={23} className="mr-2" />
                    <p>{event.location}</p>
                  </div>
                  <div className="absolute bottom-3 left-4 w-full flex items-end justify-start text-white text-lg font-bold">
                    <p>{event.description}</p>
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
