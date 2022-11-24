import React, {useState} from 'react'

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
      <div>{shuffledAnswers.map((answer, index) => {
        return (
          <button key={index} onClick={() => handleSubmitAnswer(answer)}>
            {answer.answer}
          </button>
        );
      })}</div>
    </div>
  )
}

export default Question