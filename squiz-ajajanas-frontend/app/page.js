import { React, useEffect } from 'react'

function page() {
    
    // useEffect(() => {
        const getCategory = async () => {
            const res = await fetch("http://localhost:8080/category/2");
            const restJson = await res.json().then(data => (console.log(data)));
        }
        getCategory();
    // }, [])


  return (
    <div>page</div>
  )
}

export default page