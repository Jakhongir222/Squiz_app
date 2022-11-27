'use client'

import Controller from './Controller'
import "../../../styles/Quiz.css"

function quizpage({ params }) {
  return (
    <div className='questions'>
      <li>
      <Controller categoryId={params.id}/>
      </li>
    </div>
  )
}

export default quizpage