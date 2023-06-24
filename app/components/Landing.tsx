"use client"
import Image from "next/image"
import Button from "./Button"
import supabase from "../supabase-browser"
import { useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import HowBlock from "./HowBlock"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useAnimation } from "framer-motion"
import { Pacifico } from "next/font/google"
import { InputBox } from "./InputTypes"
const pacifico = Pacifico({ weight: "400", subsets: ["latin"] })
import React from "react"

// download headwind extension to autosort classnames so we see the same thing
export default function Landing() {
  const router = useRouter()
  const [email, setEmail] = useState<any>("")
  const howItWorks = useRef(null)
  const { ref, inView } = useInView({
    threshold: 0.3,
  })

  const animation = useAnimation()

  const scrollDown = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  }
  const handleChange = (e: any) => {
    setEmail(e.target.value)
  }
  const handleSubmit = async () => {
    try {
      const { error } = await supabase.from("emails").insert({ email: email })
      if (!error) {
        setEmail("")
        router.refresh()
      } else {
        console.log(error)
      }
    } catch (error: any) {
      alert(error.message)
    }
  }

  return (
    <div>
      <div className="h-[88vh] flex items-start md:items-center">
        <Image
          className="w-screen h-[88vh] object-cover absolute z-[-99]"
          src={"/home.png"}
          width={1000}
          height={1000}
          alt=""
        />
        <div
          className="Text-Section flex flex-col lg:pl-32 md:pl-16 md:mt-0 mt-28 md:text-left text-center 
      items-center md:items-start "
        >
          <h1
            className=" lg:w-7/12 text-sky-50 font-medium lg:leading-[1.2] lg:tracking-[0.02] lg:text-7xl 
          md:w-9/12 md:leading-[1.2] md:tracking-[0.03] md:text-6xl sm:text-6xl text-[2.6rem] leading-[2.8rem] tracking-[0.03] w-11/12"
          >
            Your local guide in an{" "}
            <span className={pacifico.className}>Otter</span> city
          </h1>
          <p className="text-cyan-900 md:w-5/12 ml-1 my-6 md:px-0 sm:px-28 px-10 font-pacifico ">
            Giving every traveler the confidence to travel safely and immerse
            themselves in new cultures
          </p>
          <div className="text-sm text-white mb-3 ml-1 md:px-0 sm:px-28 px-8 md:w-5/12">
            Enter your email to be notified when we launch and test our beta!
          </div>
          <div className="flex flex-row gap-2 ">
            <div className=" flex flex-col ">
              {/* <label className="">
                <span className="font-[250] text-sm">Email</span>
              </label> */}
              <input
                className={`
               border-b py-2 px-4 w-[16.5rem] bg-transparent placeholder:text-gray-100 tracking-wider outline-none border-white text-white
                 `}
                type="text"
                name="email"
                value={email}
                placeholder={"youremail@example.com"}
                onChange={handleChange}
                required={true}
              />
            </div>

            <button
              onClick={handleSubmit}
              className={`inline-block text-center max-w-fit bg-white
        font-normal text-sm transition ease-in-out duration-100
      box-content hover:scale-105 rounded-2xl my-0 px-[40px] py-[11px]`}
            >
              Join Waitlist!
            </button>
          </div>
        </div>
      </div>
      <div
        ref={howItWorks}
        className="w-full flex flex-col items-center justify-center"
      >
        <h1 className="mt-36 text-3xl mb-10 md:text-start text-center w-full md:pl-20">
          How it works
        </h1>
        <div className="Blocks grid md:grid-cols-4 lg:mx-24 lg:space-x-8 md:mx-10 md:space-x-6 grid-cols-1">
          {/* <div className="lg:ml-32 md:ml-24 "></div> */}
          <HowBlock img={"/assets/icons/how1.png"} title={"Select your city"}>
            Choose the city or region you want to explore
          </HowBlock>

          <HowBlock img={"/assets/icons/how2.png"} title={"Find otter guide!"}>
            View a list of local guides in that area and explore their planned
            itinerary
          </HowBlock>
          <HowBlock img={"/assets/icons/how3.png"} title={"Booking"}>
            Once you find a local guide that you like, book through our website
            and start communicating with them
          </HowBlock>
          <HowBlock img={"/assets/icons/how4.png"} title={"Travel!"}>
            Meet up with them when your trip starts and begin exploring the
            local area!
          </HowBlock>
        </div>
      </div>
    </div>
  )
}
