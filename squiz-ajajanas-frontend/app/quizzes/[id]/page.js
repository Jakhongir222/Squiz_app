'use client'

import Controller from './Controller'

function quizpage({ params }) {
  return (
    <div>
      <Controller categoryId={params.id}/>
    </div>
  )
}

export default quizpage