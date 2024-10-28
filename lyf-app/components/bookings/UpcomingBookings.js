import React, {useEffect, useState} from 'react';
import BookingCard from "@/components/bookings/BookingCard";
import {useGlobalContext} from "@/app/Context/store";
import UsersData from "@/data/UsersData.json";
import upcomingBookings from "@/data/UpcomingBookings.json";

function UpcomingBookings() {
    const [myBookings, setMyBookings] = useState([]);
    const { selectedUserId } = useGlobalContext();
    const user = UsersData.find((user) => user.userId === selectedUserId);
    const { booked } = useGlobalContext();

    useEffect(() => {
        const tempBookings = upcomingBookings.find((booking) => booking.user === user?.userName);
        setMyBookings(tempBookings?.upcomingBookings || []);
    }, [user]);

    useEffect(() => {
        if (booked){
            setMyBookings(
                [{
                    "bookingRef": 1,
                    "roomType": "One of a kind (Studio)",
                    "bedType" : "1 Queen-size bed",
                    "pax": "Max 2 pax",
                    "bathroom": "1 Bathroom",
                    "price": "USD 148.35",
                    "roomImg": "/images/rooms/oneOfAKind.png",
                    "accessibility": "Accessible room upon request",
                    "bathroomOthers": "Bathroom with a separate shower"
                }]
            )
        }
    }, [booked]);

    return (
        <div className="ml-4">
            <h1 className="font-bold text-xl mb-4">My upcoming bookings</h1>
            {
                myBookings.length > 0 || booked ? (
                        <BookingCard myBookings={myBookings}/>
                    )
                    :
                    (
                        <div className="mb-4">
                            You currently do not have any upcoming bookings.
                        </div>
                    )
            }
        </div>
    );
}

export default UpcomingBookings;