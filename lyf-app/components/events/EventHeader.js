"use client";

import React from "react";
import {CalendarStar} from "@phosphor-icons/react";
import MainHeader from "../MainHeader";
import EventSearchBar from "@/components/events/EventSearchBar";

const EventHeader = () => {
    return (
        <MainHeader>
            <div className="relative z-10 flex flex-col justify-around h-28 w-full px-3">
                <div className="text-white text-2xl flex items-center mb-5">
                    <CalendarStar size={32} className="mr-2"/>
                    <span className="font-bold">Events</span>
                </div>

                <EventSearchBar />
            </div>
        </MainHeader>
    );
};

export default EventHeader;
