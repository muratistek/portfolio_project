import React from "react";
import { motion } from 'framer-motion'
import SkillProp from '../models/skill'

export default function Skill({ name, x, y }: SkillProp): JSX.Element {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark py-3 px-6 shadow-dark cursor-pointer absolute tablet:py-2 tablet:px-4 mini-tablet:text-sm mini-tablet:py-1.5 mini-tablet:px-3 mini-mobile:bg-transparent mini-mobile:dark:bg-transparent mini-mobile:text-dark mini-mobile:dark:text-light mini-mobile:font-bold'
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      whileHover={{ scale: 1.10 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}