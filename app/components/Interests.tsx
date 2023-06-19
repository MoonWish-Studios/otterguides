import { nanoid } from "nanoid"
import React from "react"

export default function GuideInterests({ interests }: { interests: string[] }) {
  return (
    <>
      <h1 className="my-2 text-neutral-700 font-medium md:text-base text-sm">
        Interests
      </h1>

      <div className="flex gap-2 flex-wrap">
        {interests.map((interest) => (
          <Interest key={nanoid()}>{interest}</Interest>
        ))}
      </div>
    </>
  )
}
export function Interest({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs md:text-sm border w-fit rounded-full border-neutral-400 md:px-4 px-2 py-1">
      {children}
    </div>
  )
}
