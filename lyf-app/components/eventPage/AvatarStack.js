import { Avatar } from "@material-tailwind/react";
import React, {useEffect, useState} from "react";

export function AvatarStack({ participants }) {
    const [participantsDetails, setParticipantsDetails] = useState(null);

    useEffect(() => {
        setParticipantsDetails(participants.participants);
    }, [participants]);

    return (
        <div className="flex items-center -space-x-4">
            {
                participantsDetails ? (
                    participantsDetails.map((participant, index) => (
                        <Avatar
                            key={index}
                            variant="circular"
                            className="border-2 border-white hover:z-10 focus:z-10 rounded-[50px]"
                            src={participant.img}
                        />
                    ))
                ) : (
                    <div>
                        No participants yet
                    </div>
                )
            }
        </div>
    );
}
