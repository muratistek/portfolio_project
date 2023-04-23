import React from 'react'
import Link from 'next/link'
import CustomLinkProps from '@/models/customLink'
import { NextRouter, useRouter } from 'next/router'

export default function CustomLink({ href, title, className = "", style, toggle }: CustomLinkProps): JSX.Element {
  const router: NextRouter = useRouter()
  const currentPath: string = router.asPath

  const handleClick = () => {
    if (toggle) {
      toggle()
    }
    router.push(href)
  }

  return (
    <>
      {style === 'mobile' ? (
        <button onClick={handleClick} className={`${className} relative group text-light dark:text-dark my-2`}>
          {title}

          <span className={`absolute h-[1px] ${currentPath === href ? "w-full" : "w-0"} inline-block bg-light dark:bg-dark -bottom-0.5 left-0 group-hover:w-full transition-[width] ease-in-out duration-300`}>&nbsp;</span>
        </button>
      ) : (
        <Link href={href} className={`${className} relative group`}>
          {title}

          <span className={`absolute h-[1px] ${currentPath === href ? "w-full" : "w-0"} inline-block bg-dark dark:bg-light -bottom-0.5 left-0 group-hover:w-full transition-[width] ease-in-out duration-300`}>&nbsp;</span>
        </Link>
      )}
    </>
  )
}