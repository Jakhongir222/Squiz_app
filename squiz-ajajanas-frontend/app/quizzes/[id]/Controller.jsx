import React, {useState, useEffect, useRef} from 'react'
import QuestionController from './(question)/QuestionController';
import QuizFinish from './(quizend)/QuizFinish';
import Timeline from './(quizend)/Timeline';
import QuizStart from './QuizStart';

function Controller({categoryId}) {

  const [quiz, setQuiz] = useState({});
  const [quizStarted, setQuizStarted] = useState(true);
  const [quizIsDone, setQuizIsDone] = useState(false);
  const [quizDetailProps, setQuizDetailProps] = useState();
  const [done, setDone] = useState(false);
  
  //Number of questions per quiz
  const n = 10;

  useEffect(() => {
    fetch(`http://localhost:8080/category/${categoryId}`)
      .then(data => data.json())
      .then(data => {return {...data, questions: data.questions.sort(() => 0.5 - Math.random())}})
      .then(data => {return {...data, questions: data.questions.slice(0, n)}})
      .then(data => setQuiz(data))
      .then(() => setDone(true));
  },[categoryId]);

  const finishQuiz = (...props) => {
    setQuizDetailProps({props});
    setQuizIsDone(true);
  }

  const questionProps = {quiz, finishQuiz};

  if (quizIsDone) {
    return <QuizFinish {...quizDetailProps}/>
  } else  if (quizStarted && done) {
    return <QuestionController {...questionProps} />
  } else {
    return <QuizStart/>
  }
}

export default Controller