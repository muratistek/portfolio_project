import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='w-full text-lg font-medium border-t-2 border-solid border-dark dark:text-light dark:border-light mobile:text-base'>
      <Layout className='py-8 relative flex items-center justify-between tablet:flex-col tablet:py-6'>
        <Link
          className='underline underline-offset-2' href='https://github.com/muratistek/portfolio_project'
          target={'_blank'}
        >Source code on GitHub </Link>
        <div className="flex items-center tablet:py-2">
          <span className='tablet:mx-auto mr-16'>&#169; {new Date().getFullYear()} Murat Istek</span>
        </div>

        <Link href='/projects' className=' underline underline-offset-2'>My Projects</Link>
      </Layout>
    </footer>
  )
}
