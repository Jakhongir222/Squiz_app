import React from 'react'
import "../styles/layout.css";
import Image from 'next/image'


const Example = () => (
  <div className="Logo">
    <Image
      src="/../public/logo.png"
      width={500}
      height={200}
    />
  </div>
)

function navbar() {
  return (
    <div>
       <Example/>
        <div className='navbar'>
          <a href='/'><button className='navbar-button'>Home</button></a>
          <a href='/about'><button className='navbar-button'>About</button></a>
          <button className='navbar-button'>My Profile</button>
        </div>
    </div>
  )
}

export default navbar