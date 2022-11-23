'use client'

import MyComponent from './MyComponent'

function quizpage({ params }) {
  return (
    <div>
      <MyComponent/>
      <div>{params.id}</div>
    </div>
  )
}

export default quizpage