import Image from "next/image"
import React from "react"
import { GuideButton } from "../GuideHighlights"
import Reviews from "../Reviews"

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
  return (
    <div>
      {/* Reserve Card */}
      <div className="flex-col m-4 p-3 sm:p-5 border border-neutral-300 rounded-xl">
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
                value={getDate()}
                type="date"
              />
            </label>
            <label className="font-medium  text-sm p-3 border-l ">
              Guests
              <select className="block font-light text-base">
                <option>1 guest</option>
                <option>2 guest</option>
                <option>3 guest</option>
                <option>4 guest</option>
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
      </div>
      <div>
        <h1>Meet your guide</h1>
      </div>
    </div>
  )
}

function GuidePrice({ price }: { price: number | string }) {
  return (
    <div className="flex items-end gap-x-2">
      <h1 className="font-semibold text-lg">${price}</h1>
      <caption className="text-sm text-neutral-500 ">/ person</caption>
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
