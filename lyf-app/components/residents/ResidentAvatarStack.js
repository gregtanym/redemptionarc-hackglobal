import React, {useEffect, useState} from 'react';
import Link from "next/link";
import residentData from "@/data/roomResidentDetails.json"
import {useGlobalContext} from "@/app/Context/store";
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";

function ResidentAvatarStack({bookId}) {
    const [residents, setResidents] = useState([]);
    const { booked, setBooked } = useGlobalContext();
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = (e) => {
        if (!booked) {
            e.preventDefault();
            setOpenDialog(true);
        }
    };

    useEffect(() => {
        const residentsParticipating = residentData.find(room => room.roomId === Number(bookId));
        if (residentsParticipating && residentsParticipating.participants) {
            setResidents(residentsParticipating.participants);
        } else {
            console.warn("No participants found for this event");
        }
    }, [residentData, bookId]);

    console.log(booked);

    return (
        <div className="flex flex-col items-center mt-8">
            {/* Avatars Stack */}
            <div className="flex -space-x-4 mb-2 mt-4">
                {residents.length > 0 ? (
                    residents.slice(0, 3).map((participant, index) => (
                        <img
                            key={index}
                            src={participant.img}
                            alt={index}
                            className="w-24 h-24 border-4 border-white rounded-full object-cover"
                            style={{ zIndex: 3 - index }}
                        />
                    ))
                ) : (
                    <div>
                        No participants yet
                    </div>
                )}
            </div>

            <Link href={`/lyf-together/individual-booking-residents/${bookId}`} onClick={handleOpenDialog}>
                <span className={`hover:underline text-sm font-semibold ${booked ? "text-gray-700 hover:text-black" : "text-gray-400 cursor-not-allowed"}`}>
                    See all residents
                </span>
            </Link>

            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent className="w-full max-w-[90%] sm:max-w-[400px] mx-auto px-4 rounded-[10px] text-center">
                   <DialogTitle>Oh no...</DialogTitle>
                    <DialogHeader>
                        {/* Avatars Stack */}
                        <div className="flex -space-x-4 mb-2 mt-4 justify-center">
                            {residents.length > 0 ? (
                                residents.slice(0, 3).map((participant, index) => (
                                    <img
                                        key={index}
                                        src={participant.img}
                                        alt={index}
                                        className="w-24 h-24 border-4 border-white rounded-full object-cover"
                                        style={{ zIndex: 3 - index }}
                                    />
                                ))
                            ) : (
                                <div>
                                    No participants yet
                                </div>
                            )}
                        </div>
                    </DialogHeader>
                    <p className="text-gray-700">
                        Book this room to meet and interact with your fellow residents!
                    </p>
                    <DialogFooter>
                        <Button
                            onClick={() => setBooked(true)}
                            className="bg-black text-white hover:bg-gray-800 w-full mt-4"
                        >
                            Book Now
                        </Button>

                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default ResidentAvatarStack;