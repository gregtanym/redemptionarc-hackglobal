import React, {useEffect, useState} from 'react';
import Link from "next/link";
import residentData from "../../data/SampleResidentDetailsData.json";

function ResidentAvatarStack(eventName) {
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        const residentsParticipating = residentData.find(resEvent => resEvent.eventName === eventName.eventName);

        console.log(residentsParticipating);

        setParticipants(residentsParticipating.participants);

    }, [eventName]);


    return (
        <div className="flex flex-col items-center mt-8">
            {/* Avatars Stack */}
            <div className="flex -space-x-4 mb-2 mt-4">
                {participants.length > 0 ? (
                    participants.slice(0, 3).map((participant, index) => (
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

            <Link href={`/lyf-together/residents-details/${eventName.eventName}`}>
                <span className="hover:underline hover:cursor-pointer text-sm font-semibold text-gray-700 hover:text-black">
                    See all participants
                </span>
            </Link>
        </div>
    );
}

export default ResidentAvatarStack;