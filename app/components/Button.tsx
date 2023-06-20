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
      className={`${className}  inline-block text-center max-w-fit 
        font-normal text-sm transition ease-in-out duration-100
      box-content hover:scale-105 tracking-wider rounded-xl px-[45px] my-0 py-[10px] `}
    >
      {children}
    </Link>
  )
}

export function PlainButton({
  href,
  children,
  className,
  action,
}: {
  href?: string
  children: React.ReactElement<any> | string
  className?: string
  action?: any
}) {
  return (
    <button
      className={`"mt-8 mr-0 bg-black text-white inline-block text-center max-w-fit
        font-normal text-sm transition ease-in-out duration-100
      box-content hover:scale-105 tracking-wider rounded-xl px-[45px] my-0 py-[10px] ${className} `}
      onClick={action}
    >
      {children}
    </button>
  )
}
