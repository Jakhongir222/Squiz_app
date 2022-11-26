import React from 'react'

function QuizFinish( {score, questions, answers, time, streaks} ) {

  let color = '#fff';
  const highestStreak = Math.max(...streaks);

  return (
    <div>
      
      <div>Completed! Your score {score}</div>
      <div>
              Highest Streak: {highestStreak}
            </div>
      <ul>{questions.map((q, index) => {
        if (answers[index].answer === q.wrongAnswers[0].answer) {
          color = '#0f0'
        } else {
          color = '#f00'
        }
        return (
          <li key={index} style={{background: color}}>
            <div>
              Q: {q.question}
            </div>
            <div>
              Your Answer: {answers[index].answer}
            </div>
            <div>
              Correct Answer: {q.wrongAnswers[0].answer}
            </div>
            <div>
              Time Remaining: {time[index]}
            </div>
          </li>)
      })}</ul>
    <a href="/quizzes"> Another test? </a>
    </div>
  )
  
}

export default QuizFinish