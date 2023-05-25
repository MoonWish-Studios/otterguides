"use client"
import Image from "next/image"
import React, { useState } from "react"
import { GuideButton } from "../GuideHighlights"
import Reviews from "../Reviews"
import GoogleMapReact from "google-map-react"

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
}

export default function Page() {
  const [guestCount, setGuestCount] = useState(1)

  const handleGuestChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGuestCount(parseInt(e.target.value))
  }
  return (
    <div>
      {/* Reserve Card */}
      <div className="flex-col m-4 relative">
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
        <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13260.034298428562!2d-117.93699864458009!3d33.81209180000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7d12b3b5e6b%3A0x2ef62f8418225cfa!2sDisneyland%20Park!5e0!3m2!1sen!2sus!4v1684991430488!5m2!1sen!2sus" />
      </div>
    </div>
  )
}

function MapMarker() {
  return (
    <div>
      <svg
        width="48"
        height="71"
        viewBox="0 0 48 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="24"
          cy="49"
          r="21.5"
          fill="#34F3FF"
          fill-opacity="0.28"
          stroke="#06B6D4"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.1208 9.72059C18.6816 3.15979 29.3188 3.15979 35.8796 9.72059C42.4404 16.2814 42.4404 26.9186 35.8796 33.4794L24.0002 45.3588L12.1208 33.4794C5.55999 26.9186 5.55999 16.2814 12.1208 9.72059ZM24.0002 26.4C26.6512 26.4 28.8002 24.251 28.8002 21.6C28.8002 18.949 26.6512 16.8 24.0002 16.8C21.3492 16.8 19.2002 18.949 19.2002 21.6C19.2002 24.251 21.3492 26.4 24.0002 26.4Z"
          fill="#38BDF8"
        />
      </svg>
    </div>
  )
}
function Map({ src }: { src: string }) {
  return (
    <div
      style={{ height: "50vh", width: "100%" }}
      className=" -translate-y-2 rounded-b-xl border border-neutral-300"
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBuAXrF1Xr1vbPIirxv2JYMoUQXnRXX9PM" }}
        defaultCenter={{ lat: 59.95, lng: 30.33 }}
        options={{
          disableDefaultUI: true,
          gestureHandling: "cooperative",
        }}
        yesIWantToUseGoogleMapApiInternals
        defaultZoom={11}
      >
        <MapMarker lat={59.955413} lng={30.337844} />
      </GoogleMapReact>
      {/* <iframe
        src={src}
        className="w-full h-60"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> */}
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
