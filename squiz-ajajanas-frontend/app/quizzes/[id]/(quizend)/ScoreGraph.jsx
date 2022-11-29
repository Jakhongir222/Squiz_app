'use client'
import './ScoreGraph.css'
import React, { useEffect, useState, useRef } from 'react'

function ScoreGraph({props}) {
  const [playerScore, scoreCategoryData] = props;
  
  const numberOfQuestions = 10;
  const arr = useRef(new Array(numberOfQuestions+1).fill(0))

  scoreCategoryData.map((e,i)=>{
    arr.current[scoreCategoryData[i].score] += 1;
  })
  const maxScore = Math.max(...arr.current);

  const smallScores = scoreCategoryData.filter(s => s.score < playerScore);
  const percent = (smallScores.length/scoreCategoryData.length)*100;

  return (
    <div>
      <div>You did better than {percent}% of players</div>
      <div className='bar-graph'>{
      arr.current.map((score, i) => {
        let color = (i === playerScore) ? '#f5' : '#58f';
        let h = (score/maxScore)*100+5;
        return (
        <div className="score-col" key={i} style={{height: `${h}%`, background: color}}>
          <span className='tooltip'>
            <div>Score</div>
          </span>
        </div>)
    })}
      </div>
    </div>
  )
}

export default ScoreGraph