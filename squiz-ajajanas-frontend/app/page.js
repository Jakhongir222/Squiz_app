'use client'

import React, {useState, useEffect} from 'react';
import "../styles/Home.css";
import LoginBtn from "./login-btn";
import Head from 'next/head';
import Providers from './providers';

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
      <source src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' type='audio/mpeg'/>
      </audio>
      </a>
    </div>
  )
}

export default homepage