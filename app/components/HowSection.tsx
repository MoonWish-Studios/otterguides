import HowBlock from "./HowBlock"
import React from "react"

export default function HowSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="mx-20 mt-36 text-3xl mb-10">How it works</h1>
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
          Meet up with them when your trip starts and begin exploring the local
          area!
        </HowBlock>
      </div>
    </div>
  )
}
