"use client"
import React, { useEffect, useState } from 'react'
import "../../styles/QuizCategories.css" 



function MyQuizzesComponent() {

  const images = {'Geography': 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    'General knowledge': 'https://images.unsplash.com/photo-1593061231114-1798846fd643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'Animals': 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'Random fun facts': 'https://images.unsplash.com/photo-1489367874814-f5d040621dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1446&q=80',
    'Programming': 'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    'Mathematics': 'https://images.unsplash.com/photo-1635372722656-389f87a941b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80',
    'History': 'https://images.unsplash.com/photo-1582034438152-77bc94ffa6ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2646&q=80',
    'Logic': 'https://images.unsplash.com/photo-1635241161466-541f065683ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'};

  const [categoryList, setCategoryList] = useState({});
  const baseURL = 'https://finalprojectbackendapp.azurewebsites.net/category';

  useEffect(() => {
    const dict = {}
    fetch(baseURL)
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
            <img src={images[category]} width="200" height={200}/>
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