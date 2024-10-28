"use client"

import React, { useEffect, useState } from 'react';
import { usePathname } from "next/navigation";
import allResidentDetailsData from "@/data/SampleResidentDetailsData.json";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image";

const Page = () => {
    const path = usePathname();
    const eventName = decodeURIComponent(path.split("/")[3]);
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        const matchedData = allResidentDetailsData.find(
            (item) => item.eventName === eventName
        );
        setParticipants(matchedData?.participants || []);
    }, [eventName]);

    return (
        <div>
            {/* Back button */}
            <Link href={`/lyf-together/residents/${eventName}`}
                  className="absolute top-4 left-4 text-black flex items-center z-50 transition-transform transform hover:-translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                     stroke="currentColor"
                     className="w-6 h-6 transition-transform transform group-hover:-translate-x-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                </svg>
                <span className="ml-2 transition-transform transform group-hover:-translate-x-1">Back</span>
            </Link>

            <div className="mt-14">
                <div className="text-lg font-extrabold ml-4">Meet some of the TOP friendly participants</div>
                {/*todo*/}
                <div className="grid grid-cols-2 mx-4">
                    {participants.length > 0 ? (
                        participants.slice(0,3).map((eachParticipant, index) => (
                            <div
                                key={index}
                                className="col-span-1 hover:cursor-pointer flex items-center space-x-4 space-y-3 transform transition-transform duration-200 ease-in-out hover:scale-105"
                            >
                                <Avatar className="w-12 h-12">
                                    <AvatarImage src={eachParticipant.img} className="object-cover"/>
                                    <AvatarFallback>{eachParticipant.name[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold text-sm hover:underline">{eachParticipant.name}</p>
                                    <p className="text-xs text-gray-500 mb-1">
                                        {eachParticipant.numPositiveReviews} positive reviews
                                    </p>
                                    <div className="flex space-x-2">
                                        {eachParticipant.badges.map((badge, index) => {
                                            return (
                                                <Image
                                                    key={index}
                                                    src={badge}
                                                    alt="Icon description"
                                                    width={25}
                                                    height={25}
                                                />
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="ml-4">No participants found for this event.</p>
                    )}

                </div>
            </div>

            <div className="mt-6">
                <div className="text-lg font-extrabold ml-4">Meet your fellow residents</div>
                <div className="mt-2 space-y-4 ml-4">
                    {participants.length > 0 ? (
                        participants.map((eachParticipant, index) => (
                            <div
                                key={index}
                                className="hover:cursor-pointer flex items-center space-x-4 space-y-3 transform transition-transform duration-200 ease-in-out hover:scale-105"
                            >
                                <Avatar className="w-16 h-16">
                                    <AvatarImage src={eachParticipant.img} className="object-cover"/>
                                    <AvatarFallback>{eachParticipant.name[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold text-md hover:underline">{eachParticipant.name}</p>
                                    <p className="text-xs text-gray-500 mb-1">
                                        {eachParticipant.numPositiveReviews} positive reviews
                                    </p>
                                    <p className="text-sm text-gray-700">{eachParticipant.description}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="ml-4">No participants found for this event.</p>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Page;
