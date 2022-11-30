"use client"
import React, { useEffect, useState } from 'react'
import "../../styles/QuizCategories.css" 



function MyQuizzesComponent() {

  const images = {'Geography': 'https://images.unsplash.com/photo-1574169208538-4f45163ade8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    'General knowledge': 'https://images.unsplash.com/photo-1658245798119-4fad546590ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    'Animals': 'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    'Random fun facts': 'https://images.unsplash.com/photo-1652214041826-91125fbc9434?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    'Programming': 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    'Mathematics': 'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    'History': 'https://images.unsplash.com/photo-1635241161466-541f065683ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    'Logic': 'https://images.unsplash.com/photo-1505649118510-a5d934d3af17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'};

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
            <img src={images[category]} width="200"/>
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