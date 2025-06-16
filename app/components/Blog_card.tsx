import img1 from "@/public/img7.jpg";
import imgProfile from "@/public/profilePic.jpeg";
import Image from "next/image";
import React from "react";

function Blog_card() {
  return (
    <div className="max-w-md bg-[#1f1f1f] rounded-2xl overflow-hidden shadow-lg text-white">
      {/* Blog Image */}
      <div className="relative w-full h-56">
        <Image
          src={img1}
          alt="Blog"
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      </div>

      {/* Blog content */}
      <div className="p-4 flex flex-col justify-between h-40">
        {/* Title */}
        <h2 className="text-xl font-semibold mb-2">How RGB Lighting Changed PC Design</h2>

        <div className="flex justify-between items-end mt-auto">
          {/* Tags (bottom-left) */}
          <div className="text-sm text-gray-400 space-x-2">
            <span className="bg-[#2a2a2a] px-2 py-1 rounded">#hardware</span>
            <span className="bg-[#2a2a2a] px-2 py-1 rounded">#design</span>
          </div>

          {/* Author info (bottom-right) */}
          <div className="flex items-center space-x-2">
            <Image
              src={imgProfile}
              alt="Author"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <span className="text-sm text-gray-200">TechAdmin</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog_card;
