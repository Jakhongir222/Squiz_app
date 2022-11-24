import React from 'react'

function QuizFinish( {score} ) {
  return (
    <div>
      <div>Completed! Your score {score}</div>
      <a href="http://localhost:3000/quizzes"> Another test? </a>
    </div>
  )
}

export default QuizFinish