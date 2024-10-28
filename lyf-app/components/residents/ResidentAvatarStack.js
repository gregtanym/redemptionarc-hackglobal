import React, {useEffect, useState} from 'react';
import Link from "next/link";
import residentData from "@/data/roomResidentDetails.json"
import {useGlobalContext} from "@/app/Context/store";

function ResidentAvatarStack({bookId}) {
    const [residents, setResidents] = useState([]);
    const { booked } = useGlobalContext();

    console.log(booked);

    useEffect(() => {
        const residentsParticipating = residentData.find(room => room.roomId === Number(bookId));
        if (residentsParticipating && residentsParticipating.participants) {
            setResidents(residentsParticipating.participants);
        } else {
            console.warn("No participants found for this event");
        }
    }, [residentData, bookId]);

    return (
        <div className="flex flex-col items-center mt-8">
            {/* Avatars Stack */}
            <div className="flex -space-x-4 mb-2 mt-4">
                {residents.length > 0 ? (
                    residents.slice(0, 3).map((participant, index) => (
                        <img
                            key={index}
                            src={participant.img}
                            alt={index}
                            className="w-24 h-24 border-4 border-white rounded-full object-cover"
                            style={{ zIndex: 3 - index }}
                        />
                    ))
                ) : (
                    <div>
                        No participants yet
                    </div>
                )}
            </div>

            <Link href={`/lyf-together/individual-booking-residents/${bookId}`}>
                <span className="hover:underline hover:cursor-pointer text-sm font-semibold text-gray-700 hover:text-black">
                    See all residents
                </span>
            </Link>
        </div>
    );
}

export default ResidentAvatarStack;