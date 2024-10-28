import React from 'react'
import EventHeader from "@/components/events/EventHeader";
import EventCategories from "@/components/events/EventCategories";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";

const Events = () => {
  return (
      <>
          <div className="w-full flex flex-col items-center">
              <EventHeader/>
          </div>

          <EventCategories/>

          <UpcomingEventsSection/>
      </>
  )
}

export default Events