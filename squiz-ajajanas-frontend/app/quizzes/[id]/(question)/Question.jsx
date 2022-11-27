import React, {useState} from 'react'
import "../../../../styles/Quiz.css"

function Question( {currentQuestion, goToNextQuestion} ) {

  if(!currentQuestion) {return <div>Finishing quiz...</div>}

  const handleSubmitAnswer = (givenAnswer) => {
    if (currentQuestion.wrongAnswers[0] === givenAnswer) {
      goToNextQuestion(true);
    }
      goToNextQuestion(false);
  }

  const shuffledAnswers = [...currentQuestion.wrongAnswers].sort(() => Math.random() - 0.5);

  return (
    <div>
      <div>{currentQuestion.question}</div>
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