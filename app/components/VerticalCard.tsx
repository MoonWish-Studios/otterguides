import Image from "next/image"
import Button from "./Button"
export default function VerticalCard({
  city,
  numGuides,
  img,
  pad,
}: {
  city: string
  numGuides: string
  img: string
  pad: boolean
}) {
  let possiblePad = pad ? "md:ml-20 ml-12" : ""

  return (
    <div
      className={`outer w-[18rem] shrink-0 rounded-3xl mr-10 overflow-clip ${possiblePad}`}
    >
      <div className={` rounded-3xl relative `}>
        <div className={`aspect-w-16 aspect-h-9  `}>
          <Image
            className={`object-cover mb-7  z-[-99] `}
            src={img}
            fill
            alt={"avatars"}
          />
        </div>
        <div
          className={`content backdrop-brightness-[0.55] rounded-3xl  flex flex-col text-white items-center `}
        >
          <p className="mt-20">explore</p>

          <h1 className="pb-16 font-medium text-[2.3rem]">{city}</h1>
          <p className="font-[400] mb-3">With one of our {numGuides} guides</p>

          <Image
            className="object-scale-down mb-7"
            src={"/assets/Avatars.png"}
            width={130}
            height={130}
            alt={"avatars"}
          />

          <Button className="mb-8 text-black">Explore</Button>
        </div>
      </div>
    </div>
  )
}
