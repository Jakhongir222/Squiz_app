'use client'

import React, { useEffect, useState } from 'react'

function MyQuizzesComponent() {

  const [categoryList, setCategoryList] = useState({});

  useEffect(() => {
    const dict = {}
    fetch('http://localhost:8080/category')
      .then(data => data.json())
      .then(data => data.forEach(e => {
        dict[e.name] = e.id;
      }))
      .then(() => setCategoryList(dict))
  },[]);
  
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
  );
}

export default MyQuizzesComponent