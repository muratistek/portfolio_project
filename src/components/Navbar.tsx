import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { NextRouter, useRouter } from 'next/router'
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, SunIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'

interface CustomLinkProps {
  href: string
  title: string
  className?: string
}

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const router: NextRouter = useRouter()
  const currentPath: string = router.asPath

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`absolute h-[1px] ${currentPath === href ? "w-full" : "w-0"} inline-block bg-dark -bottom-0.5 left-0 group-hover:w-full transition-[width] ease duration-300`}>&nbsp;</span>
    </Link>
  )
}


export default function Navbar() {
  return (
    <header className='font-medium w-full px-32 py-8 flex items-center justify-between'>
      <nav>
        <CustomLink href="/" title='Home' className='mr-4' />
        <CustomLink href="/about" title='About' className='mx-4' />
        <CustomLink href="/projects" title='Projects' className='mx-4' />
        <CustomLink href="/articles" title='Articles' className='ml-4' />
      </nav>

      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a
          href='https://twitter.com'
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.8 }}
          className='w-6 mr-3'
        >
          <TwitterIcon />
        </motion.a>
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
        <motion.a
          href='https://pinterest.com'
          target={'_blank'}
          className='w-6 mx-3'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.8 }}>
          <PinterestIcon />
        </motion.a>
        <motion.a
          href='https://dribbble.com'
          target={'_blank'}
          className='w-6 ml-3'
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.8 }}>
          <DribbbleIcon />
        </motion.a>
      </nav>

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}
