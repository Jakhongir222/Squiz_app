import React, {useState, useEffect} from 'react'
import QuestionController from './(question)/QuestionController';
import QuizFinish from './QuizFinish';
import QuizStart from './QuizStart';

function Controller({categoryId}) {

  const [quiz, setQuiz] = useState({});
  const [quizStarted, setQuizStarted] = useState(true);
  const [quizIsDone, setQuizIsDone] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/category/${categoryId}`)
      .then(data => data.json())
      .then(data => setQuiz(data))
      .then(() => setDone(true));
  },[categoryId]);

  const finishQuiz = (score) => {
    setFinalScore(score);
    setQuizIsDone(true);
  }

  const questionProps = {quiz, finishQuiz};

  if (quizIsDone) {
    return <QuizFinish score={finalScore} />
  } else  if (quizStarted && done) {
    return <QuestionController {...questionProps} />
  } else {
    return <QuizStart/>
  }
}

export default Controller