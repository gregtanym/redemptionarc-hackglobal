"use client"

import React, {useEffect, useState} from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import residentDetails from "@/data/roomResidentDetails.json";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";

const Page = () => {
    const pathName = usePathname();
    const [bookId, setBookId] = useState(pathName.split("/")[3]);
    const [residents, setResidents] = useState([]);

    useEffect(() => {
        const matchedData = residentDetails.find((item) => item.roomId === Number(bookId));
        setResidents(matchedData?.participants || []);

        console.log(matchedData);
    }, [residentDetails, bookId]);

    console.log(bookId);

    return (
        <div>
            {/* Back button */}
            <Link href={`/lyf-together/residents-booking/${bookId}`}
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
                <div className="grid grid-cols-2 mx-4">
                    {residents.length > 0 ? (
                        residents.slice(0, 3).map((eachResident, index) => (
                            <div
                                key={eachResident.name}  // Use a unique property like "name" if it is unique
                                className="col-span-1 hover:cursor-pointer flex items-center space-x-4 space-y-3 transform transition-transform duration-200 ease-in-out hover:scale-105"
                            >
                                <Avatar className="w-12 h-12">
                                    <AvatarImage src={eachResident.img} className="object-cover"/>
                                    <AvatarFallback>{eachResident.name[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold text-sm hover:underline">{eachResident.name}</p>
                                    <p className="text-xs text-gray-500 mb-1">
                                        {eachResident.numPositiveReviews} positive reviews
                                    </p>
                                    <div className="flex space-x-2">
                                        {eachResident.badges.map((badge, badgeIndex) => (
                                            <Image
                                                key={`${eachResident.name}-badge-${badgeIndex}`}
                                                src={badge}
                                                alt="Icon description"
                                                width={25}
                                                height={25}
                                            />
                                        ))}
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
                    {residents.length > 0 ? (
                        residents.map((eachResident) => (
                            <Dialog key={eachResident.name}>
                                <DialogTrigger asChild>
                                    <div
                                        className="hover:cursor-pointer flex items-center space-x-4 space-y-3 transform transition-transform duration-200 ease-in-out hover:scale-105"
                                    >
                                        <Avatar className="w-16 h-16">
                                            <AvatarImage src={eachResident.img} className="object-cover"/>
                                            <AvatarFallback>{eachResident.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold text-md hover:underline">{eachResident.name}</p>
                                            <p className="text-xs text-gray-500 mb-1">
                                                {eachResident.numPositiveReviews} positive reviews
                                            </p>
                                            <p className="text-sm text-gray-700">{eachResident.description}</p>
                                        </div>
                                    </div>
                                </DialogTrigger>

                                <DialogContent className="w-full max-w-[600px] mx-auto px-4 py-6">
                                    <DialogHeader>
                                        <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
                                            <Image
                                                src="/images/mountainImage.jpg"
                                                alt="Background Banner"
                                                layout="fill"
                                                objectFit="cover"
                                                quality={100}
                                                className="rounded-t-lg"
                                            />
                                        </div>

                                        {/* Avatar Overlap */}
                                        <div
                                            className="absolute top-44 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center">
                                            <Avatar
                                                className="w-24 h-24 rounded-full border-4 border-white shadow-lg">
                                                <AvatarImage src={eachResident.img} alt={eachResident.name}
                                                             className="object-cover"/>
                                                <AvatarFallback>{eachResident.name[0]}</AvatarFallback>
                                            </Avatar>
                                        </div>
                                    </DialogHeader>

                                    <div className="flex flex-col items-center space-y-2 mt-9">
                                        <DialogTitle className="text-lg font-semibold">
                                            {eachResident.name}
                                        </DialogTitle>
                                        <span className="text-xs text-gray-500">
                                            {eachResident.numPositiveReviews} positive reviews
                                        </span>
                                        <span className="text-sm text-gray-700 text-center">
                                            {eachResident.description}
                                        </span>
                                    </div>

                                    <div className="px-4">
                                        <h3 className="font-bold text-md mb-2">Badges</h3>
                                        <div className="flex gap-2">
                                            {eachResident.badges.map((badge, badgeIndex) => (
                                                <Image
                                                    key={`${eachResident.name}-badge-full-${badgeIndex}`}
                                                    src={badge}
                                                    alt="Badge"
                                                    width={60}
                                                    height={56}
                                                    className="rounded-full shadow-sm"
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="px-4">
                                        <h3 className="font-bold text-md mb-2">Reviews</h3>
                                        <div className="flex gap-4 overflow-x-auto">
                                            {eachResident.reviews.map((review, reviewIndex) => (
                                                <div
                                                    key={`${eachResident.name}-review-${reviewIndex}`}
                                                    className="p-4 bg-gray-100 rounded-lg shadow-sm min-w-[200px]"
                                                >
                                                    <p className="text-sm text-gray-700">"{review}"</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
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