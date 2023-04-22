import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

// Framer Motion vars
const MotionLink = motion(Link)

export default function Logo(): JSX.Element {
  return (
    <div className='flex justify-center items-center mt-2'>
      <MotionLink
        href='/'
        className='h-16 w-16 text-light bg-dark flex justify-center items-center rounded-full border border-solid border-transparent text-2xl font-bold dark:border-light'
        whileHover={{
          scale: 1.5,
          backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
          transition: { duration: 1, repeat: Infinity }
        }}
      >MI</MotionLink>
    </div>
  )
}
