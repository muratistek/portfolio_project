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
    <header className='font-medium w-full px-32 py-8 flex items-center justify-between dark:text-light'>

      {/* Hamburger Menu - Small Screen */}
      <button className='flex-col justify-center items-center hidden tablet:flex' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block w-6 h-0.5 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'} transition-all duration-300 ease-out`}></span>
        <span className={`bg-dark dark:bg-light block w-6 h-0.5 my-0.5 rounded-sm ${isOpen ? 'opacity-0' : 'opacity-100'} transition-all duration-300 ease-out`}></span>
        <span className={`bg-dark dark:bg-light block w-6 h-0.5 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'} transition-all duration-300 ease-out`}></span>
      </button>

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
