"use client";
import React from "react";
import blogData from "../data/SampleBlogsData.json";
import Image from "next/image";

const BlogsSection = ({ truncated = true }) => {
  const parsedBlogData = truncated ? blogData.slice(0, 2) : blogData;

  return (
    <div className="flex flex-col items-center mx-4">
      <div className="flex justify-between items-center w-full mb-3">
        <h1 className="font-bold text-xl">Blogs</h1>
        {truncated && (
          <a href="/blogs" className="underline cursor-pointer">
            See all
          </a>
        )}
      </div>
      <div className="w-full flex flex-col">
        {parsedBlogData.map((blog, index) => {
          return (
            <div
              className="w-full h-28 mb-4 flex justify-between rounded-2xl transition-colors duration-300 ease-in-out hover:bg-black/70 hover:text-white group cursor-pointer"
              key={index}
            >
              <Image
                src={blog.img}
                alt="event-img"
                height={180}
                width={170}
                className="rounded-2xl mr-4"
              />
              <div className="h-full flex-grow flex flex-col justify-center transition-transform duration-300 ease-in-out group-hover:scale-90">
                <div className="font-bold text-sm">{blog.title}</div>
                <div className="text-xs mt-1">{blog.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsSection;
