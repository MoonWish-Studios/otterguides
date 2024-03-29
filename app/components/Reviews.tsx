"use client"
import { VT323 } from "next/font/google"
import React from "react"

const vt323 = VT323({ weight: "400", subsets: ["latin"] })

export default function Reviews({
  rating,
  reviewCount,
}: {
  rating: number
  reviewCount: number
}) {
  return (
    <div className="flex items-baseline ">
      {/* Star SVG */}
      <svg
        width="20"
        height="20"
        className="self-center"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8587 4.71248C11.218 3.60691 12.7821 3.60691 13.1413 4.71248L14.4248 8.66264C14.5854 9.15706 15.0462 9.49182 15.566 9.49182H19.7195C20.8819 9.49182 21.3653 10.9794 20.4248 11.6626L17.0646 14.104C16.644 14.4095 16.468 14.9512 16.6287 15.4456L17.9122 19.3958C18.2714 20.5013 17.006 21.4207 16.0656 20.7374L12.7053 18.2961C12.2848 17.9905 11.7152 17.9905 11.2947 18.2961L7.93446 20.7374C6.994 21.4207 5.72863 20.5013 6.08785 19.3958L7.37133 15.4456C7.53198 14.9512 7.35599 14.4095 6.93541 14.104L3.5752 11.6626C2.63475 10.9794 3.11808 9.49182 4.28055 9.49182H8.43399C8.95386 9.49182 9.41461 9.15706 9.57525 8.66264L10.8587 4.71248Z"
          fill="#06B6D4"
        />
      </svg>
      <p
        className={`reviewShadow text-xl md:text-2xl  ml-1 ${vt323.className}`}
      >
        {rating.toFixed(2)}
      </p>
      <p className="underline  md:text-base text-sm   text-neutral-500 ml-3 ">
        {reviewCount} reviews
      </p>
    </div>
  )
}
