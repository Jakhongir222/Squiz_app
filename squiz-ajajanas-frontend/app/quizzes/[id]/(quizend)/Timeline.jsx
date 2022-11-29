import React from 'react'
import './Timeline.css';

function Timeline({props}) {

  const [scores, questions, answers, time, streaks] = props;
  let boxColor = '#f0f';

  return (
    <div className='timeline'>
      {questions.map((q, i) => {
        boxColor = (q.wrongAnswers[0].answer === answers[i].answer) ? '#0f0' : '#f00'

        return (
          <div key={i} className='question-box'>
            <div className='question-box-content' style={{background: boxColor}}>
              <span className='tooltip'>
                <div>Score:{scores[i]}</div>
                <div>Streak:{streaks[i]}</div>
                <div>Time:{time[i]}</div>
              </span>
            </div>
            <div className='question-box-tag'>Q{i+1}</div>
          </div>)
      })}
    </div>
  )
}

export default Timeline