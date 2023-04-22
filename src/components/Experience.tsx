import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import ScrollIcon from './ScrollIcon'

interface ExperienceDetailsProp {
  position: string
  company: string
  time: string
  address: string
  work: string
}

const ExperienceDetails = ({ position, company, time, address, work }: ExperienceDetailsProp): JSX.Element => {

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
        <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<span className='text-primary capitalize'>@{company}</span></h3>
        <span className='capitalize font-medium text-dark/75'>
          {time} | {address}
        </span>
        <ul className='font-medium w-full list-disc'>
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


export default function Experience(): JSX.Element {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2>

      <div ref={ref} className='w-[75%] mx-auto relative'>

        <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />

        <ul className='flex flex-col items-start justify-between w-full ml-4'>
          <ExperienceDetails
            position='Full Stack Developer'
            company='Enzo | Food App'
            time='2022 - Current'
            address='Toronto, ON'
            work='Implemented authentication and authorization for login / sign up pages. Incorporated business idea and logic into the application. Handled proper QR code scanning with database connection. Worked on application hosting on the cloud. Worked on design UI/UX mockups for the front-end part' />

          <ExperienceDetails
            position='Full Stack Developer'
            company="Cimsa"
            time='2023'
            address='Istanbul, Turkey'
            work='Configured Apache server to establish a secure connection using SSL certificate and HTTPS protocol. Reduced website loading time by optimizing requests and responses. Updated the front-end to improve conversion rates'
          />
        </ul>
      </div>
    </div>
  )
}
