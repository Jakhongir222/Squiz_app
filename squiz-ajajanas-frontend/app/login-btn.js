"use client";
import React, {use, useEffect, useRef} from 'react';
import { useSession, signIn, signOut } from 'next-auth/react'


export default function Component({ children }) {
  const { data: session } = useSession(); 
  const hasSentData = useRef(false);

  useEffect(() => {
    if(session && hasSentData) {
      hasSentData.current = true;
      const requestData = {'email': session.user.email, 'name': session.user.name}

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData)
    };
      fetch('http://localhost:8080/category/user', requestOptions)
      .then(response => JSON.stringify(response))
      .then(data => console.log(data));
     }
  }, [session]);

  // // const createUser = (session) => {
  //   const requestOptions = {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(session) 
  //   };
    
  //   fetch('http://localhost:8080/', requestOptions)
  //   .then(response => response.json())
  //   .then(data => setThoughts([data, ...session]))
  // }

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