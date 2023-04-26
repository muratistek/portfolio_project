import '@/styles/globals.css'
import { Montserrat } from "next/font/google"
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-montserrat"
})

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="icon" href="/favicon.ico" media='(prefers-color-scheme: dark)' />
        <link rel="icon" href="/favicon_dark.ico" media='(prefers-color-scheme: light)' />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}>
        <Navbar />
        <AnimatePresence mode='wait' initial={false}>
          <Component key={router.asPath + (Math.floor(Math.random() * 1000000 + 1))} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}
