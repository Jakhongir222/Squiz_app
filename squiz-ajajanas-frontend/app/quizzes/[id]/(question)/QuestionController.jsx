import React, { useEffect, useState } from 'react'
import Question from './Question';

function QuestionController( {quiz, finishQuiz} ) {

  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);

  const goToNextQuestion = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    setQIndex(qIndex + 1)
  };

  useEffect(() => {
    if (qIndex >= quiz.questions.length) {
      return finishQuiz(score);
    } else {
      
      
    }
  });
  
  const currentQuestion = quiz?.questions[qIndex];
  const questionProps = {currentQuestion, goToNextQuestion}

  return <div>{<Question {...questionProps}/>}</div>

}

export default QuestionController