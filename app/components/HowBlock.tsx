import Image from "next/image"
import React from "react"

export default function HowBlock({
  img,
  title,
  children,
}: {
  img: string
  title: string
  children: React.ReactElement<any> | string
}) {
  return (
    <div className="flex flex-col md:items-start items-center text-center md:text-start">
      <Image src={`${img}`} height={100} width={100} alt={"globe"} />
      <h1 className="text-xl font-medium my-2">{title}</h1>
      <p className="text-base font-light md:w-11/12 w-9/12 md:mb-0 mb-10">
        {children}
      </p>
    </div>
  )
}
