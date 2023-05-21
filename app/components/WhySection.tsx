import WhyBlock from "./WhyBlock"

export default function WhySection() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="mx-20 mt-36 text-3xl mb-10">Why choose us?</h1>
      <div className="Blocks grid md:grid-cols-3 lg:pl-10 lg:mx-24 lg:space-x-8 md:mx-10 md:space-x-6 grid-cols-1">
        <WhyBlock
          img={"/assets/icons/why1.png"}
          title={"Travelling alone is hard"}
        >
          Traveling to foreign places can be scary due to the language barriers,
          unsafe areas, or being unwelcoming of foreigners. We want to allow you
          to feel safe and explore the city you are in with confidence
        </WhyBlock>
        <WhyBlock
          img={"/assets/icons/why2.png"}
          title={"Immerse in the local culture"}
        >
          Travel as a local and go beyond the “tourist” spots. Explore the
          authentic local cuisines, visit the hidden gems of the city, and join
          the local activities! Our guides will show what it’s really like to
          live as a local in their city
        </WhyBlock>
        <WhyBlock
          img={"/assets/icons/why3.png"}
          title={"Friend in an Otter city"}
        >
          Our local guides are like you. Explorers at heart looking for new
          experiences and wanting a joyful experience. They love to meet you and
          become friends along your journey!
        </WhyBlock>
      </div>
    </div>
  )
}
