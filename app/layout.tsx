"use client"
import "./styles/globals.css"
import { Readex_Pro, Pacifico } from "next/font/google"
import Navbar from "./components/Navbar"
const readex_pro = Readex_Pro({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${readex_pro.className}`}>
        {/* <Navbar /> */}
        <Navbar />
        {children}
      </body>
    </html>
  )
}
