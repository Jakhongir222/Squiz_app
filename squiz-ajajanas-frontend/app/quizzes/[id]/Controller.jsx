import React, {useState, useEffect, useRef} from 'react'
import QuestionController from './(question)/QuestionController';
import QuizFinish from './QuizFinish';
import QuizStart from './QuizStart';

function Controller({categoryId}) {

  const [quiz, setQuiz] = useState({});
  const [quizStarted, setQuizStarted] = useState(true);
  const [quizIsDone, setQuizIsDone] = useState(false);

  const [finalScore, setFinalScore] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState([])
  const [playerAnswers, setPlayerAnswers] = useState([])
  const [questionTime, setQuestionTime] = useState([])
  const [streaks, setStreaks] = useState([])


  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/category/${categoryId}`)
      .then(data => data.json())
      .then(data => setQuiz(data))
      .then(() => setDone(true));
  },[categoryId]);

  const finishQuiz = (score, quizQuestions, playerAnswers, playerTime, streaks) => {
    setFinalScore(score);
    setQuizQuestions(quizQuestions)
    setPlayerAnswers(playerAnswers);
    setQuestionTime(playerTime);
    console.log(streaks);
    setStreaks(streaks);

    setQuizIsDone(true);
  }

  const questionProps = {quiz, finishQuiz};

  if (quizIsDone) {
    return <QuizFinish score={finalScore} questions={quizQuestions} answers={playerAnswers} time={questionTime} streaks={streaks}/>
  } else  if (quizStarted && done) {
    return <QuestionController {...questionProps} />
  } else {
    return <QuizStart/>
  }
}

export default Controller