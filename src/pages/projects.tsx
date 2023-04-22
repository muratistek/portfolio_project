import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import TextAnimation from '../components/TextAnimation'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { GithubIcon } from '@/components/Icons'
import projImage1 from '../../public/images/project/proj1.jpg'

interface ProjectProps {
  title: string
  summary: string
  img: StaticImageData
  link: string
  github: string
}

const Project = ({ title, summary, img, link, github }: ProjectProps): JSX.Element => {

  return (
    <article className='relative flex items-center justify-between w-full bg-light shadow-2xl rounded-3xl border border-solid border-dark p-12 rounded-br-2xl'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl' />

      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <Image src={img} alt={title} className='w-full h-auto' />
      </Link>

      <div className='flex flex-col items-start justify-between pl-6 w-1/2'>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 pb-2 w-full text-left text-4xl font-bold'>{title}</h2>
        </Link>
        <p className='my-2 pb-2 font-medium text-dark'>{summary}</p>
        <div className='flex items-center mt-2'>
          <Link href={github} target='_blank' className='w-10'>
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target='_blank'
            className='p-2 px-6 text-lg font-semibold ml-4 rounded-lg bg-dark text-light'>
            Check the Project
          </Link>
        </div>

      </div>
    </article>
  )
}

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

          <div className='grid grid-cols-12 gap-24'>
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
      </main>
    </>
  )
}
