import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='w-full text-lg font-medium border-t-2 border-solid border-dark dark:text-light dark:border-light'>
      <Layout className='py-8 relative flex items-center justify-between'>
        <Link
          className='absolute left-32 underline underline-offset-2' href='https://github.com/muratistek/portfolio_project'
          target={'_blank'}
        >Source code on GitHub </Link>
        <span className='mx-auto'>&#169; {new Date().getFullYear()} Murat Istek</span>
        <Link href='/projects' className='absolute right-32 underline underline-offset-2'>My Projects</Link>
      </Layout>
    </footer>
  )
}
