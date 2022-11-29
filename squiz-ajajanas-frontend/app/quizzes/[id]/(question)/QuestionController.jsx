import React, { useEffect, useState, useRef } from 'react'
import Question from './Question';
import { CalculateScore } from './ScoreCalculator';

function QuestionController( {quiz, finishQuiz} ) {
  
  const [qIndex, setQIndex] = useState(0);
  const playerAnswers = useRef([]);
  const quizQuestions = useRef([]);
  const playerTimeRemaining = useRef([]);

  const [score, setScore] = useState(0)
  const scores = useRef([]);
  const [streak, setStreak] = useState(0);
  const streaks = useRef([]);

  const goToNextQuestion = (givenAnswer, currentQuestion, timeRemaining) => {
    if (givenAnswer === currentQuestion.wrongAnswers[0]){
      setScore(score + CalculateScore(streak, timeRemaining));
      setStreak(streak + 1);
    
    } else {
      setStreak(0);

    }
    scores.current = [...scores.current, score];
    streaks.current = [...streaks.current, streak];
    playerAnswers.current = [...playerAnswers.current, givenAnswer];
    quizQuestions.current = [...quizQuestions.current, currentQuestion];
    playerTimeRemaining.current = [...playerTimeRemaining.current, timeRemaining];
    
    if (qIndex + 1 >= quiz.questions.length) {
      finishQuiz(
        scores.current,
        quizQuestions.current,
        playerAnswers.current,
        playerTimeRemaining.current,
        streaks.current);
    }

    setQIndex(qIndex + 1)
  };

  const currentQuestion = quiz?.questions[qIndex];
  const questionProps = {currentQuestion, goToNextQuestion, streak, score}

  return <div>{<Question {...questionProps}/>}</div>

}

export default QuestionController