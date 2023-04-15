import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

export default function SpinLogo() {
  return (
    <div className='flex justify-center items-center overflow-hidden fixed right-4 bottom-4 z-10'>
      <div className='flex items-center justify-center relative w-48 h-auto' >
        <CircularText className={"fill-dark animate-spin-slow"} />
        <Link href="mailto:istekmurat1996@gmail.com" className='flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-light bg-dark shadow-md border border-solid border-dark w-[70px] h-[70px] rounded-full hover:bg-light hover:text-dark'>
          Hire Me
        </Link>
      </div>
    </div>
  )
}
