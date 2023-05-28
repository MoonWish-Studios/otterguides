"use client"
import Image from "next/image"
import Link from "next/link"
import React, { use, useEffect, useRef, useState } from "react"
import GuideHighlights, {
  GuideButton,
  Hightlight,
} from "../../components/GuideHighlights"
import Reviews from "../../components/Reviews"

import { useParams } from "next/navigation"
import { GUIDES } from "../../components/GUIDES"
import { GuideCard, GuideProps } from "../../components/GuideCard"
export default function Page() {
  const [guide, setGuide] = useState<GuideProps | null>(null)
  const params = useParams()
  useEffect(() => {
    const theGuide: GuideProps | undefined = GUIDES.find(
      (g) => g.id == params.id
    )
    if (theGuide !== undefined) setGuide(theGuide)
    console.log(theGuide)
  }, [params.id])
  return (
    <div>
      {guide === null ? (
        <div className="w-fit h-full m-auto my-auto ">
          <iframe
            src="https://giphy.com/embed/Qrca6tBIdqXYXhnB4v"
            width="480"
            height="480"
            allowFullScreen
            className="touch-none"
          ></iframe>
          <h3>We were unable to find this user</h3>
          <Link className="underline " href="/guide">
            Go Home
          </Link>
        </div>
      ) : (
        <div className=" xl:mx-auto max-w-7xl mx-6 flex flex-col items-center justify-center mt-10 ">
          <div className="w-full flex justify-center underline-offset-2 underline mb-3">
            We are currently still in beta so hosts you see are just examples of
            what it might look like!
          </div>
          <h1 className="text-2xl my-3 font-semibold w-full">
            {guide.name} Guide :)
          </h1>
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto] lg:grid-rows-[500px_auto_auto] justify-center lg:gap-x-8 gap-4 items-center transition lg:items-start">
            {/* Image Carasoul + plan + guide */}
            {/* <div className="flex-col w-3/5 "> */}
            <div className="shrink-0  w-full relative h-96 lg:h-full rounded-lg bg-neutral-200">
              <Image
                src={guide.image}
                fill
                alt="Guide Trip Images"
                className="object-cover  rounded-lg outline-cyan-300 outline outline-1 outline-offset-2"
              />
            </div>
            <GuideReserveCard guide={guide} />
            <div>
              <h1 className="text-xl font-medium mb-2">The Plan!</h1>
              <ul className="list-outside tracking-wide list-disc relative border-l border-cyan-200 ml-2 ">
                {guide.itinerary.map(
                  (
                    itinerary: { title: string; description: string },
                    i: number
                  ) => (
                    <Hightlight detailed key={i} title={itinerary.title}>
                      {itinerary.description}
                    </Hightlight>
                  )
                )}
              </ul>
            </div>
            {/* </div> */}
            <div className="col-span-2">
              <h1 className="text-xl font-medium">Meet your guide</h1>
              <GuideCard guide={guide} hideHighlights />
            </div>
          </div>
          <div className="flex flex-col w-fit">
            <h1 className="text-xl font-medium mt-20">
              Explore other guides in your area
            </h1>
            {GUIDES.map(
              (g, i) =>
                guide.id != g.id && (
                  <GuideCard key={i} guide={g} hideHighlights={false} />
                )
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function GuideReserveCard({ guide }: { guide: GuideProps }): JSX.Element {
  const [guestCount, setGuestCount] = useState(1)

  const handleGuestChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGuestCount(parseInt(e.target.value))
  }
  return (
    <div className="mx-4 w-full  lg:max-w-sm">
      {/* Reserve Card */}
      <div className="flex-col relative">
        <div className=" p-3 sm:p-5 border z-10 relative border-neutral-300 rounded-xl bg-white">
          {/* Price */}
          <GuidePrice price={guide.price} />
          {/* Review */}
          <Reviews rating={guide.rating} reviewCount={guide.reviews} />
          {/* Option Block */}
          <div className="my-4">
            {/* label */}
            <div className="grid grid-cols-2 grid-flow-row-dense border rounded-xl border-neutral-200">
              <label className="font-medium p-3 text-sm">
                Date
                <input
                  className="block  text-base outline-none font-light w-full text-neutral-900 "
                  defaultValue={getDate()}
                  type="date"
                />
              </label>
              <label className="font-medium  text-sm p-3 border-l ">
                Guests
                <select
                  className="block font-light text-base outline-none"
                  value={guestCount}
                  onChange={handleGuestChange}
                >
                  <option value="1">1 guest</option>
                  <option value="2">2 guest</option>
                  <option value="3">3 guest</option>
                  <option value="4">4 guest</option>
                  <option value="5">5 guest</option>
                  <option value="6">6 guest</option>
                </select>
              </label>
              <div className="col-span-2 border-t p-3">
                <label className="font-medium text-sm ">Guide</label>
                <GuideSimpleProfile {...guide} />
              </div>
            </div>
          </div>
          {/* Reserve button */}
          <GuideButton href="#" label="Reserve" />
          {/* Cost Block */}
          <GuideTotalCost price={guide.price} guestCount={guestCount} />
          {/* Map */}
        </div>
        <Map src={guide.location} />
      </div>
    </div>
  )
}

function Map({ src }: { src: string }) {
  return (
    <div className=" -translate-y-2 rounded-b-xl border border-neutral-300">
      <iframe
        src={src}
        className="w-full h-60 "
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}
function GuideTotalCost({
  price,
  guestCount,
}: {
  price: number
  guestCount: number
}) {
  return (
    <div className="mt-6">
      <span className="underline-offset-2 underline">
        ${price} x {guestCount} guests
      </span>
      <span className="float-right">${guestCount * price}</span>
      <hr className="my-4 mt-6" />
      <span className="font-semibold">Total before tax</span>
      <span className="float-right font-semibold">${guestCount * price}</span>
    </div>
  )
}
function GuidePrice({ price }: { price: number | string }) {
  return (
    <div className="flex items-end gap-x-2">
      <h1 className="font-semibold text-lg">${price}</h1>
      <span className="text-sm text-neutral-500 ">/ person</span>
    </div>
  )
}

function GuideSimpleProfile(guide: GuideProps) {
  return (
    <div className="flex items-center gap-4 mt-2 mb-1">
      <Image
        alt="Guide Profile Picture"
        className="object-cover rounded-full w-12 h-12 outline outline-cyan-400 outline-2 outline-offset-1"
        src={guide.avatar}
        width={100}
        height={100}
      />
      <div>
        <h1 className="font-regular text-md text-neutral-900">{guide.name}</h1>
        <p className=" text-neutral-400 font-light">
          I&apos;m excited to meet you!
        </p>
      </div>
    </div>
  )
}

function getDate() {
  const offset = new Date().getTimezoneOffset()
  const date = new Date(new Date().getTime() - offset * 60 * 1000)
  return date.toISOString().split("T")[0]
}
