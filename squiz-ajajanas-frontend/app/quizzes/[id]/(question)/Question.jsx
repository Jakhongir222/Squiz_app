import React, {useEffect, useState, useRef} from 'react'
import "../../../../styles/layout.css"
import { v4 as uuidv4 } from 'uuid';
import QuestionImage from './QuestionImage';

function Question( {currentQuestion, goToNextQuestion, streak, score} ) {
  const timerlength = 10;
  const [countdown, setCountdown] = useState(timerlength);
  const resetTimer = () => setCountdown(timerlength);

  const[shuffledAnswers, setShuffledAnswers] = useState([]);
  
  const shuffleAndSelectAnswers = (ansArray) => {
    return ansArray
      .sort(() => Math.random() - 0.5)
      .slice(0,4);
  }

  useEffect(() => {
    setShuffledAnswers(shuffleAndSelectAnswers([...currentQuestion.wrongAnswers]))
  }, [currentQuestion]);

  const handleSubmitAnswer = (givenAnswer) => {
    resetTimer();
    goToNextQuestion(givenAnswer, currentQuestion, countdown);
  }

  useEffect(() => {
    if(countdown<0) handleSubmitAnswer({'answerId': uuidv4(), 'answer': 'NaA'});

    const interval = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [countdown])

  return (
    <div>
      <div className='question'>{currentQuestion.question}</div>
      <div className='timer'>{countdown}</div>
      <div className='streak'>Current streak: {streak}</div>
      <div className='score'>Current score: {score}</div>
      {/* <QuestionImage query={currentQuestion.wrongAnswers[0].answer}/> */}
      <div className='answer'>{shuffledAnswers.map((answer, index) => {
        return (
          <button className='answer-button' key={index} onClick={() => handleSubmitAnswer(answer)}>
            {answer.answer}
          </button>
        );
      })}</div>
    </div>
  )
}

export default Question