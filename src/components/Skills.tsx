import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }: any): JSX.Element => {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
      whileHover={{ scale: 1.10 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

export default function Skills() {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='flex items-center justify-center w-full h-screen relative rounded-full bg-circularSpinLight'>
        <motion.div
          className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
          whileHover={{ scale: 1.07 }}>
          Web
        </motion.div>

        <Skill name="CSS" x="-11vw" y='-3vw' />
        <Skill name="Tailwind CSS" x="0vw" y='23vw' />
        <Skill name="HTML" x="-18vw" y='2vw' />
        <Skill name="JavaScript" x="16vw" y='6vw' />
        <Skill name="TypeScript" x="0vw" y='12vw' />
        <Skill name="React" x="-2vw" y='-11vw' />
        <Skill name="NodeJS" x="13vw" y='-12vw' />
        <Skill name="MongoDB" x="23vw" y='-5vw' />
        <Skill name="Express" x="0vw" y='-23vw' />
        <Skill name="GraphQL" x="-18vw" y='-15vw' />
        <Skill name="REST API" x="-25vw" y='18vw' />
        <Skill name="PHP" x="-30vw" y='2vw' />
        <Skill name="Python" x="-21vw" y='11vw' />
        <Skill name="Angular" x="21vw" y='21vw' />
        <Skill name="Docker" x="35vw" y='2vw' />
      </div>
    </>
  )
}
