import React from "react"
import ProjectProps from "../models/project"
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import { motion } from "framer-motion"

const FramerImage = motion(Image)

export default function Project({ title, summary, img, link, github }: ProjectProps): JSX.Element {

  return (
    <article className='relative flex items-center justify-between w-full bg-light dark:bg-dark shadow-2xl rounded-3xl border border-solid border-dark dark:border-light p-12 rounded-br-2xl tablet:flex-col tablet:p-8 mini-mobile:rounded-2xl mini-mobile:rounded-br-3xl mini-mobile:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl mini-mobile:-right-2 mobile:h-[102%] mini-mobile:w-[100%] mini-mobile:rounded-[1.3rem]' />

      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg tablet:w-full'>
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          priority={true}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </Link>

      <div className='flex flex-col items-start justify-between pl-6 w-1/2 tablet:w-full tablet:pl-0 tablet:pt-6'>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 pb-2 w-full text-left text-4xl font-bold dark:text-light mobile:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 pb-2 font-medium text-dark dark:text-light'>{summary}</p>
        <div className='flex items-center mt-2'>
          <Link href={github} target='_blank' className='w-10'>
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target='_blank'
            className='p-2 px-6 text-lg font-semibold ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark mobile:px-4 mobile:text-base'>
            Check the Project
          </Link>
        </div>

      </div>
    </article>
  )
}