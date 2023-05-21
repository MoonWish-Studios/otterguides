"use client"
import Image from "next/image"
import TextLeftIcon from "./TextLeftIcon"
import GuideHighlights, { GuideButton } from "./GuideHighlights"
import { nanoid } from "nanoid"
import useWindowSize from "./useScreensize"
// import { useMediaQuery } from "react-responsive"
import { VT323 } from "next/font/google"
const vt323 = VT323({ weight: "400", subsets: ["latin"] })
export default function Experience({}) {
  return (
    <div>
      <GuideCard />
      <GuideCard />
      <GuideCard />
      <GuideCard />
    </div>
  )
}

function GuideCard({ avatar }: { avatar?: string }) {
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
        <ExpandedGuideCard />
      ) : isMedium ? (
        <MedGuideCard />
      ) : (
        isMobile && <SmallGuideCard />
      )}
    </div>
  )
}
function MedGuideCard({ avatar }: { avatar?: string }) {
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
              src="https://images.unsplash.com/photo-1564109799258-6b7c25cd1c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3418&q=80"
              fill
            />
          </div>

          {/* Guide Info */}
          <div>
            {/* Name */}
            <h1 className="font-medium text-xl">Kamari Ababuo</h1>
            {/* Employment */}
            <p className="text-md text-neutral-400">Soccer Coach</p>
            <Reviews />
          </div>
        </div>
        {/* Language */}
        <TextLeftIcon alt="globe-alt" icon="/assets/icons/globe-alt.svg">
          Speaks English, Afrikaans, Swahiili
        </TextLeftIcon>
        {/* Bio */}
        <p className="mt-4 font-light">
          Lorem ipsum dolor sit amet consectetur. Volutpat lacus fermentum
          mattis arcu. Et mi sapien quisque lorem. Etiam sit tellus lorem augue
          elementum. Gravida adipiscing tellus mattis gravida sed elementum
          turpis euismod enim. Nunc pharetra et viverra sed posuere massa
          viverra.
        </p>
        {/* Interests */}
        <GuideInterests
          interests={[
            "Math",
            "Cycling",
            "Food",
            "Travel",
            "Dance",
            "Photography",
            "Skincare",
            "Soccer",
          ]}
        />
      </div>
      {/* Guide Highlights */}
      <GuideHighlights />
    </div>
  )
}

function ExpandedGuideCard({ avatar }: { avatar?: string }) {
  return (
    <div className="h-fit w-fit rounded-lg m-4 p-5 border border-neutral-300 flex ">
      {/* Avatar Profile */}
      <div className=" max-h-60 w-40 relative rounded-lg bg-neutral-400 shrink-0 overflow-clip ">
        <Image
          alt="Guide Profile Picture"
          className="object-cover"
          src="https://images.unsplash.com/photo-1564109799258-6b7c25cd1c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3418&q=80"
          fill
        />
      </div>
      {/* Guide Profile */}
      <div className="ml-4 max-w-xl  pr-4 mr-8 border-r">
        {/* Name */}
        <h1 className="font-medium text-xl">Kamari Ababuo</h1>
        {/* Employment */}
        <p className="text-md text-neutral-400">Soccer Coach</p>
        {/* Language */}
        <TextLeftIcon alt="globe-alt" icon="/assets/icons/globe-alt.svg">
          Speaks English, Afrikaans, Swahiili
        </TextLeftIcon>
        <Reviews />
        {/* Bio */}
        <p className="mt-4 font-light">
          Lorem ipsum dolor sit amet consectetur. Volutpat lacus fermentum
          mattis arcu. Et mi sapien quisque lorem. Etiam sit tellus lorem augue
          elementum. Gravida adipiscing tellus mattis gravida sed elementum
          turpis euismod enim. Nunc pharetra et viverra sed posuere massa
          viverra.
        </p>
        {/* Interests */}
        <GuideInterests
          interests={[
            "Math",
            "Cycling",
            "Food",
            "Travel",
            "Dance",
            "Photography",
            "Skincare",
            "Soccer",
          ]}
        />
      </div>
      {/* Guide Highlights */}
      <GuideHighlights />
    </div>
  )
}

function SmallGuideCard({ avatar }: { avatar?: string }) {
  return (
    <div className="h-fit w-fit rounded-lg m-4 p-5 border border-neutral-300 flex-col relative">
      {/* Expand/Collapse Button */}
      <p className="underline text-neutral-400 font-light text-sm text-end">
        Expand
      </p>
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
        {/* <GuideInterests
          interests={[
            "Math",
            "Cycling",
            "Food",
            "Travel",
            "Dance",
            "Photography",
            "Skincare",
            "Soccer",
          ]}
        /> */}
      </div>
      {/* Guide Highlights */}
      {/* <GuideHighlights /> */}
      <GuideButton />
    </div>
  )
}

function Reviews() {
  return (
    <div className="flex items-center ">
      {/* Star SVG */}
      <svg
        width="20"
        height="20"
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
        className={`reviewShadow text-lg md:text-2xl  ml-1 ${vt323.className}`}
      >
        4.86
      </p>
      <p className="md:text-base text-sm text-neutral-500 ml-3">16 reviews</p>
    </div>
  )
}

function GuideInterests({ interests }: { interests: string[] }) {
  return (
    <>
      <h1 className="my-2 text-neutral-500">Interests</h1>

      <div className="flex gap-2 flex-wrap">
        {interests.map((interest) => (
          <Interest key={nanoid()}>{interest}</Interest>
        ))}
      </div>
    </>
  )
}
function Interest({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm border w-fit rounded-full border-neutral-400 md:px-4 px-2 py-1">
      {children}
    </div>
  )
}
