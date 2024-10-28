"use client"

import React from "react";
import BookingsHeader from "@/components/BookingsHeader";
import UpcomingBookings from "@/components/bookings/UpcomingBookings";
import AppExclusive from "@/components/bookings/AppExclusive";
import LocationsSection from "@/components/bookings/LocationsSection";
import PopularDestination from "@/components/bookings/PopularDestination";

const Bookings = () => {
  return (
    <div className="w-full">
      <BookingsHeader />

      <div className="mt-4">
        {/*My upcoming bookings*/}
        <UpcomingBookings/>

        {/*App exclusive*/}
        <AppExclusive/>

        {/*Our Locations*/}
        <LocationsSection/>


        {/*Popular Destinations*/}
        <PopularDestination/>
      </div>

    </div>
  );
};

export default Bookings;
