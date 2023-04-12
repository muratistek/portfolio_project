import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header className='font-medium w-full px-32 py-8 flex items-center justify-between'>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/articles">Articles</Link>
      </nav>
      <h2>Logo</h2>
      <nav>
        <Link href='/' target={'_blank'}>T</Link>
        <Link href='/' target={'_blank'}>T</Link>
        <Link href='/' target={'_blank'}>T</Link>
        <Link href='/' target={'_blank'}>T</Link>
        <Link href='/' target={'_blank'}>T</Link>
        <Link href='/' target={'_blank'}>T</Link>
      </nav>
    </header>
  )
}
