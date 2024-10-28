import React from 'react';
import BookingCard from "@/components/bookings/BookingCard";

function UpcomingBookings(props) {
    return (
        <div>
            <h1 className="font-bold text-xl mb-2">My upcoming bookings</h1>
            <BookingCard/>
        </div>
    );
}

export default UpcomingBookings;