import React from 'react'

function QuizFinish( {score} ) {
  return (
    <div>
      <div>Completed! Your score {score}</div>
      <a href="/quizzes"> Another test? </a>
    </div>
  )
}

export default QuizFinish