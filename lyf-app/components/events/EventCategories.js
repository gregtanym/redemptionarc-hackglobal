import React from 'react';
import EventCardCategories from "@/components/events/EventCardCategories";

//rsc
const EventCategories = () => {
    return (
        <div>
            <h1 className="font-bold text-xl ml-4">Event Categories</h1>
            <div className="mt-2">
                <EventCardCategories/>
            </div>
        </div>
    );
};

export default EventCategories;