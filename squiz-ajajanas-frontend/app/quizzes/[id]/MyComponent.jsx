import React, {useState, useEffect} from 'react'
// import { useRouter } from 'next/router'

function MyComponent() {

  // const router = useRouter();
  // const { categoryId } = router.query;

  const categoryId = 'default';

  console.log(categoryId);

  useEffect(() => {
    fetch(`http://localhost:8080/category/${categoryId}`)
      .then(data => data.json())
      .then(data => console.log(data));
  },[categoryId])

  return (
    <div>Here is the quiz</div>
  )
}

export default MyComponent