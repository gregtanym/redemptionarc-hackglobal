import Image from 'next/image';
import {MapPinArea, Ticket} from "@phosphor-icons/react";
import {AvatarStack} from "./AvatarStack";

function EventDetailCard({ event }) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
            {/* Date and Time */}
            <div className="flex items-center justify-between mb-2">
                <div>
                    <h3 className="text-2xl font-bold">{event.DayDate} <span className="text-lg">{event.monthDate}</span></h3>
                    <p className="text-sm text-gray-500">5.30pm - 9.00pm</p> {/* Add time from data if available */}
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                    <Ticket size={20} />
                </button>
            </div>
            {/* Event Name */}
            <h2 className="text-xl font-semibold mb-1">{event.name}</h2>
            {/* Location and Ticket Info */}
            <div className="flex items-center text-gray-600 mb-2">
                <MapPinArea className="mr-2" size={14} />
                <span>{event.location}</span>
                <span className="mx-2">•</span>
                <span>{event.ticket}</span>
            </div>
            {/* Event Image */}
            <Image
                src={event.imageSrc}
                alt={event.name}
                width={400}
                height={200}
                className="rounded-lg object-cover"
            />
            {/* People Count */}
            <div className="flex items-center mt-2">
                <AvatarStack/>
                <span className="text-sm text-gray-600 ml-2">+{event.totalPeople} people joined</span>
            </div>
        </div>
    );
}

export default EventDetailCard;
