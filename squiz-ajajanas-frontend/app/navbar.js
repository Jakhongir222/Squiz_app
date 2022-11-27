import React from 'react'
import logo from "../public/logo.png";
import "../styles/layout.css";


function navbar() {
  return (
    <div>
        <img src={logo} alt="Logo" className="Logo"/>
        <div className='navbar'>
          <a href='/'><button className='navbar-button'>Home</button></a>
          <a href='/about'><button className='navbar-button'>About</button></a>
          <button className='navbar-button'>My Profile</button>
        </div>
    </div>
  )
}

export default navbar