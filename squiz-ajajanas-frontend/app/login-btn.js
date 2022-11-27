"use client";
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react'
import Providers from './providers';

export default function Component({ children }) {
  const { data: session } = useSession();
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
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}