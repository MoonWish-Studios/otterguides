import VerticalCard from "./VerticalCard"
import React from "react"

export default function CardScroll() {
  return (
    <div className="">
      <h1 className=" mx-20 mt-36 text-3xl mb-10 flex md:justify-start justify-center">
        Local guides in California
      </h1>
      <div className="relative flex items-center  overflow-x-auto scrollbar-hide ">
        <VerticalCard
          city={"Los Angeles"}
          numGuides={"12"}
          img={"/assets/la.jpg"}
          pad={true}
          unreleased={false}
        />
        <VerticalCard
          city={"Long Beach"}
          numGuides={"7"}
          img={"/assets/longbeach.png"}
          pad={false}
          unreleased={false}
        />
        <VerticalCard
          city={"San Diego"}
          numGuides={"0"}
          img={"/assets/sandiego.jpg"}
          pad={false}
          unreleased={true}
        />
        <VerticalCard
          city={"Anaheim"}
          numGuides={"0"}
          img={"/assets/anaheim.jpg"}
          pad={false}
          unreleased={true}
        />
        <VerticalCard
          city={"Irvine"}
          numGuides={"0"}
          img={"/assets/irvine.jpg"}
          pad={false}
          unreleased={true}
        />
        <VerticalCard
          city={"San Francisco"}
          numGuides={"0"}
          img={"/assets/sf.jpeg"}
          pad={false}
          unreleased={true}
        />
      </div>
    </div>
  )
}
