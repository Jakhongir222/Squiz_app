'use client'

import React, { useEffect, useState } from 'react'

function MyQuizzesComponent() {

  const [categoryList, setCategoryList] = useState({});


  useEffect(()=>{
    setCategoryList({
      'geography': '4028e52384a8fba30184a8fbaaa70000',
      'math': '4028e52384a8fba30184a8fbac4d0004'
    });
  },[])
  

  return (
    <div>
      {Object.keys(categoryList).map((category, index) => {
        return (
          <a key={index} href={`quizzes/${categoryList[category]}`}>
            <div key={index}>
             {category}
           </div>
          </a>
        )
      })}
    </div>
  )
}

export default MyQuizzesComponent