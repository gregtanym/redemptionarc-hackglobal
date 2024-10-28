"use client"

import React, {useEffect, useState} from 'react';
import upcomingBookings from "../../data/UpcomingBookings.json";
import {useGlobalContext} from "@/app/Context/store";
import UsersData from "@/data/UsersData.json";
import Link from "next/link";
import Image from "next/image";

function BookingCard() {
    const [myBookings, setMyBookings] = useState([]);
    const { selectedUserId } = useGlobalContext();
    const user = UsersData.find((user) => user.userId === selectedUserId);

    useEffect(() => {
        const tempBookings = upcomingBookings.filter((booking) => booking.user === user.userName);
        setMyBookings(tempBookings);
    }, [user]);

    console.log(myBookings["upcomingBookings"]);

    return (
        <div className="grid grid-cols-1 gap-4">
            {
                myBookings.map((booking, index) => (
                <Link href="/" key={index}>
                    <div className="bg-white rounded-[30px] hover:cursor-pointer shadow-lg p-4 mb-4 transition-transform transform hover:scale-105">
                        <Image src={booking.roomImg} width={200} height={200} alt="Room Image" className="rounded-md"/>
                        {/* You can add more booking details here if needed */}
                    </div>
                </Link>))
            }
        </div>
    );
}

export default BookingCard;
