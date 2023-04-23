import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import ScrollIcon from './ScrollIcon'

export default function ExperienceDetails({ position, company, time, address, work }: ExperienceDetailsProp): JSX.Element {

  const workPoints = work.split('.')

  const ref = useRef(null)

  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between'>
      <ScrollIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className='capitalize font-bold text-2xl pb-2'>{position}&nbsp;<span className='text-primary capitalize'>@{company}</span></h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
          {time} | {address}
        </span>
        <ul className='font-medium w-full list-disc pt-2'>
          {
            workPoints.map((point, index) => (
              <li className='ml-3' key={point + (index * Math.floor(Math.random() * 1000000 + 1))}>{point}.</li>
            ))
          }
        </ul>
      </motion.div>
    </li>
  )
}