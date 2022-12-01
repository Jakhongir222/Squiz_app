"use client"
import React from 'react'
import "../styles/layout.css";
import Image from 'next/image'
import { useSession } from 'next-auth/react';

function navbar() {
  const { data: session } = useSession(); 
{
    if(session) {
      return (
        <div>
        <Image className='Logo' src="/logo.png" width="150" height="50" alt="Logo"/>
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
       <Image className='Logo' src="/logo.png" width="250" height="200" alt="Logo"/>
        <div className='navbar'>
          <a href='/'><button className='navbar-button'>Home</button></a>
          <a href='/about'><button className='navbar-button'>About</button></a>
          <a href='/profile'><button className='navbar-button'>My Profile</button></a>
          <p>Not signed in</p>
        </div>
    </div>
  )
}

export default navbar