import React from 'react'
import { motion } from 'framer-motion'

export default function PageTransitionEffect() {
  return (
    <>
      <motion.div
        className='fixed bottom-0 right-full top-0 h-screen w-screen z-30 bg-primary'
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: "0%" }}
        exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className='fixed bottom-0 right-full top-0 h-screen w-screen z-20 bg-light'
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.div
        className='fixed bottom-0 right-full top-0 h-screen w-screen z-10 bg-dark'
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
      />
    </>
  )
}
