import React from 'react'
import Link from 'next/link'
import CustomLinkProps from '@/models/customLink'
import { NextRouter, useRouter } from 'next/router'

export default function CustomLink({ href, title, className = "" }: CustomLinkProps): JSX.Element {
  const router: NextRouter = useRouter()
  const currentPath: string = router.asPath

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`absolute h-[1px] ${currentPath === href ? "w-full" : "w-0"} inline-block bg-dark -bottom-0.5 left-0 group-hover:w-full transition-[width] ease duration-300`}>&nbsp;</span>
    </Link>
  )
}