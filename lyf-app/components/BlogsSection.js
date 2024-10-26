"use client";
import React from "react";
import blogData from "../data/SampleBlogsData.json";
import Image from "next/image";

const BlogsSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between items-center w-full mb-3">
        <div className="text-2xl font-bold">Blogs</div>
        <div className="underline cursor-pointer">See all</div>
      </div>
      <div className="w-full flex flex-col">
        {blogData.map((blog, index) => {
          return (
            <div
              className="w-full h-32 mb-4 flex justify-between rounded-2xl transition-colors duration-300 ease-in-out hover:bg-black/70 hover:text-white group cursor-pointer"
              key={index}
            >
              <Image
                src={"/images/room1.png"}
                alt="event-img"
                height={180}
                width={180}
                className="rounded-2xl mr-4"
              />
              <div className="h-full flex-grow flex flex-col justify-center transition-transform duration-300 ease-in-out group-hover:scale-90">
                <div className="font-semibold">{blog.title}</div>
                <div className="">{blog.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsSection;
