import { React, useEffect } from 'react'
import "../styles/layout.css" ;

function homepage() {
  
  return (
    <div className= 'homePage'>
      <p classname= 'quote'> Are you Ready to Squiz your knowledge ?</p>
      <a className='categories_button'  href='/quizzes'>
      <button className='pickCategorybtn'>Pick a Quiz Category</button>
      </a>
    </div>
  )
}

export default homepage