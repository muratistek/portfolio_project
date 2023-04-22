import React, { useRef } from 'react'
import ScrollIcon from './ScrollIcon'
import { motion } from 'framer-motion'

export default function EducationDetails({ type, year, place, info }: EducationDetailsProp): JSX.Element {

  const infoPoints = info.split('. ')

  const ref = useRef(null)

  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between'>
      <ScrollIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className='capitalize font-bold text-2xl'>{type}</h3>
        <span className='capitalize font-medium text-dark/75'>
          {year} | {place}
        </span>
        <ul className='font-medium w-full list-disc'>
          {
            infoPoints.map((point, index) => (
              <li className='ml-3' key={point + (index * Math.floor(Math.random() * 1000000 + 1))}>{point}.</li>
            ))
          }
        </ul>
      </motion.div>
    </li>
  )
}