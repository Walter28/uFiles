"use client"

import LoginForm from '@/components/auth/LoginForm'
import ThemedLogo from '@/components/ThemedLogo';
import { useTheme } from 'next-themes';
import Image from 'next/image'
import React from 'react'

const page = () => {

  return (
    <main className='w-full h-screen flex flex-col gap-5 justify-center items-center'>
        <ThemedLogo width={110} height={110} />
        <LoginForm />
    </main>
  )
}

export default page