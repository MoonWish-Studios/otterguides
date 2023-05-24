"use client"
import Image from "next/image"
import TextLeftIcon from "./TextLeftIcon"
import GuideHighlights, { GuideButton } from "./GuideHighlights"
import { nanoid } from "nanoid"
import useWindowSize from "./useScreensize"
// import { useMediaQuery } from "react-responsive"
import { VT323 } from "next/font/google"
import { useState } from "react"
import Reviews from "./Reviews"
import GuideInterests, { Interest } from "./Interests"
const vt323 = VT323({ weight: "400", subsets: ["latin"] })

export default function Experience({}) {
  return (
    <div className="flex justify-center">
      <div className="flex-col">
        {GUIDES.map((guide) => (
          <GuideCard {...guide} />
        ))}
      </div>
    </div>
  )
}

const GUIDES = [
  {
    name: "Kamari Ababuo",
    employment: "",
    languages: ["English", "Afrikaans", "Swahiili"],
    bio: "Lorem ipsum dolor sit amet consectetur. Volutpat lacus fermentum mattis arcu. Et mi sapien quisque lorem. Etiam sit tellus lorem augue elementum. Gravida adipiscing tellus mattis gravida sed elementum turpis euismod enim. Nunc pharetra et viverra sed posuere massa viverra.",
    interests: [
      "Math",
      "Cycling",
      "Food",
      "Travel",
      "Dance",
      "Photography",
      "Skincare",
      "Soccer",
    ],
    rating: 4.86,
    reviews: 17,
    price: 35,
    duration: 6,
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1564109799258-6b7c25cd1c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3418&q=80",
    highlights: [
      "Kayak along Long Beach",
      "City highlights",
      "Join a Reggaeton",
      "Enjoy tasty local foods",
      "Wine tasting",
    ],
  },
  {
    name: "Kamari Ababuo",
    employment: "",
    languages: ["English", "Afrikaans", "Swahiili"],
    bio: "Lorem ipsum dolor sit amet consectetur. Volutpat lacus fermentum mattis arcu. Et mi sapien quisque lorem. Etiam sit tellus lorem augue elementum. Gravida adipiscing tellus mattis gravida sed elementum turpis euismod enim. Nunc pharetra et viverra sed posuere massa viverra.",
    interests: [
      "Math",
      "Cycling",
      "Food",
      "Travel",
      "Dance",
      "Photography",
      "Skincare",
      "Soccer",
    ],
    rating: 4.86,
    reviews: 17,
    price: 35,
    duration: 6,
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1564109799258-6b7c25cd1c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3418&q=80",
    highlights: [
      "Kayak along Long Beach",
      "City highlights",
      "Join a Reggaeton",
      "Enjoy tasty local foods",
      "Wine tasting",
    ],
  },
  {
    name: "Kamari Ababuo",
    employment: "",
    languages: ["English", "Afrikaans", "Swahiili"],
    bio: "Lorem ipsum dolor sit amet consectetur. Volutpat lacus fermentum mattis arcu. Et mi sapien quisque lorem. Etiam sit tellus lorem augue elementum. Gravida adipiscing tellus mattis gravida sed elementum turpis euismod enim. Nunc pharetra et viverra sed posuere massa viverra.",
    interests: [
      "Math",
      "Cycling",
      "Food",
      "Travel",
      "Dance",
      "Photography",
      "Skincare",
      "Soccer",
    ],
    rating: 4.86,
    reviews: 17,
    price: 35,
    duration: 6,
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1564109799258-6b7c25cd1c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3418&q=80",
    highlights: [
      "Kayak along Long Beach",
      "City highlights",
      "Join a Reggaeton",
      "Enjoy tasty local foods",
      "Wine tasting",
    ],
  },
]

interface GuideProps {
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
}
function GuideCard(props: GuideProps) {
  // const isLarge = useMediaQuery({
  // query: "(min-width: 1024px)",
  // })
  const windowSize = useWindowSize()
  const isMobile = windowSize.width > 0
  const isSmall = windowSize.width > 640
  const isMedium = windowSize.width > 768
  const isLarge = windowSize.width > 1024
  console.log(isLarge, isMedium)
  return (
    <div className="">
      {isLarge ? (
        <ExpandedGuideCard {...props} />
      ) : isMedium ? (
        <MedGuideCard {...props} />
      ) : (
        isMobile && <SmallGuideCard {...props} />
      )}
    </div>
  )
}
function MedGuideCard(guide: GuideProps) {
  return (
    <div className="h-fit w-fit rounded-lg m-4 p-5 border border-neutral-300 flex">
      {/* Guide Profile */}
      <div className="ml-4 max-w-xl  pr-4 mr-8 border-r">
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
            <Reviews />
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
      <div className="flex flex-col">
        <GuideHighlights highlights={guide.highlights} />
        <GuideButton href={guide.id} />
      </div>
    </div>
  )
}

function ExpandedGuideCard(guide: GuideProps) {
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
      <div className="ml-4 max-w-xl  pr-4 mr-8 border-r">
        {/* Name */}
        <h1 className="font-medium text-xl">{guide.name}</h1>
        {/* Employment */}
        <p className="text-md text-neutral-400">{guide.employment}</p>
        {/* Language */}
        <TextLeftIcon alt="globe-alt" icon="/assets/icons/globe-alt.svg">
          Speaks {guide.languages.join(", ")}
        </TextLeftIcon>
        <Reviews />
        {/* Bio */}
        <p className="mt-4 font-light">{guide.bio}</p>
        {/* Interests */}
        <GuideInterests interests={guide.interests} />
      </div>
      {/* Guide Highlights */}
      <div className="flex flex-col">
        <GuideHighlights highlights={guide.highlights} />
        <GuideButton href={guide.id} />
      </div>
    </div>
  )
}

function SmallGuideCard(guide: GuideProps) {
  const [expandCard, setExpandCard] = useState(true)
  return (
    <div className="h-fit w-fit rounded-lg m-4 p-5 border border-neutral-300 flex-col relative">
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
              src="https://images.unsplash.com/photo-1564109799258-6b7c25cd1c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3418&q=80"
              fill
            />
          </div>

          {/* Guide Info */}
          <div>
            {/* Name */}
            <h1 className="font-medium text-base">Kamari Ababuo</h1>
            {/* Employment */}
            <p className="text-sm text-neutral-400">Soccer Coach</p>
            <Reviews />
          </div>
        </div>
        {/* Language */}
        <TextLeftIcon alt="globe-alt" icon="/assets/icons/globe-alt.svg">
          Speaks English, Afrikaans, Swahiili
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
            <GuideHighlights highlights={guide.highlights} />
          </>
        )}
      </div>
      <GuideButton href={guide.id} />
    </div>
  )
}
