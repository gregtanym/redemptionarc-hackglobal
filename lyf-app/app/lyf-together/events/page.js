"use client"

import React, {useState} from 'react'
import EventHeader from "@/components/events/EventHeader";
import EventCategories from "@/components/events/EventCategories";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import {Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "@phosphor-icons/react";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


const Events = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <>
            <div>
                <div className="w-full flex flex-col items-center">
                    <EventHeader />
                </div>

                {/*modal*/}
                <Dialog>
                    <div className="flex justify-end pr-4 mt-4">
                        <DialogTrigger asChild>
                            <Button
                                onClick={handleOpen}
                                className="bg-black text-white flex items-center space-x-1 hover:bg-gray-800"
                            >
                                <Plus size={24}/>
                                <span>Create event</span>
                            </Button>
                        </DialogTrigger>
                    </div>

                    <DialogContent className="w-full max-w-[90%] sm:max-w-[600px] mx-auto px-4 rounded-[10px]">
                        <DialogHeader>
                            <DialogTitle>Create Event</DialogTitle>
                        </DialogHeader>
                        <div className="grid grid-cols-2 grid-rows-2 gap-4 py-4">
                            <div className="grid col-span-1  items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Event Name
                                </Label>
                                <Input
                                    id="name"
                                    defaultValue=""
                                    placeholder="Event Name"
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid col-span-1 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Location
                                </Label>
                                <Input
                                    id="username"
                                    defaultValue=""
                                    placeholder="Event Location"
                                    className="col-span-3"
                                />
                            </div>

                            <div className="grid col-span-1 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Date
                                </Label>
                                <Input
                                    id="date"
                                    defaultValue=""
                                    placeholder="Date"
                                    className="col-span-3"
                                />
                            </div>

                            <div className="grid col-span-1 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Description
                                </Label>
                                <Input
                                    id="description"
                                    defaultValue=""
                                    placeholder="Description"
                                    className="col-span-3"
                                />
                            </div>

                        </div>
                        <DialogFooter>
                            <Button type="submit" className="hover:bg-gray-800 bg-black text-white">Submit</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <EventCategories/>
                <UpcomingEventsSection/>
            </div>

        </>
    );
};

export default Events;
