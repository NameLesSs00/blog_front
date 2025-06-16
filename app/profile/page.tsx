"use client";
import React from "react";
import Image from "next/image";
import img from "@/public/img6.jpg";
import img1 from "@/public/profilePic.jpeg";
import { User, Phone, Linkedin, Save, Venus, Mars } from "lucide-react";

function Page() {
  return (
<div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden">
  {/* Background Image with blur */}
  <div
    className="absolute inset-0 bg-cover bg-center blur-xs scale-105"
    style={{ backgroundImage: `url(${img.src})` }}
  ></div>
      <div className="bg-[#181818cc] backdrop-blur-md p-6 rounded-2xl max-w-xl w-full text-white shadow-lg">
        <div className="flex items-center gap-4">
          <Image
            src={img1}
            alt="Profile Picture"
            className="rounded-full object-cover"
            width={80}
            height={80}
          />
          <div>
            <div className="flex items-center gap-2 text-xl font-semibold">
              <span>John Doe</span>
              {/* Use <Mars /> for male or <Venus /> for female */}
              <Mars className="text-blue-400" />
            </div>
            <p className="text-sm text-gray-300">Admin / User</p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm mb-1">Bio</label>
            <textarea
              rows={2}
              className="w-full p-2 rounded bg-[#2a2a2a] text-white focus:outline-none"
              placeholder="Tell us something about you..."
            />
          </div>

          <div>
            <label className=" text-sm mb-1 flex items-center gap-1">
              <Phone size={16} /> Phone Number
            </label>
            <input
              type="tel"
              className="w-full p-2 rounded bg-[#2a2a2a] text-white focus:outline-none"
              placeholder="+20 123 456 789"
            />
          </div>

          <div>
            <label className=" text-sm mb-1 flex items-center gap-1">
              <Linkedin size={16} /> LinkedIn
            </label>
            <input
              type="url"
              className="w-full p-2 rounded bg-[#2a2a2a] text-white focus:outline-none"
              placeholder="https://linkedin.com/in/username"
            />
          </div>

          <button className="w-full mt-4 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
            <Save size={16} /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
