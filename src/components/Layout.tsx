import React from "react"

interface LayoutProps {
  children?: React.ReactNode
  className?: string
}

export default function Layout({ children, className = "" }: LayoutProps): JSX.Element {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 ${className}`}>
      {children}
    </div>
  )
}
