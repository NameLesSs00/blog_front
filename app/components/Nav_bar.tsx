"use client"
import React from 'react'
import Image from 'next/image'
import img1 from "@/public/img2c.jpg"
import Profile from './Profile'
function Nav_bar() {
  const isLoggedIn = true; 

  return (
    <section className='bg-[#181818] text-white flex items-center justify-between px-8 py-4 shadow-md'>

      {/* Logo */}
      <div className='flex items-center gap-2'>
        <Image src={img1} alt='logo of techland ' width={40} height={40} className='rounded-md' />
        <span className='text-xl font-bold'>Techland</span>
      </div>

      {/* Navigation Links */}
      <nav className='flex gap-6 text-sm md:text-base font-medium'>
        <a href="/" className='hover:text-gray-400 transition'>Landing</a>
        <a href="/blogs" className='hover:text-gray-400 transition'>Blogs</a>
        <a href="/about" className='hover:text-gray-400 transition'>About</a>
        {isLoggedIn && <a href="/profile" className='hover:text-gray-400 transition'>Profile</a>}
      </nav>

      {/* User Actions */}
      <div>
        {isLoggedIn ? (
          <Profile/>
        ) : (
          <div className='flex gap-3'>
            <a href="/login" className='px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition'>Log In</a>
            <a href="/signup" className='px-4 py-2 bg-white text-black rounded hover:bg-gray-300 transition'>Sign Up</a>
          </div>
        )}
      </div>

    </section>
  )
}

export default Nav_bar
