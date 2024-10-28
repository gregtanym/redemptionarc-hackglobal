"use client"

import React, {useEffect, useState} from 'react';
import oldResidentsStats from "@/data/roomResidentsStats.json"
import {usePathname} from "next/navigation";
import Link from "next/link";
import ResidentsStats from "@/components/participants/ResidentsStats";
import ResidentAvatarStack from "@/components/residents/ResidentAvatarStack";

const Page = () => {
    const pathName = usePathname();
    const [bookId, setBookId] = useState(pathName.split("/")[3]);
    const [residentStats, setResidentStats] = useState([]);

    useEffect(() => {
        const matchedData = oldResidentsStats.find((item) => item.roomId === Number(bookId));
        setResidentStats(matchedData || null);

    }, [oldResidentsStats, bookId]);

    return (
        <div>
            {/* Back button */}
            <Link href={`/lyf-together/individual-booking/${bookId}`}
                  className="absolute top-4 left-4 text-black flex items-center z-50 transition-transform transform hover:-translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                     stroke="currentColor"
                     className="w-6 h-6 transition-transform transform group-hover:-translate-x-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                </svg>
                <span className="ml-2 transition-transform transform group-hover:-translate-x-1">Back</span>
            </Link>

            <ResidentAvatarStack bookId={bookId}/>

            <ResidentsStats data={residentStats ? residentStats.stats : {}}/>
        </div>
    );
};

export default Page;