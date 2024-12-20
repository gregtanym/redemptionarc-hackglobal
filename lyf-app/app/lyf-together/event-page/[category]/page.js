"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import EventPageHeader from "@/components/eventPage/EventPageHeader";

export default function EventCategoryPage() {
  const pathname = usePathname();
  const [category, setCategory] = useState("");

  const extractedCat = pathname.split("/").pop(); // Extracts the last segment as a string

  useEffect(() => {
    setCategory(extractedCat); // This should be a string
  }, [extractedCat]);

  return (
    <div>
      <EventPageHeader category={category} />
    </div>
  );
}
