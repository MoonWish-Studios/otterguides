"use client"
import Image from "next/image"
import Button from "./Button"
import { useRef } from "react"
import { useInView } from "react-intersection-observer"
import HowBlock from "./HowBlock"
import { useEffect } from "react"
import { useAnimation } from "framer-motion"
import { Pacifico } from "next/font/google"
const pacifico = Pacifico({ weight: "400", subsets: ["latin"] })
import React from "react"

// download headwind extension to autosort classnames so we see the same thing
export default function Landing() {
  const howItWorks = useRef(null)
  const { ref, inView } = useInView({
    threshold: 0.3,
  })

  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 0.5,
          opacity: 0,
        },
      })
    }
    if (!inView) {
      animation.start({ opacity: 0 })
    }
  }, [inView])

  const scrollDown = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
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
          className="Text-Section flex flex-col md:pl-32 md:mt-0 mt-28 md:text-left text-center 
      items-center md:items-start "
        >
          <h1
            className=" lg:w-7/12 text-sky-50 font-medium lg:leading-[1.2] lg:tracking-[0.02] lg:text-7xl 
          md:w-9/12 md:leading-[1.2] md:tracking-[0.03] md:text-6xl sm:text-6xl text-[2.6rem] leading-[2.8rem] tracking-[0.03] w-11/12"
          >
            Your local guide in an{" "}
            <span className={pacifico.className}>Otter</span> city
          </h1>
          <p className="text-cyan-900 md:w-4/12 ml-1 my-6 md:px-0 sm:px-28 px-10 font-pacifico ">
            Giving every traveler the confidence to travel safely and immerse
            themselves in new cultures
          </p>
          <button
            onClick={() => scrollDown(howItWorks)}
            className={`inline-block text-center max-w-fit bg-white
        font-normal text-sm transition ease-in-out duration-100
      box-content hover:scale-105 rounded-2xl my-0 px-[45px] py-[12px]`}
          >
            Learn More
          </button>
          {/* <Button className="px-[45px] py-[12px]">Learn More</Button> */}
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
