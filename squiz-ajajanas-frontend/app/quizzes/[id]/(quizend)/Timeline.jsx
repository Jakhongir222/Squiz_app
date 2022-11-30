import React, { useEffect, useState } from 'react'
import './Timeline.css';

function Timeline({ props }) {
  const [displayInfo, setDisplayedInfo] = useState(false);
  const [infoIndex, setInfoIndex] = useState(0);

  const [scores, questions, answers, time, streaks] = props;
  let boxColor = '#f0f';

  const handleClick = (index) => {
    if (index === infoIndex) {
      setDisplayedInfo(!displayInfo)
    }
    else {
      setInfoIndex(index);
      setDisplayedInfo(true)
    }
  }

  return (
    <div className='timeline-extended'>
      <div className='timeline'>
        {questions.map((q, i) => {
          boxColor = (q.wrongAnswers[0].answer === answers[i].answer) ? '#7cb518' : '#ef233c'
          return (
            <div key={i} className='question-box' onClick={() => handleClick(i)}>
              <div className='question-box-content' style={{ background: boxColor }}>
                <span className='tooltip'>
                  <div>Score:{scores[i]}</div>
                  <div>Streak:{streaks[i]}</div>
                  <div>Time:{time[i]}</div>
                </span>
              </div>
              <div className='question-box-tag'>Q{i + 1}</div>
            </div>)
        })}

      </div>
      <div className='answer-card' style={{ display: displayInfo ? 'flex' : 'none' }}>
        <div>Current question: {questions[infoIndex].question}
          <div>Your Answer: {answers[infoIndex].answer}</div>
          <div>Correct Answer: {questions[infoIndex].wrongAnswers[0].answer}</div>
          <div>Info : {questions[infoIndex].info[0].info}</div>
        </div>
        <div>
        </div>

      </div>
    </div>
  )
}

export default Timeline