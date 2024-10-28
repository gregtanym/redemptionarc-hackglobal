"use client"

import { usePathname } from "next/navigation";
import {useEffect, useState} from "react";
import EventPageHeader from "@/components/eventPage/EventPageHeader";
import {AllEventDetails} from "@/components/eventPage/AllEventDetails";

export default function EventCategoryPage() {
    const pathname = usePathname();
    const [category, setCategory] = useState("");

    const extractedCat = pathname.split('/').pop();

    useEffect(() => {
        setCategory(extractedCat);
    }, [extractedCat]);

    return (
        <div>
            <EventPageHeader category={category} />

            <div className="mt-3">
                <AllEventDetails category={category} />
            </div>
        </div>
    );
}

