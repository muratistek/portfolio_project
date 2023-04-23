import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

export default function Skills(): JSX.Element {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='flex items-center justify-center w-full h-screen relative rounded-full bg-circularSpinLight dark:bg-circularSpinDark'>
        <motion.div
          className='flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark p-8 shadow-dark cursor-pointer'
          whileHover={{ scale: 1.07 }}>
          Web
        </motion.div>

        <Skill name="CSS" x="-11vw" y='-3vw' />
        <Skill name="Tailwind CSS" x="7vw" y='14vw' />
        <Skill name="HTML" x="-10vw" y='9vw' />
        <Skill name="JavaScript" x="16vw" y='6vw' />
        <Skill name="TypeScript" x="0vw" y='7vw' />
        <Skill name="React" x="-2vw" y='-7vw' />
        <Skill name="NodeJS" x="13vw" y='-12vw' />
        <Skill name="MongoDB" x="23vw" y='-5vw' />
        <Skill name="Express" x="0vw" y='-15vw' />
        <Skill name="GraphQL" x="-14vw" y='-12vw' />
        <Skill name="REST API" x="-17vw" y='3vw' />
        <Skill name="PHP" x="-22vw" y='-5vw' />
        <Skill name="Python" x="-23vw" y='11vw' />
        <Skill name="Angular" x="-8vw" y='18vw' />
        <Skill name="Docker" x="28vw" y='2vw' />
        <Skill name="NextJS" x="9vw" y='-4vw' />
        <Skill name="Figma" x="22vw" y='12vw' />
        <Skill name="Agile" x="-8vw" y='-18vw' />
        <Skill name="Scrum" x="-29vw" y='2vw' />
        <Skill name="C#" x="9vw" y='-18vw' />
      </div>
    </>
  )
}
