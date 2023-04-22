import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import ExperienceDetails from './ExperienceDetails'


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
