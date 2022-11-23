import React, {useState, useEffect, useRef} from 'react'

function MyComponent({categoryId}) {

  const [quiz, setQuiz] = useState({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/category/${categoryId}`)
      .then(data => data.json())
      .then(data => setQuiz(data))
      .then(() => setDone(true));
  },[categoryId]);

  if (done) {
    return (
      <div>
        <div>Here is the quiz</div>
        <div>{quiz.categoryName}</div>
        <div>{quiz.questions[0].question}</div>

      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default MyComponent