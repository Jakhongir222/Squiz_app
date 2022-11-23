'use client'

import MyComponent from './MyComponent'

function quizpage({ params }) {
  return (
    <div>
      <MyComponent categoryId={params.id}/>
    </div>
  )
}

export default quizpage