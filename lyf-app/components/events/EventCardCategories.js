import React from 'react';
import Image from "next/image";
import Link from "next/link";

function EventCardCategories() {
    const imageData = [
        { imageSrc: "/images/eventWorkshop.jpg", imageName: "Workshop", link: "/event-page/workshop" },
        { imageSrc: "/images/eventFood.jpg", imageName: "Food", link: "/event-page/food" },
        { imageSrc: "/images/eventSport.jpg", imageName: "Sport", link: "/event-page/sport" },
        { imageSrc: "/images/eventPerformance.jpg", imageName: "Performance", link: "/event-page/performance" }
    ];

    return (
        <div className="p-1">
            <div className="flex justify-center space-x-2">
                {imageData.map((item, index) => (
                    <Link href={item.link} key={index} passHref>
                        <div className="group flex flex-col items-center space-y-2 cursor-pointer">
                            <div
                                className="w-28 h-40 rounded-lg overflow-hidden transform transition duration-300 ease-in-out group-hover:scale-105 group-active:scale-110">
                                <Image
                                    src={item.imageSrc}
                                    alt={item.imageName}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                                    width={128}
                                    height={160}
                                    quality={100}
                                />
                            </div>
                            <p className="text-sm font-medium text-center">
                                {item.imageName}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default EventCardCategories;