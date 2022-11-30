import React from 'react'
import "../styles/layout.css";
import Image from 'next/image'


function navbar() {
  return (
    <div>
       <Image className='Logo' src="/logo.png" width="254" height="100" alt="Logo"/>
        <div className='navbar'>
          <a href='/'><button className='navbar-button'>Home</button></a>
          <a href='/about'><button className='navbar-button'>About</button></a>
          <a href='/profile'><button className='navbar-button'>My Profile</button></a>
        </div>
    </div>
  )
}

export default navbar