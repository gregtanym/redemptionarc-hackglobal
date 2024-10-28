import BlogsSection from "@/components/BlogsSection";
import React from "react";
import DiscoverHeader from "@/components/discover/DiscoverHeader";

const page = () => {
  return (
    <div>
      <DiscoverHeader />
      <div className="mt-4">
        <BlogsSection truncated={false} />
      </div>
    </div>
  );
};

export default page;
