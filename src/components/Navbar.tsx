import React from 'react'
import Logo from './Logo'
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from './Icons'
import CustomLink from './CustomLink'
import { motion } from 'framer-motion'
import useThemeSwitch from './hooks/useThemeSwitch'


export default function Navbar(): JSX.Element {
  const [colorMode, setColorMode] = useThemeSwitch()

  return (
    <header className='font-medium w-full px-32 py-8 flex items-center justify-between dark:text-light'>
      <nav>
        <CustomLink href="/" title='Home' className='mr-4' />
        <CustomLink href="/about" title='About' className='mx-4' />
        <CustomLink href="/projects" title='Projects' className='mx-4' />
      </nav>

      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a
          href='https://github.com'
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.8 }}
          className='w-6 mx-3'
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href='https://linkedin.com'
          target={'_blank'}
          className='w-6 mx-3'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.8 }}>
          <LinkedInIcon />
        </motion.a>

        <button
          className={`flex items-center justify-center ml-3 rounded-full p-1 ${colorMode !== 'light' ? "bg-light text-dark" : "bg-dark text-light"}`}
          onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
        >

          {
            colorMode === 'dark' ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={'fill-dark'} />
          }
        </button>
      </nav>

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}
