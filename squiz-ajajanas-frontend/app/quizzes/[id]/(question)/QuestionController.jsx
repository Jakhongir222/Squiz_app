import React, { useEffect, useState, useRef } from 'react'
import Question from './Question';

function QuestionController( {quiz, finishQuiz} ) {
  
  const [qIndex, setQIndex] = useState(0);
  const score = useRef(0);
  const playerAnswers = useRef([]);
  const quizQuestions = useRef([]);
  const playerTimeRemaining = useRef([]);

  const [streak, setStreak] = useState(0);
  const streaks = useRef([]);

  const goToNextQuestion = (givenAnswer, currentQuestion, timeRemaining) => {
    if (givenAnswer === currentQuestion.wrongAnswers[0]){
      score.current += 1;
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
    
    streaks.current = ([...streaks.current, streak]);
    playerAnswers.current = [...playerAnswers.current, givenAnswer];
    quizQuestions.current = [...quizQuestions.current, currentQuestion];
    playerTimeRemaining.current = [...playerTimeRemaining.current, timeRemaining];
    
    if (qIndex + 1 >= quiz.questions.length) {
      finishQuiz(
        score.current,
        quizQuestions.current,
        playerAnswers.current,
        playerTimeRemaining.current,
        streaks.current);
    }

    setQIndex(qIndex + 1)
  };

  const currentQuestion = quiz?.questions[qIndex];
  const questionProps = {currentQuestion, goToNextQuestion, streak}

  return <div>{<Question {...questionProps}/>}</div>

}

export default QuestionController