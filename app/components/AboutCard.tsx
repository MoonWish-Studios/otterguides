import Image from "next/image"
import Link from "next/link"

export default function AboutCard() {
  return (
    <div className="cardContainer w-full flex items-center justify-center py-5 md:px-32 px-8 mt-20">
      <div className="mt-10 flex lg:flex-row flex-col lg:items-stretch items-center border-2 w-full rounded-xl justify-center">
        <div className="ImageContainer lg:block hidden relative w-[325px] flex-none  ">
          <Image
            className=" object-cover scale-110 rounded-lg "
            src={"/assets/founders.png"}
            fill
            alt={"founders"}
          />
        </div>
        <div className="textSection md:w-9/12 w-10/12 flex flex-col justify-center lg:ml-12 py-8 lg:items-start items-center lg:text-start text-center">
          <h1 className="text-3xl mb-6">About the founders</h1>

          <p className="leading-10 text-neutral-600 font-light">
            Hi! We are Bobby and Weibo,
          </p>
          <p className="lg:w-9/12 md:w-11/12 w-12/12 text-neutral-600 font-light">
            We are both currently college students based in Southern California.
            One of our dreams is to travel to experience new cultures and meet
            new people. Our goals for Otter Tours is to encourage travelers to
            immerse themselves in the local culture of the place they are
            visiting and give them a safe way to do so. We have a lot to improve
            on still so feel free to get in touch with us on any feedback that
            you have.
          </p>
          <p className="mt-8 text-neutral-600">Bobby & Weibo</p>
        </div>
        <div className="smallImage pb-8 flex flex-row space-x-5 lg:hidden">
          <Link
            href={"https://www.linkedin.com/in/bobby-zhong/"}
            target="_blank"
          >
            <Image
              src={"/assets/bobby.png"}
              width={60}
              height={60}
              alt={"bobby pic"}
            />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/weibozhang/"}
            target="_blank"
          >
            <Image
              src={"/assets/weibo.png"}
              width={60}
              height={60}
              alt={"weibo pic"}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
