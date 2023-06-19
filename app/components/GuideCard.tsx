"use client"
import { nanoid } from "nanoid"
import Image from "next/image"
import { useState } from "react"
import GuideHighlights, { GuideButton } from "./GuideHighlights"
import GuideInterests from "./Interests"
import Reviews from "./Reviews"
import TextLeftIcon from "./TextLeftIcon"
import useWindowSize from "./useScreensize"
import React from "react"

export interface GuideProps {
  name: string
  employment: string
  languages: string[]
  bio: string
  interests: string[]
  rating: number
  reviews: number
  price: number
  duration: number
  avatar: string
  highlights: string[]
  id: string | number
  image: string
  itinerary: { title: string; description: string }[]
  location: string
}
export function GuideCard({
  guide,
  hideHighlights = false,
}: {
  guide: GuideProps
  hideHighlights: boolean
}) {
  const windowSize = useWindowSize()
  const isMobile = windowSize.width > 0
  const isSmall = windowSize.width > 640
  const isMedium = windowSize.width > 768
  const isLarge = windowSize.width > 1024
  console.log(isLarge, isMedium)
  return (
    <div className="shrink-0">
      {isLarge ? (
        <ExpandedGuideCard guide={guide} hideHighlights={hideHighlights} />
      ) : isMedium ? (
        <MedGuideCard guide={guide} hideHighlights={hideHighlights} />
      ) : (
        isMobile && (
          <SmallGuideCard guide={guide} hideHighlights={hideHighlights} />
        )
      )}
    </div>
  )
}
function MedGuideCard({
  guide,
  hideHighlights,
}: {
  guide: GuideProps
  hideHighlights: boolean
}) {
  return (
    <div className="h-fit w-fit rounded-lg m-4 p-5 border border-neutral-300 flex">
      {/* Guide Profile */}
      <div className="ml-4 max-w-xl  pr-4">
        <div className="flex gap-2">
          {/* Avatar Profile */}
          <div className=" h-20 w-20 relative rounded-full bg-neutral-400 shrink-0 overflow-clip">
            <Image
              alt="Guide Profile Picture"
              className="object-cover"
              src={guide.avatar}
              fill
            />
          </div>

          {/* Guide Info */}
          <div>
            {/* Name */}
            <h1 className="font-medium text-xl">{guide.name}</h1>
            {/* Employment */}
            <p className="text-md text-neutral-400">{guide.employment}</p>
            <Reviews rating={guide.rating} reviewCount={guide.reviews} />
          </div>
        </div>
        {/* Language */}
        <TextLeftIcon alt="globe-alt" icon="/assets/icons/globe-alt.svg">
          Speaks {guide.languages.join(", ")}
        </TextLeftIcon>
        {/* Bio */}
        <p className="mt-4 font-light text-ellipsis">{guide.bio}</p>
        {/* Interests */}
        <GuideInterests interests={guide.interests} />
      </div>
      {/* Guide Highlights */}
      {!hideHighlights && (
        <div className="flex flex-col pl-8 border-l">
          <GuideHighlights highlights={guide.highlights} />
          <p className="mt-6 mb-2 md:text-base text-sm">
            ${guide.price}/person · {guide.duration} hours
          </p>
          <GuideButton href={guide.id} />
        </div>
      )}
    </div>
  )
}

function ExpandedGuideCard({
  guide,
  hideHighlights,
}: {
  guide: GuideProps
  hideHighlights: boolean
}) {
  return (
    <div className="h-fit w-fit rounded-lg m-4 p-5 border border-neutral-300 flex ">
      {/* Avatar Profile */}
      <div className=" max-h-60 w-40 relative rounded-lg bg-neutral-400 shrink-0 overflow-clip ">
        <Image
          alt="Guide Profile Picture"
          className="object-cover"
          src={guide.avatar}
          fill
        />
      </div>
      {/* Guide Profile */}
      <div className="ml-4 max-w-xl  pr-4  ">
        {/* Name */}
        <h1 className="font-medium text-xl">{guide.name}</h1>
        {/* Employment */}
        <p className="text-md text-neutral-400">{guide.employment}</p>
        <Reviews rating={guide.rating} reviewCount={guide.reviews} />
        {/* Language */}
        <TextLeftIcon alt="globe-alt" icon="/assets/icons/globe-alt.svg">
          Speaks {guide.languages.join(", ")}
        </TextLeftIcon>
        {/* Bio */}
        <p className="mt-4 font-light">{guide.bio}</p>
        {/* Interests */}
        <GuideInterests interests={guide.interests} />
      </div>
      {/* Guide Highlights */}
      {!hideHighlights && (
        <div className="flex flex-col border-l pl-8">
          <GuideHighlights highlights={guide.highlights} />
          <p className="mt-6 mb-2 md:text-base text-sm">
            ${guide.price}/person · {guide.duration} hours
          </p>
          <GuideButton href={guide.id} />
        </div>
      )}
    </div>
  )
}

function SmallGuideCard({
  guide,
  hideHighlights,
}: {
  guide: GuideProps
  hideHighlights?: boolean
}) {
  const [expandCard, setExpandCard] = useState(true)
  return (
    <div className="h-fit rounded-lg m-4 sm:p-5 p-3 border border-neutral-300 flex-col relative">
      {/* Expand/Collapse Button */}
      <button
        className=" underline cursor-pointer float-right text-neutral-400 font-light text-sm"
        onClick={() => setExpandCard(!expandCard)}
      >
        {expandCard ? "Collapse" : "Expand"}
      </button>
      {/* Guide Profile */}
      <div className=" max-w-xl ">
        <div className="flex gap-2">
          {/* Avatar Profile */}
          <div className=" h-16 w-16 relative rounded-full bg-neutral-400 shrink-0 overflow-clip">
            <Image
              alt="Guide Profile Picture"
              className="object-cover"
              src={guide.avatar}
              fill
            />
          </div>

          {/* Guide Info */}
          <div className="shrink-0">
            {/* Name */}
            <h1 className="font-medium text-base">{guide.name}</h1>
            {/* Employment */}
            <p className="text-sm text-neutral-400">{guide.employment}</p>
            <Reviews rating={guide.rating} reviewCount={guide.reviews} />
          </div>
        </div>
        {/* Language */}
        <TextLeftIcon alt="globe-alt" icon="/assets/icons/globe-alt.svg">
          Speaks {guide.languages.join(", ")}
        </TextLeftIcon>
        {/* Bio */}
        <p className="mt-4 font-light md:text-base text-sm">
          Lorem ipsum dolor sit amet consectetur. Volutpat lacus fermentum
          mattis arcu. Et mi sapien quisque lorem. Etiam sit tellus lorem augue
          elementum. Gravida adipiscing tellus mattis gravida sed elementum
          turpis euismod enim. Nunc pharetra et viverra sed posuere massa
          viverra.
        </p>
        {/* Interests */}
        {expandCard && (
          <>
            {/* Guide Highlights */}
            <GuideInterests interests={guide.interests} />
            {!hideHighlights && (
              <GuideHighlights highlights={guide.highlights} />
            )}
          </>
        )}
      </div>
      <p className="mt-6 mb-2 md:text-base text-sm">
        ${guide.price}/person · {guide.duration} hours
      </p>
      {!hideHighlights && <GuideButton href={guide.id} />}
    </div>
  )
}
