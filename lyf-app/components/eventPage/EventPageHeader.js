import React from 'react';
import eventCatData from "@/data/SampleEventCatsData.json";
import Image from "next/image";
import {UsersThree} from "@phosphor-icons/react";
import Link from 'next/link';

function EventPageHeader({ category }) {
    return (
        <div className="relative w-full h-64">

            {/*Back button*/}
            <Link href="/events" className="absolute top-4 left-4 text-white flex items-center z-50 transition-transform transform hover:-translate-x-1 hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 transition-transform transform group-hover:-translate-x-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span className="ml-2 transition-transform transform group-hover:-translate-x-1">Back</span>
            </Link>

            {eventCatData
                .filter((item) => item["imageName"].toLowerCase() === category.toLowerCase())
                .map((item, index) => (
                    <div key={index} className="relative w-full h-full">
                        <Image
                            src={item["imageSrc"]}
                            alt="image"
                            width={500}$
                            height={300}
                            className="object-cover w-full h-full"
                            quality={100}
                        />

                        {/*opacity*/}
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                        <div className="absolute bottom-4 left-4 text-white px-4 mb-4">
                            <div className="flex">
                                <UsersThree size={32}/>
                                <h1 className="ml-2 text-2xl font-semibold mb-1">{item["imageName"]}</h1>
                            </div>
                            <p className="text-sm leading-relaxed">{item["description"]}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default EventPageHeader;
