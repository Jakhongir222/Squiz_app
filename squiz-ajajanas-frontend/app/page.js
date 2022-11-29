'use client'

import React, {} from 'react';
import "../styles/Home.css";
import LoginBtn from "./login-btn"
import Providers from './providers';
import {useSession} from 'next-auth/react';

function homepage() {
  const { data: session } = useSession();

  function play() {
    var audio = document.getElementById('b1');
    audio.play();
  }
  
  if(session) {
    return (
      <div className= 'home-page'>
      <LoginBtn /> 
      <p classname= 'welcoming-quote'> Are you ready to Squiz your knowledge ?</p>
        <a href='/quizzes'>
        <button className='pick-category-button'>Pick a Quiz Category</button>
        </a>
      </div>
    )
  }
  return (
    <div className= 'home-page'>
    <LoginBtn /> 
    <p classname= 'welcoming-quote'> Are you ready to Squiz your knowledge ?</p>
      <a href='/quizzes'>
      <button onClick={play} className='pick-category-button'>Pick a Quiz Category</button>
      <audio id='b1'>
      <source src="/win.mp3" type='audio/mpeg'/>
      </audio>
      </a>
    </div>
  )
 
}

export default homepage