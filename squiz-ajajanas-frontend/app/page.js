import React from 'react'
import "../styles/Home.css";
import LoginBtn from "./login-btn"
import Providers from './providers';

function homepage() {
  
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

export default homepage