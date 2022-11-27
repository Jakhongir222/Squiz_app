import React from 'react'
import "../styles/layout.css" ;
import LoginBtn from "./login-btn"
import Providers from './providers';

function homepage() {
  
  return (
    <div className= 'homePage'>
    <LoginBtn /> 
    <p classname= 'quote'> Are you Ready to Squiz your knowledge ?</p>
      <a className='categories_button'  href='/quizzes'>
      <button className='pickCategorybtn'>Pick a Quiz Category</button>
      </a>
    </div>
  )
}

export default homepage