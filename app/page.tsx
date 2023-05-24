import Image from "next/image"
import Landing from "./components/Landing"
import VerticalCard from "./components/VerticalCard"
import CardScroll from "./components/CardScroll"
import HowSection from "./components/HowSection"
import WhySection from "./components/WhySection"
import AboutCard from "./components/AboutCard"

// download headwind extension to autosort classnames so we see the same thing
export default function Home() {
  return (
    <div className="">
      <Landing />
      {/* <HowSection /> */}

      <section className="w-full mb-10">
        <CardScroll />
        <WhySection />

        <AboutCard />
      </section>
    </div>
  )
}
