import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import ScrollIcon from './ScrollIcon'

interface EducationDetailsProp {
  type: string
  year: string
  place: string
  info: string
}

const EducationDetails = ({ type, year, place, info }: EducationDetailsProp): JSX.Element => {

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


export default function Education(): JSX.Element {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center"]
    }
  )

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>Education</h2>

      <div ref={ref} className='w-[75%] mx-auto relative'>

        <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />

        <ul className='flex flex-col items-start justify-between w-full ml-4'>
          <EducationDetails
            type='Computer Programming And Analysis | Advanced Diploma'
            year='2020-2023'
            place='George Brown College'
            info='Developed full-stack web application using NodeJS, MongoDB, Express and React framework with components such as Hooks, Context and React Router. Improved problem-solving skills by learning data structures and algorithms. Applied ASP.NET Core MVC technology, SQL Server database and EF Core framework to build a full-stack web application that allows technical support to keep track of customer complaints and incidents. Collaborated with many teams using agile or waterfall principles to engineer complete projects while ensuring that deadlines were met, team communication maintained, and functionality fully tested and implemented'
          />
        </ul>
      </div>
    </div>
  )
}
