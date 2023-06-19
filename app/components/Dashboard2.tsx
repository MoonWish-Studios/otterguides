"use client"

import React, { useEffect, useState } from "react"
import { InputBox } from "./InputTypes"
import { redirect } from "next/navigation"
import supabase from "../supabase-browser"

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

    fetchData()
  }, [])
  console.log(onboarded)
  return (
    <div className="w-full">
      <div className="bg-sky-200 h-96 w-full"></div>
      <div className="max-w-xl border p-8 mx-auto rounded-lg flex flex-col gap-3"></div>
      {!onboarded ? (
        <a href="/onboard">GO ONBOARD</a>
      ) : (
        <div>{userData[0].email}</div>
      )}
      <div>User info</div>
    </div>
  )
}
