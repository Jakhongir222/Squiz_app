import React from 'react'
import Timeline from './Timeline';

function QuizFinish( {props} ) {

  const [scores, questions, answers, time, streaks] = props;
  console.log(scores[9]);
  let color = '#fff';
  const highestStreak = Math.max(...streaks);

  return (
    <div>
      <Timeline props={props} />
      <div>Completed! Your score {scores[scores.length-1]}</div>
      <div>Highest Streak: {highestStreak}</div>
      <ul>{questions.map((q, index) => {
        color = (answers[index].answer === q.wrongAnswers[0].answer) ? '#0f0': '#f00';
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