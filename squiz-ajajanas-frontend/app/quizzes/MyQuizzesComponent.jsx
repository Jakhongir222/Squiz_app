"use client"
import React, { useEffect, useState } from 'react'
import "../../styles/QuizCategories.css" 

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
    <div className='categories'>
      {Object.keys(categoryList).map((category, index) => {
        return (
          <a className='category-name' key={index} href={`quizzes/${categoryList[category]}`}>
            <img src="https://thispersondoesnotexist.com/image" width="200"/>
            <div  key={index}>
             {category}
           </div>
          </a>
        )
      })}
    </div>
  );
}

export default MyQuizzesComponent