"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import img1 from "@/public/profilePic.jpeg";

function Profile({ role = "user" }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="relative inline-block text-left">
      {/* Profile Picture */}
      <div onClick={toggleMenu} className="cursor-pointer">
        <Image
          src={img1}
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full border border-gray-400"
        />
      </div>

      {/* Dropdown Menu */}
      {showMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-[#2a2a2a] border border-gray-600 rounded shadow-lg text-white z-50">
          <ul className="py-1">
            {role === "admin" && (
              <>
                <li className="px-4 py-2 hover:bg-[#3a3a3a] cursor-pointer">Create Blog</li>
                <li className="px-4 py-2 hover:bg-[#3a3a3a] cursor-pointer">Edit Blog</li>
                <li className="px-4 py-2 hover:bg-[#3a3a3a] cursor-pointer">Delete Blog</li>
              </>
            )}
            <li className="px-4 py-2 hover:bg-[#3a3a3a] cursor-pointer">View Profile</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Profile;
