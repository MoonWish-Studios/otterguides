"use client"
import React, { useEffect, useState } from "react"
import FullCalendar from "@fullcalendar/react"
import daygrid from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"

const Profile = {
  firstName: "John",
  lastName: "Doe",
  employment: "Software Engineer",
  phoneNumber: "626-297-9032",
  bio: "Namaste! I'm Sofia, a certified yoga instructor deeply connected to the mind, body, and spirit. Join me on a transformative journey through the city's serene yoga studios, lush parks, and breathtaking outdoor locations. We'll explore various yoga styles, practice meditation, and embrace holistic well-being. Get ready to find your inner balance and cultivate a sense of peace within the urban chaos.",
}

interface UserProfileProps {
  firstName: string
  lastName: string
  employment: string
  phoneNumber: string
  bio: string
  interests: string[]
  languages: string[]
  email: string
  profilePicture: string
  password: string
}

const EMPTY_PROFILE: UserProfileProps = {
  firstName: "",
  lastName: "",
  employment: "",
  phoneNumber: "",
  bio: "",
  interests: [],
  languages: [],
  email: "",
  profilePicture: "",
  password: "",
}

function CreateGuideProfile(props: UserProfileProps) {}
export default function Page() {
  const [profile, setProfile] = useState<UserProfileProps>(EMPTY_PROFILE)

  useEffect(() => {})

  const handleInputChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement
    const value = target.value
    const name = target.name
    setProfile({ ...profile, [name]: value })
  }
  return (
    <div className="w-full">
      <div className="bg-sky-200 h-96 w-full"></div>
      <div className="max-w-xl border p-8 mx-auto rounded-lg flex flex-col gap-3">
        <Input
          label="First name"
          value="John"
          name="firstName"
          onChange={handleInputChange}
        />
        <Input
          label="Last name"
          value="John"
          name="lastName"
          onChange={handleInputChange}
        />
        <Input
          label="Employment"
          value="John"
          name="employment"
          onChange={handleInputChange}
        />
        <Input
          label="Phone NUmber"
          value="626-297-9032"
          type="tel"
          name="phoneNumber"
          onChange={handleInputChange}
        />
        <Input
          label="Biography"
          value="John"
          name="bio"
          onChange={handleInputChange}
        />
      </div>
      {/* Profile */}
      <div> </div>
      <FullCalendar
        initialView="dayGridMonth"
        plugins={[daygrid, interactionPlugin]}
        // initialDate={date}
        // viewClassNames="bg-cyan-300"
        nowIndicatorClassNames="text-red-500"
        dayCellClassNames="text-cyan-300"
        slotLaneClassNames="text-cyan-900"
        dateClick={(e) => console.log(e)}
      />
    </div>
  )
}

function Input({
  label,
  value,
  onChange,
  name,
  type = "text",
}: {
  label: string
  value: string
  onChange: (value: React.ChangeEvent) => void
  name: string
  type?: string
}) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-600 mb-1">{label}</label>
      <input
        className="border outline-offset-1 outline-cyan-300 border-gray-200 rounded-xl p-2"
        value={value}
        name={name}
        onChange={(e) => onChange(e)}
        type={type}
      />
    </div>
  )
}
