import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import EducationDetails from './EducationDetails'


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
      <h2 className='font-bold text-8xl mb-32 w-full text-center mini-tablet:text-6xl mini-mobile:text-4xl mini-tablet:mb-16'>Education</h2>

      <div ref={ref} className='w-[75%] mx-auto relative tablet:w-[90%] mini-tablet:w-full'>

        <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top mini-tablet:w-[2px] mini-tablet:left-[30px] mini-mobile:left-[20px]' />

        <ul className='flex flex-col items-start justify-between w-full ml-4 mini-mobile:ml-2'>
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
