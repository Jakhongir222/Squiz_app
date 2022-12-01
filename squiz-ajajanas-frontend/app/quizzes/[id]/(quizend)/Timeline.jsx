import React, { useEffect, useState } from 'react'
import './Timeline.css';
import { IoCheckmarkSharp, IoClose } from "react-icons/io5";

function Timeline({ props }) {
  const [displayInfo, setDisplayedInfo] = useState(false);
  const [infoIndex, setInfoIndex] = useState(0);
  const [scores, questions, answers, time, streaks] = props;

  const handleClick = (index) => {
    if (index === infoIndex) {
      setDisplayedInfo(!displayInfo)
    }
    else {
      setInfoIndex(index);
      setDisplayedInfo(true)
    }
  }

  const arr = [];

  return (
    <div className='timeline-extended'>

      <div className='timeline'>
        {questions.map((q, i) => {
          let icon = (q.wrongAnswers[0].answer === answers[i].answer) ? <IoCheckmarkSharp /> : <IoClose />
          let correct = q.correctAnswersGiven;
          let total = q.totalAnswersGiven;
          arr.push(~~(correct / total) * 100);
          return (
            <div key={i} className='question-box' onClick={() => handleClick(i)}>
              <div className='question-box-content' >
                <div>{icon}</div>
                <span className='tooltip'>
                  <div>Score:{scores[i]}</div>
                  <div>Time:{time[i]}</div>
                </span>

              </div>
              <div className='question-box-tag'>Question{i + 1}</div>
            </div>

          )
        })}

      </div>
      <div className='popup_display' style={{ display: displayInfo ? 'flex' : 'none' }}>
        <div className='current-question'>Current question: {questions[infoIndex].question}
          <div className='players-answer'>Your Answer: {answers[infoIndex].answer}</div>
          <div className='correct-answer'>Correct Answer: {questions[infoIndex].wrongAnswers[0].answer}</div>
          <div className='info'>Info : {questions[infoIndex].info[0].info}</div>
          <div className='difficulty'>Only {arr[infoIndex]}% of players got this question right!</div>
        </div>
      </div>
      {/* <div className='answer-card' style={{ display: displayInfo ? 'flex' : 'none' }}>
        <div>Current question: {questions[infoIndex].question}
          <div>Your Answer: {answers[infoIndex].answer}</div>
          <div>Correct Answer: {questions[infoIndex].wrongAnswers[0].answer}</div>
          <div>Info : {questions[infoIndex].info[0].info}</div>
        </div>
        <div>
        </div>

      </div> */}
    </div>
  )
}

export default Timeline