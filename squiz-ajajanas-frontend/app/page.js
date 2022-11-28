'use client'

import React, {} from 'react';
import "../styles/Home.css";
import LoginBtn from "./login-btn";

function homepage() {

  function play() {
    var audio = document.getElementById('a1');
    audio.play();
  }
  
  return (
    <div className= 'home-page'>
    <LoginBtn /> 
    <p classname= 'welcoming-quote'> Are you ready to Squiz your knowledge ?</p>
      <a href='/quizzes'>
      <button onClick={play} className='pick-category-button'>Pick a Quiz Category</button>
      <audio id='a1'>
      <source src="/win.mp3" type='audio/mpeg'/>
      </audio>
      </a>
    </div>
  )
}

export default homepage