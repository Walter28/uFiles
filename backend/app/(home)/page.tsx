import ThemedLogo from '@/components/ThemedLogo'
import { ModeToggle } from '@/components/toggle.mode'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { HiArrowRight } from "react-icons/hi2";

const page = () => {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-normal p-10">
      <div className='self-end'>
        <ModeToggle />
      </div>
      <div className='flex justify-center items-center'>
        <ThemedLogo width={150} height={150} />
      </div>
      <div className="w-full h-[30%]  flex flex-col justify-center items-center space-y-6">
        <h1 className='font-bold text-5xl tracking-tighter'>
          Welcome to uFiles
        </h1>
        <Button
          className=''
          size={'default'}
        >
          <Link href={'/sign-in'} className='flex gap-3 items-center'>
            Get Started <HiArrowRight className='' />
          </Link>
        </Button>
      </div>
    </main>
  )
}

export default page