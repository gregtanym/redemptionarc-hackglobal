"use client"

import React, {useEffect, useState} from 'react';
import EventDetails from "../../../../data/SampleEventDetails.json"
import {usePathname} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {Ticket, MapPinArea , Clock} from "@phosphor-icons/react";
import {AvatarStack} from "@/components/eventPage/AvatarStack";
import {Button} from "@/components/ui/button";
import residentData from "@/data/SampleResidentDetailsData.json";
import { Spinner } from "@material-tailwind/react";

const Page = () => {
    const pathName = usePathname();
    const [event, setEvent] = useState(null);
    const [participants, setParticipants] = useState([]);
    const [selectedTab, setSelectedTab] = useState(pathName.split("/")[2]);

    useEffect(() => {
        const idx = parseInt(pathName.split("/")[3]);

        const filteredEvents = EventDetails
            .filter((item) => item["tab"] === selectedTab)
            .flatMap((item) => item["events"])
            .filter((event) => event["id"] === idx);

        const residentsParticipating = residentData.find(resEvent => resEvent.eventName === filteredEvents[0].name);

        setParticipants(residentsParticipating);
        setEvent(filteredEvents[0]);
    }, [pathName]);

    return (
        <div>
            {event ? (
                <div className="relative w-full min-h-screen overflow-y-hidden">
                    {/* Back button */}
                    <Link href={`/event-page/${event.category}`}
                          className="absolute top-4 left-4 text-white flex items-center z-50 transition-transform transform hover:-translate-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                             stroke="currentColor"
                             className="w-6 h-6 transition-transform transform group-hover:-translate-x-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                        </svg>
                        <span className="ml-2 transition-transform transform group-hover:-translate-x-1">Back</span>
                    </Link>

                    <div className="relative w-full h-64">
                        <Image
                            src={event["imageSrc"]}
                            alt="event image"
                            width={500}
                            height={400}
                            className="object-cover w-full h-full"
                            quality={100}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                    </div>

                    {/* Card details */}
                    <div className="relative -mt-10 pt-6 px-6 transform bg-white rounded-t-[30px] z-10">
                        {/* Event Title */}
                        <h2 className="text-2xl font-bold">{event.name}</h2>
                        <p className="text-gray-700 my-4">{event.description}</p>

                        {/* Additional details */}
                        <hr />
                        <div className="my-2">
                            <p className="font-semibold mb-1">Details:</p>
                            <div className="flex items-center text-black">
                                <Ticket className="mr-2" size={20} />
                                <span className="text-sm">{event.ticket}</span>
                            </div>
                            <div className="flex items-center mt-2 text-black">
                                <Clock className="mr-2" size={20} />
                                <span className="text-sm">
                                    {event.dayDate} {event.monthDate} 2024, {event.time}
                                </span>
                            </div>
                            <div className="flex items-center mt-2 text-black">
                                <MapPinArea className="mr-2" size={20} />
                                <span className="text-sm">{event.location}</span>
                            </div>

                            <div className="w-full h-60 mt-3">
                                <Image
                                    src={event["imageEventLocationSrc"]}
                                    alt="event location"
                                    width={500}
                                    height={400}
                                    className="object-cover w-full h-[250px] rounded-[30px]"
                                    quality={100}
                                />
                            </div>
                        </div>

                        <hr className="mt-6" />
                        <div className="mt-2">
                            <p className="font-semibold">Participants:</p>
                            <span className="text-sm text-gray-400">{participants.participants.length} people joined</span>

                            {/* People Count */}
                            <div className="flex items-center mt-2 mb-2">
                                <AvatarStack participants={participants}/>
                            </div>

                            {/*To participants*/}
                            <Link href={`/lyf-together/residents/${selectedTab}/${event.id}/${event.name}`}>
                                <p className="hover:underline hover:cursor-pointer text-sm text-black">Meet the
                                    residents</p>
                            </Link>

                        </div>

                        <Button className="mt-4 bg-black text-white rounded-[50px] w-full h-14 hover:bg-gray-800">
                            Join now
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center w-full mt-12">
                    <Spinner className="h-16 w-16 text-gray-900/50" />
                </div>
            )}
        </div>
    );

};

export default Page;