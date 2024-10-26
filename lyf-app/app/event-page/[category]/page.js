"use client"

import { usePathname } from "next/navigation";
import {useEffect, useState} from "react";

export default function EventCategoryPage() {
  const pathname = usePathname();
  const [category, setCategory] = useState(null);

  const extractedCat = pathname.split('/').pop();

    useEffect(() => {
        setCategory(extractedCat);
    }, [extractedCat]);

  return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">{category} Event</h1>
        <p>Details about the {category} event go here.</p>

      </div>
  );
}
