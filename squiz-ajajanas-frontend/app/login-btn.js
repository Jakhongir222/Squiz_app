"use client";
import React, {use, useEffect, useRef} from 'react';
import { useSession, signIn, signOut } from 'next-auth/react'


export default function Component({ children }) {
  const { data: session } = useSession(); 
  const hasSentData = useRef(false);
  const baseURL = 'https://finalprojectbackendapp.azurewebsites.net/category';

  useEffect(() => {
    if(session && !hasSentData.current) {
      hasSentData.current = true;
      const requestData = {'email': session.user.email, 'name': session.user.name}

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData)
    };
      fetch(`${baseURL}/user`, requestOptions)
      .then(response => JSON.stringify(response))
      .then(data => console.log(data));
     }
  }, [session]);


  if (session) {
    return (
      <>
        Hello, {session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
        {children}
      </>
    );
  }
  return (
    <>
      Not signed in.  <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}