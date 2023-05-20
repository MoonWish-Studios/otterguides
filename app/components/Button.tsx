import Link from "next/link"
import React from "react"

export default function Button({
  href,
  children,
  className,
}: {
  href?: string
  children: React.ReactElement<any> | string
  className?: string
}) {
  return (
    <Link
      href={`${href}`}
      className={`inline-block text-center max-w-fit bg-white
        font-normal text-sm transition ease-in-out duration-100
      box-content hover:scale-105 rounded-2xl px-[45px] my-0 py-[10px] ${className} `}
    >
      {children}
    </Link>
  )
}
