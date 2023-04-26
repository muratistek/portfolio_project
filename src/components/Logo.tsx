import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/logomy.png'
import logoDark from '../../public/images/logomyDark.png'

export default function Logo({ colorTheme }: { colorTheme: string }): JSX.Element {
  return (
    <div className='flex justify-center items-center mt-2'>
      <Link
        href='/'
        className='h-16 w-16 flex justify-center items-center'
      ><Image
          src={colorTheme === "light" ? logoDark : logo}
          alt='Murat Istek Logo'
        />
      </Link>
    </div>
  )
}
