"use client";
import React, {use, useEffect} from 'react';
import { useSession, signIn, signOut } from 'next-auth/react'


export default function Component({ children }) {
  const { data: session } = useSession();

  console.log(session);
 

  useEffect(() => {
    if(session) {
      console.log(">>>>>>", session.accessToken)
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(session)
    };
      fetch('http://localhost:8080/category/test', requestOptions)
      .then(res => {console.log(">>>>>>>>>>>>>>res1:", res); return res})
      .then(response => JSON.stringify(response))
      .then(data => console.log(">>>>>>>>>>>>>>>>>>>>>>>res2", data));
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