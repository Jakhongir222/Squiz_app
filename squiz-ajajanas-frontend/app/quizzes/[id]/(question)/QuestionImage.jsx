'use client'

import React, { useEffect, useState } from 'react'

function QuestionImage( {query} ) {

  const [img, setImg] = useState('');

  const clientId = 'BHPWjFeQEgbfWQnKj8klGnajBZ18bqCiokPw0KXPXjY';
  const filterOutInappropriateImages = false;
  const filter = filterOutInappropriateImages ? 'high' : 'low';

  const url = `https://api.unsplash.com/search/photos?query=${query}&content_filter=${filter}&client_id=${clientId}`;
  console.log(query);
  useEffect(() => {
    fetch(url)
      .then(data => data.json())
      .then((data) => {setImg(data.results[0]); console.log(data)});
  },[url])

  return (
    <img src={img?.urls?.small} alt={img?.alt} />
  )
}

export default QuestionImage