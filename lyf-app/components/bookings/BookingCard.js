"use client"

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {Bed, User, Bathtub} from "@phosphor-icons/react";

function BookingCard({myBookings}) {
    return (
        <div className="grid grid-cols-1 gap-4 mb-4">
            {myBookings.map((booking, index) => (
                <Link href="/" key={index}>
                    <div className="mr-4 bg-white rounded-[20px] hover:cursor-pointer shadow-lg overflow-hidden transition-transform transform hover:scale-100">
                        {booking.roomImg ? (
                            <Image src={booking.roomImg} width={400} height={250} alt="Room Image" className="w-full h-[200px] object-cover" />
                        ) : (
                            <div className="bg-gray-200 h-[200px] w-full flex items-center justify-center">
                                <span className="text-gray-500">No Image Available</span>
                            </div>
                        )}

                        <div className="p-4 ml-2">
                            {/* Room Type */}
                            <div className="font-bold text-lg mb-1">
                                {booking.roomType}
                            </div>

                            {/* Room Features */}
                            <div className="flex items-center text-gray-600 text-sm mb-4 space-x-4">
                                <div className="flex items-center">
                                    <Bed className="mr-1" size={20} /> {booking.bedType}
                                </div>
                                <div className="flex items-center">
                                    <User className="mr-1"  size={20}/> {booking.pax}
                                </div>
                                <div className="flex items-center">
                                    <Bathtub className="mr-1"  size={20}/> {booking.bathroom}
                                </div>
                            </div>

                            {/* Price */}
                            <span className="text-sm">From</span>
                            <div className="text-gray-800 text-sm">
                                <span className="text-black font-bold text-lg">{booking.price}</span>
                                <span>/stay</span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default BookingCard;
