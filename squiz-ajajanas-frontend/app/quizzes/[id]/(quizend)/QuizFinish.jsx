import React, { useEffect, useState, useRef } from 'react'
import Timeline from './Timeline';
import { useSession } from 'next-auth/react'
import ScoreGraph from './ScoreGraph';

function QuizFinish( {props} ) {
  const { data: session } = useSession(); 
  const hasSubmitted = useRef(false);

  const [scores, questions, answers, time, streaks, categoryId, scoreCategoryData] = props;

  let color = '#fff';
  const highestStreak = Math.max(...streaks);

  const [res, setRes] = useState(null);

  useEffect(() => {
    if(!hasSubmitted.current){
      console.log(questions)
      hasSubmitted.current = true;
      const requestData = {
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({questions, answers})
      }
      const baseURL = 'https://finalprojectbackendapp.azurewebsites.net/category';
      let url = `${baseURL}/${categoryId}/submit`;
      if (session) url = url + `/${session.user.email}`;
      fetch(url, requestData).then(data => data.json())
        .then(data => setRes(data));
    }
  }, [])

  const questionsAnsweredCorrectly = [...streaks].map(s => s && 1).reduce((partial, a) => partial + a, 0);
  const scoreGraphProps = [questionsAnsweredCorrectly, scoreCategoryData];

  return (
    <div className='quizfinish'>
      <ScoreGraph props={scoreGraphProps}/>
      <Timeline props={props} />
      {/*
      <div>Completed! Your score {scores[scores.length-1]}</div>
      <div>Highest Streak: {highestStreak}</div>
      <ul>{questions.map((q, index) => {
        color = (answers[index].answer === q.wrongAnswers[0].answer) ? '#0f0': '#f00';
        let difficulty = 0;
        if (res){
          let i = res.questions.map(q => q.questionId).indexOf(q.questionId);
          let correct = res.questions[i].correctAnswersGiven;
          let total = res.questions[i].totalAnswersGiven;
          difficulty = (correct/total)*100;
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
              Difficulty: {difficulty}%
            </div>
            <div>
              Time Remaining: {time[index]}
            </div>
          </li>)
      })}</ul>
    <a href="/quizzes"> Another test? </a>
    */}
    </div>
  )
  
}

export default QuizFinish