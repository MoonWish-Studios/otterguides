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
import { GuideCard, GUIDES } from "../page"

const guide = {
  name: "Alessia Rossi",
  employment: "Fashion Stylist",
  languages: ["English", "Italian", "French"],
  bio: "Ciao! I'm Alessia, a fashion stylist with an eye for trends and a love for personal style. Join me on a stylish journey through the city's hidden boutiques, fashion districts, and iconic fashion landmarks. We'll discover unique designer pieces, learn about fashion history, and even create your own signature looks. Get ready to elevate your style and embrace the city's fashion-forward energy!",
  interests: [
    "Fashion",
    "Shopping",
    "Street style",
    "Vintage fashion",
    "Fashion photography",
    "Fashion history",
    "Personal styling",
    "Designer brands",
    "Fashion events",
    "Fashion blogging",
  ],
  rating: 4.8,
  reviews: 120,
  price: 90,
  duration: 4,
  avatar:
    "https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  highlights: [
    "Hidden boutiques",
    "Fashion district tour",
    "Creating signature looks",
    "Capturing street style",
    "Fashion-forward energy",
  ],
  id: 6,
  location: "https://www.google.com/maps?q=Milan",
}
export default function Page() {
  return (
    <div className="mx-6">
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
        </div>
        <GuideReserveCard />
      </div>
      <div className=" ml-8 ">
        <h1 className="text-xl font-medium">Meet your guide</h1>
        <GuideCard guide={guide} hideHighlights />
        <h1 className="text-xl font-medium mt-20">
          Explore other guides in your area
        </h1>
        <div className="flex flex-col overflow-x-scroll">
          {GUIDES.map((guide, i) => (
            <GuideCard key={i} guide={guide} hideHighlights={false} />
          ))}
        </div>
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
          <Reviews rating={guide.rating} reviewCount={guide.reviews} />
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
        <p className=" text-neutral-400 font-light">I'm excited to meet you!</p>
      </div>
    </div>
  )
}

function getDate() {
  const offset = new Date().getTimezoneOffset()
  const date = new Date(new Date().getTime() - offset * 60 * 1000)
  return date.toISOString().split("T")[0]
}
