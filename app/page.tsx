import Image from "next/image"
import Landing from "./components/Landing"
import VerticalCard from "./components/VerticalCard"
import CardScroll from "./components/CardScroll"
import HowSection from "./components/HowSection"
import WhySection from "./components/WhySection"
import AboutCard from "./components/AboutCard"
import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import SignOut from "./components/SignOut"

// download headwind extension to autosort classnames so we see the same thing
export default function Page() {
  return <Home />
}

function Home() {
  // const supabase = createServerComponentClient({ cookies })

  // const { data: posts } = await supabase.from("posts").select("*")

  return (
    <div className="">
      <Landing />
      <div className="">
        {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      </div>
      <section className="w-full mb-10">
        <CardScroll />
        <WhySection />

        <AboutCard />
      </section>
    </div>
  )
}
