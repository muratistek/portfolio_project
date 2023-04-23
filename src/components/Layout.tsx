import React from "react"

interface LayoutProps {
  children?: React.ReactNode
  className?: string
}

export default function Layout({ children, className = "" }: LayoutProps): JSX.Element {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 ${className} laptop:p-24 tablet:p-16 mini-tablet:p-12 mobile:p-8`}>
      {children}
    </div>
  )
}
