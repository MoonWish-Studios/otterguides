"use client"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import GuideHighlights, {
  GuideButton,
  Hightlight,
} from "../../components/GuideHighlights"
import Reviews from "../../components/Reviews"
import GoogleMapReact from "google-map-react"
import { Wrapper } from "@googlemaps/react-wrapper"
import { GuideCard } from "../page"

const guide = {
  name: "Kamari Ababuo",
  employment: "Soccer Coach",
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
  location:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13260.034298428562!2d-117.93699864458009!3d33.81209180000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7d12b3b5e6b%3A0x2ef62f8418225cfa!2sDisneyland%20Park!5e0!3m2!1sen!2sus!4v1684991430488!5m2!1sen!2sus",
}

export default function Page() {
  return (
    <div>
      <div className="flex justify-center  items-start mt-20">
        {/* Image Carasoul */}
        <div className="flex-col w-3/5">
          <div className="shrink-0 w-full h-[26rem] rounded-lg bg-neutral-200"></div>
          <ul className="list-outside list-disc relative border-l border-cyan-200 ml-2 mt-8">
            <Hightlight detailed title="10 Tastings">
              This tour includes 10 food and drink tastings. Your local host has
              hand-picked each one of the tastings based on their love for food,
              and knowledge of the city. Enjoy only the most authentic bites the
              city has to offer!
            </Hightlight>
            <Hightlight detailed title="10 Tastings">
              This tour includes 10 food and drink tastings. Your local host has
              hand-picked each one of the tastings based on their love for food,
              and knowledge of the city. Enjoy only the most authentic bites the
              city has to offer!
            </Hightlight>
            <Hightlight detailed title="10 Tastings">
              This tour includes 10 food and drink tastings. Your local host has
              hand-picked each one of the tastings based on their love for food,
              and knowledge of the city. Enjoy only the most authentic bites the
              city has to offer!
            </Hightlight>
            <Hightlight detailed title="10 Tastings">
              This tour includes 10 food and drink tastings. Your local host has
              hand-picked each one of the tastings based on their love for food,
              and knowledge of the city. Enjoy only the most authentic bites the
              city has to offer!
            </Hightlight>
            <Hightlight detailed title="10 Tastings">
              This tour includes 10 food and drink tastings. Your local host has
              hand-picked each one of the tastings based on their love for food,
              and knowledge of the city. Enjoy only the most authentic bites the
              city has to offer!
            </Hightlight>
          </ul>
          <h1 className="text-xl font-medium">Meet your guide</h1>
          <GuideCard {...guide} />
        </div>
        <GuideReserveCard />
      </div>
      <h1>See other guides available</h1>
      <div className="flex  overflow-x-scroll">
        <GuideCard guide={guide} hideHighlight />
        <GuideCard guide={guide} hideHighlight />
        <GuideCard guide={guide} hideHighlight />
        <GuideCard guide={guide} hideHighlight />
        <GuideCard guide={guide} hideHighlight />
      </div>
    </div>
  )
}

export function GuideReserveCard() {
  const [guestCount, setGuestCount] = useState(1)

  const handleGuestChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGuestCount(parseInt(e.target.value))
  }
  return (
    <div className="max-w-sm mx-4">
      {/* Reserve Card */}
      <div className="flex-col  relative">
        <div className=" p-3 sm:p-5 border z-10 relative border-neutral-300 rounded-xl bg-white">
          {/* Price */}
          <GuidePrice price={guide.price} />
          {/* Review */}
          <Reviews />
          {/* Option Block */}
          <div className="my-4">
            {/* label */}
            <div className="grid grid-cols-2 grid-flow-row-dense border rounded-xl border-neutral-200">
              <label className="font-medium p-3 text-sm">
                Date
                <input
                  className="block  text-base font-light w-full text-neutral-900 "
                  defaultValue={getDate()}
                  type="date"
                />
              </label>
              <label className="font-medium  text-sm p-3 border-l ">
                Guests
                <select
                  className="block font-light text-base"
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
                <GuideSimpleProfile />
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

function GuideSimpleProfile() {
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
          I&quot;m excited to meet you!
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
