'use client'

import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

function ProfileUser() {
  const { data: session } = useSession(); 
  console.log(session)
  const [user, setUser] = useState({});

  useEffect(() => {
    if(session){
      fetch(`http://localhost:8080/category/user/${session.user.email}`)
        .then(e => e.json())
        .then(e => setUser(e))
    }
  },[session]);
  
  if(!user) {
    return <div>Fetching user</div>
  }

  return (
    <div>{user.name}</div>
  )
}

export default ProfileUser