import Head from 'next/head'
import Layout from '@/components/Layout'
import TextAnimation from '@/components/TextAnimation'
import Link from 'next/link'
import { EmailIcon, LinkArrow } from '@/components/Icons'
import PageTransitionEffect from '@/components/PageTransitionEffect'
import ComputersCanvas from '../components/canvas/Computers'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Website | Murat Istek</title>
        <meta name='description' content='Portfolio Website made by Murat Istek using TypeScript, TailwindCSS, React, NextJS, ThreeJS, Framer Motion' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTransitionEffect />
      <main className='flex items-center text-dark dark:text-light min-h-screen w-full'>
        <Layout className='pt-0 mini-tablet:pt-16 mobile:pt-8'>
          <div className="flex justify-between items-center w-full tablet:flex-col">
            <div className='w-1/2 mini-tablet:w-full tablet:w-full'>
              <ComputersCanvas />
              <div className='w-full flex justify-center items-center tablet:pb-4 tablet:mb-4'>
                <a href='#'>
                  <div className='w-[64px] h-[12px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 relative'>
                    <motion.div
                      animate={{
                        x: [-20, 20, -20]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatType: 'loop'
                      }}
                      className='w-2 h-2 rounded-full bg-secondary mb-1 absolute top-1'
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className='flex flex-col w-1/2 items-center self-center pl-8 tablet:w-full tablet:text-center tablet:mb-96'>
              <TextAnimation text='Crafting Digital Experiences Using Coding and Design' className='!text-6xl text-left laptop:!text-5xl tablet:!text-center tablet:!text-6xl mini-tablet:!text-5xl mini-tablet:py-3 mobile:!text-3xl' />
              <p className='my-4 font-medium text-xl mini-tablet:text-sm mobile:text-xs'>
                Hi! My name is Murat Istek and I am a full-stack developer who enjoys building complex projects using expertise in web technologies and a passion for improving my craft every day. Let&apos;s work together!
              </p>
              <div className='flex items-center self-start mt-4 tablet:self-center'>
                <Link
                  href="/test_file_resume.pdf"
                  target={'_blank'}
                  className='flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light border-2 border-solid border-transparent hover:border-dark hover:dark:border-light mini-tablet:p-2 mini-tablet:px-4 mini-tablet:text-base'
                  download={true}
                >Resume<LinkArrow className={"w-6 ml-1"} /></Link>
                <Link
                  href="mailto:istekmurat1996@gmail.com"
                  target={'_blank'}
                  className='ml-6 flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light border-2 border-solid border-transparent hover:border-dark hover:dark:border-light mini-tablet:p-2 mini-tablet:px-4 mini-tablet:text-base'
                >Contact<EmailIcon className={"w-6 ml-1 hover:fill-dark"} /></Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
