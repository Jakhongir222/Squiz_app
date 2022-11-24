import { React, useEffect } from 'react'
import Question from './quizzes/[id]/(question)/Question'

function homepage() {
  
  return (
    <div>
    <div>Home</div>
    <a href='http://localhost:3000/quizzes'>
    <button>Quiz Categories</button>
    </a>
    </div>
  )
}

export default homepage