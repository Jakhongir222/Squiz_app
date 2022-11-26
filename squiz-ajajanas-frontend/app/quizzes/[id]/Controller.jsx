import React, {useState, useEffect, useRef} from 'react'
import QuestionController from './(question)/QuestionController';
import QuizFinish from './QuizFinish';
import QuizStart from './QuizStart';

function Controller({categoryId}) {

  const [quiz, setQuiz] = useState({});
  const [quizStarted, setQuizStarted] = useState(true);
  const [quizIsDone, setQuizIsDone] = useState(false);
  const [quizDetailProps, setQuizDetailProps] = useState();
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/category/${categoryId}`)
      .then(data => data.json())
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