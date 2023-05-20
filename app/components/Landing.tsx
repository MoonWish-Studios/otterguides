import Image from "next/image"

// download headwind extension to autosort classnames so we see the same thing
export default function Landing() {
  return (
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
          className=" lg:w-6/12 text-sky-50 font-medium lg:leading-[1.2] lg:tracking-[0.02] lg:text-7xl 
          md:w-9/12 md:leading-[1.2] md:tracking-[0.03] md:text-6xl sm:text-6xl text-[2.6rem] leading-[2.8rem] tracking-[0.03] w-11/12"
        >
          Your local guide in an Otter city
        </h1>
        <p className="text-cyan-900 md:w-4/12 ml-1 mt-6 md:px-0 sm:px-28 px-10 ">
          Giving every traveler the confidence to travel safely and immerse
          themselves in new cultures
        </p>
      </div>
    </div>
  )
}
