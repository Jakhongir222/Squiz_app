'use client'

import React, { useEffect, useState } from 'react'

function MyQuizzesComponent() {

  const [categoryList, setCategoryList] = useState({});


  useEffect(()=>{
    setCategoryList({
      'geography': '4028e52384a4af4c0184a4af53a10000',
      'math': '4028e52384a4af4c0184a4af550c0004'
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