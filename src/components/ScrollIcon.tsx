import React from 'react'
import { motion, useScroll } from 'framer-motion'

export default function ScrollIcon({ reference }: any): JSX.Element {

  const { scrollYProgress } = useScroll(
    {
      target: reference,
      offset: ["center end", "center center"],
      layoutEffect: false
    }
  )

  return (
    <figure className='absolute left-0 stroke-dark dark:stroke-light'>
      <svg width='75' height='75' viewBox='0 0 100 100' className='-rotate-90 mini-tablet:w-[60px] mini-tablet:h-[60px] mini-mobile:w-[40px] mini-mobile:h-[40px]'>
        <circle cx='75' cy='50' r='20' className='stroke-primary stroke-1 fill-none' />
        <motion.circle cx='75' cy='50' r='20' className='stroke-[5px] fill-light dark:fill-dark' style={{ pathLength: scrollYProgress }} />
        <circle cx='75' cy='50' r='10' className='stroke-1 fill-primary animate-pulse' />
      </svg>
    </figure>
  )
}