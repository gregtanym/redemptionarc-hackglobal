import React from 'react';
import eventCatData from "@/data/SampleEventCatsData.json";
import Image from "next/image";
import {UsersThree} from "@phosphor-icons/react";

function EventPageHeader({ category }) {
    return (
        <div className="relative w-full h-64">
            {eventCatData
                .filter((item) => item["imageName"].toLowerCase() === category.toLowerCase())
                .map((item, index) => (
                    <div key={index} className="relative w-full h-full">
                        {/* Image */}
                        <Image
                            src={item["imageSrc"]}
                            alt="image"
                            width={500} // Adjust width as needed
                            height={300} // Adjust height as needed
                            className="object-cover rounded-b-2xl w-full h-full"
                            quality={100}
                        />

                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-2xl"></div>

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
