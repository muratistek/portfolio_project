import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import TextAnimation from '../components/TextAnimation'
import projImage1 from '../../public/images/project/proj1.jpg'
import SpinLogo from '../components/SpinLogo'
import Project from '../components/Project'



export default function projects() {
  return (
    <>
      <Head>
        <title>Murat Istek | Projects Page</title>
        <meta name='description' content='This is an about page of the portfolio website made by Murat Istek using TypeScript, TailwindCSS, React, NextJS, ThreeJS, Framer Motion' />
      </Head>
      <main className='flex flex-col items-center justify-center w-full mb-16'>
        <Layout className='pt-16'>
          <TextAnimation text='My Projects' className='mb-16' />

          <div className='grid grid-cols-12 gap-24 gap-y-28'>
            <div className='col-span-12'>
              <Project
                title='Job Applications Tracker'
                img={projImage1}
                summary='An application that allows users to comfortably track job applications, keep track of all updates and see their statistics. Created using ReactJS, Express, MongoDB, NodeJS'
                link='/'
                github='/'
              />
            </div>
            <div className='col-span-12'>
              <Project
                title='Job Applications Tracker'
                img={projImage1}
                summary='An application that allows users to comfortably track job applications, keep track of all updates and see their statistics. Created using ReactJS, Express, MongoDB, NodeJS'
                link='/'
                github='/'
              />
            </div>
            <div className='col-span-12'>
              <Project
                title='Job Applications Tracker'
                img={projImage1}
                summary='An application that allows users to comfortably track job applications, keep track of all updates and see their statistics. Created using ReactJS, Express, MongoDB, NodeJS'
                link='/'
                github='/'
              />
            </div>
          </div>
        </Layout>

        <SpinLogo />
      </main>
    </>
  )
}
