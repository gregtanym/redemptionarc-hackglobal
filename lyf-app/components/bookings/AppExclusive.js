import React from 'react';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import {Bathtub, Bed, User} from "@phosphor-icons/react";
import appExclusive from "../../data/appExclusive.json";

function AppExclusive() {
    return (
        <div>
            <h1 className="font-bold text-xl mb-4 ml-4">App exclusives</h1>
            <div className="flex justify-center">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-sm relative mb-4"
                >
                    <CarouselContent>
                        {appExclusive.map((booking, index) => (
                            <CarouselItem key={index}>
                                <Link href={`/lyf-together/individual-booking/${booking.id}`} key={index}>
                                    <div className="mx-6 mb-2 bg-white rounded-[20px] hover:cursor-pointer shadow-lg overflow-hidden transition-transform transform hover:scale-100">
                                        {booking.roomImg ? (
                                            <Image src={booking.roomImg} width={400} height={250} alt="Room Image" className="w-full h-[120px] object-cover" />
                                        ) : (
                                            <div className="bg-gray-200 h-[200px] w-full flex items-center justify-center">
                                                <span className="text-gray-500">No Image Available</span>
                                            </div>
                                        )}

                                        <div className="py-4 px-2 ml-2">
                                            {/* Room Type */}
                                            <div className="font-bold text-md mb-1">
                                                {booking.roomType}
                                            </div>

                                            {/* Room Features */}
                                            <div className="flex items-center text-gray-600 text-xs mb-4 space-x-3">
                                                <div className="flex items-center">
                                                    <Bed className="mr-1" size={20} /> {booking.bedType}
                                                </div>
                                                <div className="flex items-center">
                                                    <User className="mr-1" size={20}/> {booking.pax}
                                                </div>
                                                <div className="flex items-center">
                                                    <Bathtub className="mr-1" size={20}/> {booking.bathroom}
                                                </div>
                                            </div>

                                            {/* Price */}
                                            <span className="text-xs">From</span>
                                            <div className="text-gray-800 text-xs">
                                                <span className="text-black font-bold text-base">{booking.price}</span>
                                                <span>/stay</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100">
                        <span className="material-icons">arrow_back</span>
                    </CarouselPrevious>

                    <CarouselNext className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100">
                        <span className="material-icons">arrow_forward</span>
                    </CarouselNext>
                </Carousel>
            </div>
        </div>
    );
}

export default AppExclusive;