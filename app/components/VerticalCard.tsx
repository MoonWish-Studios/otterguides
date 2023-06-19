import Image from "next/image"
import Button from "./Button"
import React from "react"

export default function VerticalCard({
  city,
  numGuides,
  img,
  pad,
  unreleased,
}: {
  city: string
  numGuides: string
  img: string
  pad: boolean
  unreleased: boolean
}) {
  let possiblePad = pad ? "md:ml-20 ml-12" : ""
  let releaseStatus = unreleased ? "" : "hidden"

  return (
    <div
      className={`outer w-[18rem] shrink-0 relative rounded-3xl mr-10 overflow-clip ${possiblePad}`}
    >
      <div
        className={` ${releaseStatus} Cover flex flex-col items-center justify-center bg-gray-400 g backdrop-blur-sm bg-opacity-[0.3] z-[9999] absolute w-full h-full`}
      >
        <h1 className="text-white text-3xl font-medium">{city}</h1>
        <p className="text-white text-lg">Coming Soon!</p>
      </div>
      <div className={` rounded-3xl relative `}>
        <div className={`aspect-w-16 aspect-h-9  `}>
          <Image
            className={`object-cover mb-7  z-[-99] `}
            src={img}
            fill
            alt={"avatars"}
          />
        </div>
        <div
          className={`content backdrop-brightness-[0.55] rounded-3xl  flex flex-col text-white items-center `}
        >
          <p className="mt-20">explore</p>

          <h1 className="pb-16 font-medium text-[2.3rem]">{city}</h1>
          <p className="font-[400] mb-3">With one of our {numGuides} guides</p>

          <Image
            className="object-scale-down mb-7"
            src={"/assets/Avatars.png"}
            width={130}
            height={130}
            alt={"avatars"}
          />

          <Button href="/guide" className="mb-8 text-black bg-white">
            Explore
          </Button>
        </div>
      </div>
    </div>
  )
}
