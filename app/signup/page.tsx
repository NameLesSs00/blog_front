"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import img1 from "@/public/img4.jpg"



function Signup() {
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isOldEnough = (date: string) => {
    const birth = new Date(date);
    const today = new Date();
    const age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    return age > 12 || (age === 12 && m >= 0);
  };

  return (
    <section className='flex min-h-screen bg-[#181818] text-white'>

      {/* Left Image */}
      <div className='w-1/2 hidden md:block relative'>
        <Image
          src={img1}
          alt='Vertical computer image'
          layout='fill'
          objectFit='cover'
          className='rounded-r-lg'
        />
      </div>

      {/* Right Form */}
      <div className='w-full md:w-1/2 flex items-center justify-center px-8 py-12'>
        <form className='w-full max-w-md space-y-6'>
          <h2 className='text-3xl font-bold mb-6'>Create Your Account</h2>

          {/* Username */}
          <div>
            <label className='block mb-1'>Username</label>
            <input
              type='text'
              placeholder='Enter username'
              className='w-full px-4 py-2 rounded bg-[#2a2a2a] text-white focus:outline-none'
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className='block mb-1'>Password</label>
            <input
              type='password'
              placeholder='Enter password'
              className='w-full px-4 py-2 rounded bg-[#2a2a2a] text-white focus:outline-none'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className='block mb-1'>Confirm Password</label>
            <input
              type='password'
              placeholder='Confirm your password'
              className='w-full px-4 py-2 rounded bg-[#2a2a2a] text-white focus:outline-none'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {confirmPassword && password !== confirmPassword && (
              <p className='text-red-500 text-sm mt-1'>Passwords do not match</p>
            )}
          </div>


          {/* Date of Birth */}
          <div>
            <label className='block mb-1'>Date of Birth</label>
            <input
              type='date'
              className='w-full px-4 py-2 rounded bg-[#2a2a2a] text-white focus:outline-none'
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
            {dob && !isOldEnough(dob) && (
              <p className='text-red-500 text-sm mt-1'>You must be older than 12</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className='block mb-2'>Gender</label>
            <div className='flex gap-4'>
              <label className='flex items-center gap-2'>
                <input type='radio' name='gender' value='male' required />
                Male
              </label>
              <label className='flex items-center gap-2'>
                <input type='radio' name='gender' value='female' />
                Female
              </label>
              <label className='flex items-center gap-2'>
                <input type='radio' name='gender' value='other' />
                Other
              </label>
            </div>
          </div>

          {/* Submit */}
          <button
            type='submit'
            className='w-full py-2 rounded bg-white text-black font-semibold hover:bg-gray-200 transition'
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  )
}

export default Signup
