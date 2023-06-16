"use client"

import React, { useEffect, useState } from "react"
import { InputBox } from "./InputTypes"
import { useRouter } from "next/navigation"
import supabase from "../supabase-browser"
import FullCalendar from "@fullcalendar/react"
import Button from "./Button"
import Image from "next/image"
import { StaticBox, LargeStaticBox } from "./InputTypes"
import daygrid from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import {
  Field,
  Form,
  Formik,
  FormikErrors,
  FormikTouched,
  FormikValues,
} from "formik"
import * as Yup from "yup"
import Calendar, { Scheduler } from "../components/calendar/Calendar"
import {
  DEFAULT_SCHEDULE,
  OVERIDE_SCHEDULE,
} from "../components/calendar/constants"

const USER_DATA_INITIAL_STATE = {
  user_id: "",
  email: "",
  f_name: "",
  l_name: "",
  phone: "",
  company: "",
  employment: "",
  languages: "",
  bio: "",
  interests: "",
  why: "",
}

export function Dashboard2(user: any) {
  const [userData, setUserData] = useState<any>(USER_DATA_INITIAL_STATE)
  const [onboarded, setOnboarded] = useState<any>(false)
  const router = useRouter()
  const [images, setImages] = useState<any>([])

  useEffect(() => {
    const fetchData = async () => {
      const { data: userInfo } = await supabase
        .from("users")
        .select("*")
        .eq("user_id", user.user.id)

      if (userInfo?.length == 0) {
        setOnboarded(false)
      } else {
        setUserData(userInfo)
        setOnboarded(true)
      }
    }
    const getImages = async () => {
      const { data, error } = await supabase.storage
        .from("guides")
        .list(user.user.id + "/", { limit: 1 })

      if (data !== null) {
        setImages(data)
        console.log("hi")
      } else {
        alert("Error loading images")
        console.log(error)
      }
    }
    getImages()

    fetchData()
  }, [])

  return (
    // <div className="w-full">
    //   <div className="bg-sky-200 h-96 w-full"></div>
    //   <div className="max-w-xl border p-8 mx-auto rounded-lg flex flex-col gap-3"></div>
    //   {!onboarded ? (
    //     <a href="/onboard">GO ONBOARD</a>
    //   ) : (
    //     <div>{userData[0].email}</div>
    //   )}
    //   <div>User info</div>
    // </div>
    <div className="w-full">
      {!onboarded ? (
        <div className="w-full flex flex-col items-center">
          <h1 className="text-3xl">Almost done!</h1>
          <p className="w-4/12 text-center font-light mt-3 mb-5">
            Once you fill out this form you will be officially registered as a
            local guide! It should take around 5 minutes and is just a way for
            travelers to learn more about you!
          </p>
          <Button href="/onboard" className="text-lg text-white bg-black">
            Continue
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="bg-sky-200 h-96 w-full absolute -z-40"></div>
          <div className="PROFILE shadow-lg w-[35rem] p-16 bg-white rounded-xl mt-32">
            <h1 className="border-b-2 text-xl pb-3">Your Profile</h1>
            <div className="w-full mt-8 justify-center flex">
              <Image
                src={`https://lzzlsndqxlmpjoonmjfd.supabase.co/storage/v1/object/public/guides/${user.user.id}/${images[0]?.name}`}
                height={100}
                width={100}
                alt={"Profile Pic"}
                className="object-contain"
              />
            </div>
            <StaticBox
              label="First Name"
              name="f_name"
              type="text"
              value={userData[0].f_name}
              statusCompleted={userData.f_name ? true : false}
            />
            <StaticBox
              label="Last Name"
              name="l_name"
              type="text"
              value={userData[0].l_name}
              statusCompleted={userData.f_name ? true : false}
            />
            <StaticBox
              label="Employment"
              name="employment"
              type="text"
              value={userData[0].employment}
              statusCompleted={userData.f_name ? true : false}
            />
            <StaticBox
              label="Phone Number"
              name="phone"
              type="text"
              value={userData[0].phone}
              statusCompleted={userData.f_name ? true : false}
            />
            <LargeStaticBox
              label="Biography"
              name="bio"
              placeholder="Hey! My name is Kamari Johnson and I'm a soccer coach near Long Beach. I've lived in Long Beach for about 5 years now and so I'd say I'm pretty familiar with the area. Some of my favorite things to do is go to the beach, yoga, and try new foods. I love meeting new people and learning about different backgrounds and cultures. As your guide I'd be sure to take your to some of my favorite local restaurants and show you the Long Beach culture"
              type="textarea"
              value={userData.bio}
              statusCompleted={userData.f_name ? true : false}
            />
            <StaticBox
              label="Interests/Hobbies"
              name="interests"
              type="text"
              value={userData.interests}
              statusCompleted={userData.f_name ? true : false}
            />
            <StaticBox
              label="Email"
              name="email"
              type="text"
              value={userData[0].email}
              statusCompleted={userData.f_name ? true : false}
            />
          </div>
          <div>
            {/* <Calendar />
             */}
            <Scheduler
              supabase_schedule={DEFAULT_SCHEDULE}
              supabase_overrides={OVERIDE_SCHEDULE}
            />
          </div>
        </div>
      )}
    </div>
  )
}
