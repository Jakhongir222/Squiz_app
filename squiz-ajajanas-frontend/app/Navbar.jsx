"use client"
import React from 'react'
import "../styles/layout.css";
import Image from 'next/image'
import { useSession } from 'next-auth/react';

function Navbar() {
  const { data: session } = useSession();
  {
    if (session) {
      return (
        <div className='jak'>
          <Image className='Logo' src="/logo.png" width="300" height="100" alt="Logo" />
          <div className='navbar'>
            <a href='/'><button className='navbar-button'>Home</button></a>
            <a href='/about'><button className='navbar-button'>About</button></a>
            <a href='/profile'><button className='navbar-button'>My Profile</button></a>
            <p className='signedinas'>Signed in as: {session.user.name}</p>
          </div>
        </div>
      )
    }
  }
  return (
    <div>
      <Image className='logo' src="/logo.png" width="300" height="100" alt="Logo" />
      <div className='navbar'>
        <a href='/'><button className='navbar-button'>Home</button></a>
        <a href='/about'><button className='navbar-button'>About</button></a>
        <a href='/profile'><button className='navbar-button'>My Profile</button></a>
        <p className='signedinas'>Not signed in</p>
      </div>
    </div>
  )
}

export default Navbar