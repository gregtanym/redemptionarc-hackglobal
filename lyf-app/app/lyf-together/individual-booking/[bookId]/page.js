"use client"

import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import {Bed, Toilet, User, Wheelchair, Shower, Plus} from "@phosphor-icons/react";
import {AvatarStack} from "@/components/eventPage/AvatarStack";
import {Button} from "@/components/ui/button";
import { Spinner} from "@material-tailwind/react";
import {usePathname} from "next/navigation";
import appExclusive from "@/data/appExclusive.json";
import roomResidents from "@/data/roomResidentDetails.json"
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {useGlobalContext} from "@/app/Context/store";

const Page = () => {
    const pathName = usePathname();
    const [bookId, setBookId] = useState(pathName.split("/")[3]);
    const [room, setRoom] = useState(null);
    const [residents, setResidents] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const { booked, setBooked } = useGlobalContext();

    useEffect(() => {
        const temp = appExclusive.find((item) => item.id === Number(bookId));
        const temp2 = roomResidents.find((item) => item.roomId === Number(bookId));

        setRoom(temp);
        setResidents(temp2);
    }, [appExclusive, bookId, roomResidents]);

    const handleConfirm = () => {
        setIsConfirmed(true);
        setBooked(true);
    };


    return (
        <div>
            {room ? (
                <div className="relative w-full min-h-screen overflow-y-hidden">
                    {/* Back button */}
                    <Link href={`/lyf-together/bookings`}
                          className="absolute top-4 left-4 text-white flex items-center z-50 transition-transform transform hover:-translate-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                             stroke="currentColor"
                             className="w-6 h-6 transition-transform transform group-hover:-translate-x-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                        </svg>
                        <span className="ml-2 transition-transform transform group-hover:-translate-x-1">Back</span>
                    </Link>

                    <div className="relative w-full h-64">
                        <Image
                            src={room["roomImg"]}
                            alt="room image"
                            width={500}
                            height={400}
                            className="object-cover w-full h-full"
                            quality={100}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                    </div>

                    {/* Card details */}
                    <div className="relative -mt-10 pt-6 px-6 transform bg-white rounded-t-[30px] z-10">
                        {/* Event Title */}
                        <h2 className="text-2xl font-bold">{room.roomType}</h2>
                        <p className="text-gray-700 mb-4 mt-2">{room.description}</p>

                        {/* Additional details */}
                        <hr/>
                        <div className="my-4">
                            <p className="font-bold mb-2">Amenities</p>
                            <div className="grid grid-cols-2 grid-rows-3">
                                <div className="text-sm  flex col-span-1">
                                    <Bed size={20} className="mr-2"/> {room.bedType}
                                </div>
                                <div className="text-sm flex col-span-1">
                                    <User size={20} className="mr-2"/> {room.pax}
                                </div>
                                <div className="text-sm  flex col-span-1">
                                    <Toilet size={20} className="mr-2"/> {room.bathroom}
                                </div>
                                <div className="text-sm flex col-span-1 items-center">
                                    <Wheelchair size={25} className="mr-2"/> {room.accessibility}
                                </div>
                                <div className="text-sm  flex col-span-1 items-center">
                                    <Shower size={25} className="mr-2"/> {room.bathroomOthers}
                                </div>

                            </div>
                        </div>

                        <hr/>
                        <div className="my-4">
                            <p className="font-bold mb-2">Services</p>
                            <ul className="list-disc list-inside">
                                {
                                    room.services.map((service, idx) => {
                                        return (
                                            <li key={idx} className="my-1">
                                                {service}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>


                        <hr className="mt-6"/>
                        <div className="my-4">
                            <p className="font-bold">Other residents who will be co-living here</p>
                            <span className="text-sm text-gray-400">{residents.participants.length} Residents</span>

                            <div className="flex items-center mt-2 mb-2">
                                <AvatarStack participants={residents}/>
                            </div>

                            <Link href={`/lyf-together/residents-booking/${bookId}`}>
                                <p className="hover:underline hover:cursor-pointer text-sm text-black">Meet the
                                    residents</p>
                            </Link>
                        </div>


                        {/*modal*/}
                        <Dialog>
                            <div className="flex justify-end pr-4 mt-4">
                                <DialogTrigger asChild>
                                    <Button className="mt-4 bg-black text-white rounded-[50px] w-full h-14 hover:bg-gray-800"  onClick={handleOpen}>
                                        Book Now
                                    </Button>
                                </DialogTrigger>
                            </div>

                            <DialogContent className="w-full max-w-[90%] sm:max-w-[600px] mx-auto px-4 rounded-[10px]">
                                <DialogHeader>
                                    <DialogTitle>Booking</DialogTitle>
                                    <p>{room.roomType}</p>
                                </DialogHeader>
                                <div className="pt-3">
                                    You will be booking this room from <span className="font-bold">27 Oct to 30 Oct</span>. To confirm, click on Confirm.
                                </div>

                                {/* Show tick icon only if booking is confirmed */}
                                {isConfirmed && (
                                    <div className="flex justify-center mt-2">
                                        <Image
                                            src={"/images/check.png"}
                                            alt="Confirmation Tick"
                                            width={60}
                                            height={60}
                                            className="object-cover"
                                            quality={100}
                                        />
                                    </div>
                                )}

                                <DialogFooter>
                                    <Button
                                        onClick={handleConfirm}
                                        disabled={booked}
                                        className={`hover:bg-gray-800 bg-black text-white ${isConfirmed ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        {isConfirmed ? 'Confirmed' : 'Confirm'}
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center w-full mt-12">
                    <Spinner className="h-16 w-16 text-gray-900/50"/>
                </div>
            )}
        </div>
    );
};

export default Page;