"use client";
import React from "react";
import eventData from "../data/SampleEventsData.json";

const UpcomingEventsSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between items-center w-full mb-3">
        <div className="text-2xl font-bold">Upcoming Events</div>
        <div className="underline">See all</div>
      </div>
      <div className="w-full">
        {eventData.map((event) => {
          const eventDate = new Date(event.datetime);
          const month = eventDate.toLocaleDateString("en-US", {
            month: "short",
          });
          const day = eventDate.getDate();
          return (
            <div className="flex w-full h-40 items-start">
              <div className="flex flex-col items-center">
                <div className="flex flex-col justify-center items-center bg-date-card-bg border border-date-card-border h-12 w-12 rounded-lg p-3">
                  <div className=" uppercase text-sm">{month}</div>
                  <div className="font-bold text-sm">{day}</div>
                </div>
                <div class="w-px h-32 bg-date-card-border"></div>
              </div>
              <div>show image</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingEventsSection;
