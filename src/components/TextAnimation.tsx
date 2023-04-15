import React from 'react'
import { motion } from 'framer-motion'

// Define animation state for the whole text block
const wholeTextAnimation = {
  initialState: {
    opacity: 0.3
  },
  animateState: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    }
  }
}

// Define animation state for each word in the text block
const wordAnimation = {
  initialState: {
    y: 55,
    opacity: 0
  },
  animateState: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    }
  }
}

interface TextAnimationProps {
  text: string
  className?: string
}

export default function TextAnimation({ text, className = "" }: TextAnimationProps) {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
      <motion.h1
        className={`${className} inline-block text-dark w-full font-bold text-8xl capitalize`}
        variants={wholeTextAnimation}
        initial="initialState"
        animate="animateState"
      >
        {
          text.split(" ").map((word, index) => (
            <motion.span
              className='inline-block'
              key={index * (Math.floor(Math.random() * 10000) + 1) + word.toUpperCase()}
              variants={wordAnimation}
            >
              {word}&nbsp;
            </motion.span>
          ))
        }
      </motion.h1>
    </div>
  )
}
