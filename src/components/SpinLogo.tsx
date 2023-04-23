import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

export default function SpinLogo() {
  return (
    <div className='flex justify-center items-center overflow-hidden fixed right-4 bottom-4 z-10 mini-tablet:right-8 mini-tablet:left-auto mini-tablet:top-0 mini-tablet:bottom-auto mini-tablet:absolute'>
      <div className='flex items-center justify-center relative w-48 h-auto mini-tablet:w-24 ' >
        <CircularText className={"fill-dark dark:fill-light animate-spin-slow"} />
        <Link href="mailto:istekmurat1996@gmail.com" className='flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-light dark:text-dark bg-dark dark:bg-light shadow-md border border-solid border-dark w-[70px] h-[70px] rounded-full hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light mini-tablet:w-12 mini-tablet:h-12 mini-tablet:text-[10px]'>
          Hire Me
        </Link>
      </div>
    </div>
  )
}
