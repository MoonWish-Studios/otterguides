"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"
import NavLink from "./NavLink"

export default function Navbar({ className }: { className?: string }) {
  const pathname = usePathname()
  const reverse = pathname === "/" ? true : false
  const transparent = reverse ? "absolute top-0" : "relative"

  const isHomePage = pathname === "/"
  // set menu state
  const [open, setOpen] = useState(false)

  useEffect(() => {
    console.log(open)
  })
  return (
    <div className={`${transparent} lg:mx-auto  w-full z-[999]  ${className} `}>
      <div className="flex items-center justify-between py-1 ">
        {/* Logo */}
        <Link className="my-2 ml-5" href="/">
          <Image
            className="filter "
            src={"/assets/icons/logo.png"}
            alt="company logo"
            width="170"
            height="120"
          />
        </Link>
        {/* Hamburger Menu */}
        <div
          onClick={() => setOpen(!open)}
          className={`${
            open && "bg-none"
          }  rounded-lg mx-3 p-2 transition-colors duration-200 md:hidden hover:cursor-pointer w-10 h-10`}
        >
          {open ? (
            <Image
              src="/assets/icons/menu-close-white.svg"
              alt="Menu Icon"
              width="20"
              height="20"
              className="py-0.5 mx-auto"
            />
          ) : (
            <Image
              src="/assets/icons/menu-white.svg"
              alt="Menu Icon"
              width="24"
              height="24"
            />
          )}
        </div>

        {/* Mobile Navbar */}
        <nav
          onClick={() => setOpen(!open)}
          className={`${
            !open && "hidden"
          } absolute left-1/2 top-36 transform md:hidden -translate-x-1/2  backdrop-filter backdrop-blur-[14px] border-2 border-cyan-100 bg-opacity-10 
           -translate-y-16  flex flex-col gap-2 z-50 p-4 w-[80%] text-neutral-50 font-bold rounded-lg`}
        >
          <NavLink href="/products/water" text="Tyent" currentPath={pathname} />
          <NavLink
            href="/products/cookware"
            text="Cookware"
            currentPath={pathname}
          />
          <NavLink href="/gallery" text="Gallery" currentPath={pathname} />
          <NavLink
            href="/appointment"
            text="Appointment"
            currentPath={pathname}
          />
          <NavLink href="/contact" text="Contact" currentPath={pathname} />
        </nav>
        {/* Desktop Navbar */}
        <nav
          className={`items-center hidden md:flex md:flex-row md:gap-3 md:px-10`}
        >
          <NavLink href="/guide" text="Be a guide" currentPath={pathname} />
          <NavLink href="/contact" text="Contact us" currentPath={pathname} />
        </nav>
      </div>
    </div>
  )
}
