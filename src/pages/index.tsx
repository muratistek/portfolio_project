import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import landingPicture from '../../public/images/svg/programming_person.svg'
import TextAnimation from '@/components/TextAnimation'
import Link from 'next/link'
import { EmailIcon, LinkArrow } from '@/components/Icons'
import SpinLogo from '@/components/SpinLogo'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Website | Murat Istek</title>
        <meta name='description' content='Portfolio Website made by Murat Istek using TypeScript, TailwindCSS, React, NextJS, ThreeJS, Framer Motion' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex items-center text-dark min-h-screen w-full'>
        <Layout className='pt-0'>
          <div className="flex justify-between items-center w-full">
            <div className='w-1/2'>
              <Image src={landingPicture} alt='Murat Istek' className='w-full h-auto' priority={true} />
            </div>
            <div className='flex flex-col w-1/2 items-center self-center pl-8'>
              <TextAnimation text='Crafting Digital Experiences Using Coding and Design' className='!text-6xl text-left' />
              <p className='my-4 font-medium text-xl'>
                Hi! My name is Murat Istek and I am a full-stack web developer who enjoys building complex projects using expertise in web technologies and a passion for improving my craft every day. Let&apos;s work together!
              </p>
              <div className='flex items-center self-start mt-4 w-full'>
                <Link
                  href="/test_file_resume.pdf"
                  target={'_blank'}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
                  download={true}
                >Resume<LinkArrow className={"w-6 ml-1"} /></Link>
                <Link
                  href="mailto:istekmurat1996@gmail.com"
                  target={'_blank'}
                  className='ml-6 flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
                >Contact<EmailIcon className={"w-6 ml-1 hover:fill-dark"} /></Link>
              </div>
            </div>
          </div>
        </Layout>

        <SpinLogo />
      </main>
    </>
  )
}
