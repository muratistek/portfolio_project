import React, { useState } from 'react'
import Logo from './Logo'
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from './Icons'
import CustomLink from './CustomLink'
import { motion } from 'framer-motion'
import useThemeSwitch from './hooks/useThemeSwitch'


export default function Navbar(): JSX.Element {
  const [colorMode, setColorMode] = useThemeSwitch()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='relative font-medium w-full px-32 py-8 flex items-center justify-between dark:text-light'>

      {/* Hamburger Menu - Small Screen */}
      <button className='flex-col justify-center items-center hidden tablet:flex' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block w-6 h-0.5 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'} transition-all duration-300 ease-out`}></span>
        <span className={`bg-dark dark:bg-light block w-6 h-0.5 my-0.5 rounded-sm ${isOpen ? 'opacity-0' : 'opacity-100'} transition-all duration-300 ease-out`}></span>
        <span className={`bg-dark dark:bg-light block w-6 h-0.5 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'} transition-all duration-300 ease-out`}></span>
      </button>

      <div className='flex justify-between items-center tablet:hidden w-full'>
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
      </div>

      {/* Mobile Menu */}
      {isOpen &&
        <motion.div
          className='flex justify-between items-center flex-col fixed min-w-[70vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className='flex items-center flex-col justify-center'>
            <CustomLink href="/" title='Home' className='' style='mobile' toggle={handleClick} />
            <CustomLink href="/about" title='About' className='' style='mobile' toggle={handleClick} />
            <CustomLink href="/projects" title='Projects' className='' style='mobile' toggle={handleClick} />
          </nav>

          <nav className='flex items-center justify-center flex-wrap mt-2'>
            <motion.a
              href='https://github.com'
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
              className='w-6 mx-3 bg-light rounded-full dark:bg-dark'
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
        </motion.div>}

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}
