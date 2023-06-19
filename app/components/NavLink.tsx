import Link from "next/link"
import React from "react"

interface NavLinkTypes {
  href: string
  text: string
  currentPath: string | null
}
export default function NavLink({
  href,
  text,
  currentPath,
  className,
}: {
  href: string
  text: string
  currentPath: any
  className?: string
}) {
  return (
    <Link
      href={href}
      className={`text-[0.9rem] text-cyan-900 font-normal hover:underline first-letter underline-offset-8
        px-2 md:px-3 transition decoration-gray  ${className}  ${
        href === currentPath && "md:underline "
      }`}
      about={`${text} Link`}
    >
      {text}
    </Link>
  )
}
