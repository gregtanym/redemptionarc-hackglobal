import Image from 'next/image';
import {MapPinArea, Ticket, Heart} from "@phosphor-icons/react";
import {AvatarStack} from "./AvatarStack";
import Link from "next/link";

function EventDetailCard({ selectedTab, event }) {
    return (
        <Link href={`/event-detail-page/${selectedTab}/${event.id}`} passHref>
            <div className="bg-white rounded-[30px] hover:cursor-pointer shadow-lg p-4 mb-4 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
                {/* Date and Time */}
                <div className="flex items-center justify-between mb-2">
                    <div>
                        <span>
                            <span className="text-5xl font-bold mr-1">{event.dayDate}</span>
                            <span className="text-lg">{event.monthDate.slice(0, 3)}</span>
                        </span>
                        <p className="text-sm text-gray-500">{event.time}</p>
                    </div>

                    <button
                        className="bg-gray-300 rounded-full p-2 text-white hover:text-red-500 hover:bg-gray-200 mr-2">
                        <Heart size={20} weight="bold"/>
                    </button>
                </div>

                {/* Event Name */}
                <h2 className="text-2xl font-bold mb-1">{event.name}</h2>

                {/* Location and Ticket Info */}
                <div className="flex items-center text-gray-600 mb-2">
                    <MapPinArea className="mr-1" size={20} />
                    <span className="text-sm">{event.location}</span>

                    <Ticket className="ml-4 mr-1" size={20}/>
                    <span className="text-sm">{event.ticket}</span>
                </div>

                {/* People Count */}
                <div className="flex items-center mt-2 mb-2">
                    <AvatarStack/>
                    <span className="text-sm text-gray-600 ml-2">+{event.totalPeople} people joined</span>
                </div>

                {/* Event Image */}
                <Image
                    src={event.imageSrc}
                    alt={event.name}
                    width={350}
                    height={150}
                    className="w-full h-[200px] object-cover rounded-[30px]"
                />
            </div>
        </Link>
    );
}

export default EventDetailCard;
