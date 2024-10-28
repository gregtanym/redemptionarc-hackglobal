"use client"

import React, {useEffect, useState} from 'react'
import ResidentsStats from "@/components/participants/ResidentsStats";
import allResidentData from "../../../../../../data/SampleResidentStatsData.json"
import {usePathname} from "next/navigation";
import ParticipantsAvatarStack from "@/components/participants/ParticipantsAvatarStack";
import Link from "next/link";

const Residents = () => {
    const path = usePathname();
    const eventName = decodeURIComponent(path.split("/")[5]);
    const [selectedTab, setSelectedTab] = useState(path.split("/")[3]);
    const [eventId, setEventId] = useState(path.split("/")[4]);
    const [residentData, setResidentData] = useState(null);

    useEffect(() => {
        const matchedData = allResidentData.find((item) => item.eventName === eventName);
        setResidentData(matchedData || null);
    }, [eventName, allResidentData]);

    return (
        <div>
            {/* Back button */}
            <Link href={`/event-detail-page/${selectedTab}/${eventId}`}
                  className="absolute top-4 left-4 text-black flex items-center z-50 transition-transform transform hover:-translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                     stroke="currentColor"
                     className="w-6 h-6 transition-transform transform group-hover:-translate-x-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                </svg>
                <span className="ml-2 transition-transform transform group-hover:-translate-x-1">Back</span>
            </Link>

            <ParticipantsAvatarStack eventName={eventName} eventId={eventId} selectedTab={selectedTab} />

            <ResidentsStats data={residentData ? residentData.stats : {}}/>
        </div>
    )
}

export default Residents