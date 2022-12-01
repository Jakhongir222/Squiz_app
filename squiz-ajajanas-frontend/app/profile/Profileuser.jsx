'use client'

import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

function ProfileUser() {
  const { data: session } = useSession(); 
  const [user, setUser] = useState({});
  const baseURL = 'https://finalprojectbackendapp.azurewebsites.net/category';
  useEffect(() => {
    if(session){
      fetch(`${baseURL}/user/${session.user.email}`)
        .then(e => e.json())
        .then(e => setUser(e))
    }
  },[session]);
  
  if(!user) {
    return <div>Fetching user</div>
  }

  return (
    <div>
      <div>{user.name}</div>
    </div>
  )
}

export default ProfileUser