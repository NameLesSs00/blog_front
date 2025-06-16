"use client";
import React, { useState } from "react";
import Image from "next/image";
import img5 from "@/public/img5.jpg";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen">
      {/* Left Side Image */}
      <div className="w-1/2 relative hidden md:block">
        <Image
          src={img5}
          alt="Login visual"
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#181818] text-white p-8">
        <form className="w-full max-w-sm space-y-6">
          <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>

          {/* Username */}
          <div>
            <label className="block mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-4 py-2 rounded bg-[#2a2a2a] text-white focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 rounded bg-[#2a2a2a] text-white focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white py-2 rounded"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
