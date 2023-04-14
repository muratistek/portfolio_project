import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Image from 'next/image'
import landingPicture from '../../public/images/svg/programming_person.svg'

const inter = Inter({ subsets: ['latin'] })

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
              <Image src={landingPicture} alt='Murat Istek' className='w-full h-auto' />
            </div>
            <div>
              <h1>Crafting Digital Experiences Using Coding and Design Skills</h1>
              <p>

              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
