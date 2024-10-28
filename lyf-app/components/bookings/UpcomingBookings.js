import React, {useEffect, useState} from 'react';
import BookingCard from "@/components/bookings/BookingCard";
import {useGlobalContext} from "@/app/Context/store";
import UsersData from "@/data/UsersData.json";
import upcomingBookings from "@/data/UpcomingBookings.json";

function UpcomingBookings() {
    const [myBookings, setMyBookings] = useState([]);
    const { selectedUserId } = useGlobalContext();
    const user = UsersData.find((user) => user.userId === selectedUserId);

    useEffect(() => {
        const tempBookings = upcomingBookings.find((booking) => booking.user === user?.userName);
        setMyBookings(tempBookings?.upcomingBookings || []);
    }, [user]);

    console.log(myBookings.length);

    return (
        <div className="ml-4">
            <h1 className="font-bold text-xl mb-4">My upcoming bookings</h1>
            {
                myBookings.length > 0 ? (
                        <BookingCard myBookings={myBookings}/>
                    )
                    :(
                        <div className="mb-4">
                            You currently do not have any upcoming bookings.
                        </div>
                    )
            }
        </div>
    );
}

export default UpcomingBookings;