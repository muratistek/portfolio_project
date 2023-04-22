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
    <figure className='absolute left-0 stroke-dark'>
      <svg width='75' height='75' viewBox='0 0 100 100' className='-rotate-90'>
        <circle cx='75' cy='50' r='20' className='stroke-primary stroke-1 fill-none' />
        <motion.circle cx='75' cy='50' r='20' className='stroke-[5px] fill-light' style={{ pathLength: scrollYProgress }} />
        <circle cx='75' cy='50' r='10' className='stroke-1 fill-primary animate-pulse' />
      </svg>
    </figure>
  )
}