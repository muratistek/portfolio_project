import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import TextAnimation from '../components/TextAnimation'
import projImage1 from '../../public/images/project/jobzonme_resize50.jpg'
import projImage2 from '../../public/images/project/form_manager_resized.jpg'
import projImage3 from '../../public/images/project/employee_manager_resized.jpg'
import projImage4 from '../../public/images/project/taskpulse_resized.jpg'
import SpinLogo from '../components/SpinLogo'
import Project from '../components/Project'
import PageTransitionEffect from '@/components/PageTransitionEffect'



export default function projects() {
  return (
    <>
      <Head>
        <title>Murat Istek | Projects Page</title>
        <meta name='description' content='This is a projects page of the portfolio website made by Murat Istek using TypeScript, TailwindCSS, React, NextJS, ThreeJS, Framer Motion. This page showcases my significant projects that have source code links and link to the project itself. There is also animated "Hire Me" button. Let&#39;s work together!' />
      </Head>
      <PageTransitionEffect />
      <main className='flex flex-col items-center justify-center w-full mb-16 dark:text-light'>
        <Layout className='pt-16'>
          <TextAnimation text='My Projects' className='mb-16 tablet:!text-7xl mobile:mb-8 mobile:!text-6xl mini-mobile:!text-4xl' />

          <div className='grid grid-cols-12 gap-24 gap-y-28 laptop:gap-x-16 tablet:gap-x-8 mini-tablet:gap-y-24 mobile:gap-x-0'>
            <div className='col-span-12'>
              <Project
                title='JobzOnMe'
                img={projImage1}
                summary='JobzOnMe is a powerful web application designed to streamline your job application process. With its intuitive interface and robust features, it empowers users to efficiently track and manage their job applications.'
                link='https://jobzonme.onrender.com'
                github='https://github.com/muratistek/JobzOnMe'
                tech='React, Express, Redux, MongoDB, NodeJS, JWT, MERN'
              />
            </div>
            <div className='col-span-12'>
              <Project
                title='Form Manager (Backend Project)'
                img={projImage2}
                summary='This project simulates multiple instant form submissions, handles specified technologies together, stores and runs backend (NodeJS) on the Docker container, improves DB efficiency by adding Redis layer that caches PostgreSQL queries, incorporates Prisma ORM with PostgreSQL instance containerized by Docker, adds multiple services to a Docker container using Docker Compose.'
                link='https://form-manager-prod-frontend1.onrender.com'
                github='https://github.com/muratistek/form-manager-backend-project'
                tech='NodeJS, Docker, PostgreSQL, Redis, GraphQL, TypeScript, React, Prisma, MaterialUI'
                warning='This project runs on 4 separate free-tier services (Redis, PostgreSQL, backend, frontend). Due to the hosting plan limitation, it can take up to 40 seconds for a project to load.'
              />
            </div>
            <div className='col-span-12'>
              <Project
                title='Employee Management App'
                img={projImage3}
                summary='Introducing my web application project — an employee records management tool. Leveraging the robust MEAN stack — MongoDB, Express, Angular, and NodeJS; I&#39;ve developed a seamless and efficient system to handle employee data. With GraphQL, data querying and manipulation become a breeze, enabling lightning-fast performance and precise data retrieval.'
                link='https://employeemanagementapp.vercel.app'
                github='https://github.com/muratistek/employee-management-app-angular'
                tech='Angular, GraphQL, MongoDB, Express and NodeJS'
              />
            </div>
            <div className='col-span-12'>
              <Project
                title='TaskPulse'
                img={projImage4}
                summary='TaskPulse is a web-based project management application designed to help teams efficiently manage their projects. It provides features such as ticket creation, task assignment, and commenting. Team members can collaborate effectively and track project progress. Additionally, TaskPulse offers customization options, including the ability to change the app theme to suit individual preferences.'
                link='https://taskpulse.web.app'
                github='https://github.com/muratistek/task-pulse'
                tech='React, Firebase, Firestore NoSQL'
              />
            </div>
          </div>
        </Layout>

        <SpinLogo />
      </main>
    </>
  )
}
