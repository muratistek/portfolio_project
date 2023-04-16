import React from 'react'
import Head from 'next/head'
import TextAnimation from '@/components/TextAnimation'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profileImage from '../../public/images/svg/programming_person.svg'
import NumberAnimation from '@/components/NumberAnimation'

export default function about() {
  return (
    <>
      <Head>
        <title>Murat Istek | About Page</title>
        <meta name='description' content='This is an about page of the portfolio website made by Murat Istek using TypeScript, TailwindCSS, React, NextJS, ThreeJS, Framer Motion' />
      </Head>
      <main className='flex justify-center items-center w-full flex-col'>
        <Layout className='pt-16'>
          <TextAnimation text='Passion Fuels Purpose' className='mb-16' />
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg uppercase text-dark/75 font-bold'>About Me</h2>
              <div className='font-medium'>
                <p>
                  Hi, my name is Murat Istek and I am a full-stack developer who enjoys building attractive and complex applications using critical thinking, attention to detail, creativity and knowledge. Using my experience in the field and aspiration for perfection, I always look for the best and latest solutions to meet the needs of businesses and users alike.
                </p>
                <p className='my-4'>
                  As a developer who worked with various dev teams, I believe that open communication, empathy and kindness create an environment of prosperity to handle any business problem successfully.
                </p>
                <p>
                  Having worked with wide-range technologies such as JavaScript, TypeScript, React, SQL, NoSQL, REST API, GraphQL, Angular, C#, Python, Java and PHP allows me to handle any specific tech requirement for every project. I look forward to contributing my skills and passion to your next project.
                </p>
              </div>
            </div>

            <div className='col-span-3 relative h-max border-2 border-solid border-dark bg-light p-8 rounded-2xl'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />

              <Image src={profileImage} alt='Murat Istek' className='w-full h-auto rounded-2xl' />
            </div>

            <div className='col-span-2 flex items-end justify-between flex-col'>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <NumberAnimation value={20} />+
                </span>
                <h2 className='font-medium text-xl capitalize text-dark/75'>completed projects</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <NumberAnimation value={3.99} />
                </span>
                <h2 className='font-medium text-xl capitalize text-dark/75'>GPA</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <NumberAnimation value={172} />
                </span>
                <h2 className='font-medium text-xl capitalize text-dark/75'>Cups of coffee drank</h2>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
