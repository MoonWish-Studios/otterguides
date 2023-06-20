import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function AboutCard() {
  return (
    <div className="cardContainer w-full flex items-center justify-center py-5 md:px-56 px-8 mt-20">
      <div className="mt-10 flex lg:flex-row flex-col lg:items-stretch items-center border-2 w-full rounded-xl justify-start">
        <div className="textSection md:w-10/12 w-10/12 flex flex-col justify-center lg:ml-12 py-8 lg:items-start items-center lg:text-start text-center">
          <div className="flex flex-row justify-center space-x-5">
            <h1 className="text-3xl mb-5 flex justify-center items-center">
              About the founders
            </h1>
          </div>
          <p className="leading-10 text-neutral-600 font-light">
            Hi! We are Bobby and Weibo,
          </p>
          <p className="lg:w-10/12 md:w-11/12 w-12/12 text-neutral-600 font-light">
            We are both currently college students based in Southern California.
            One of our dreams is to travel to experience new cultures and meet
            new people. Our goals for Otter Guides is to encourage travelers to
            immerse themselves in the local culture of the place they are
            visiting and give them a safe way to do so. We have a lot to improve
            on still so feel free to get in touch with us on any feedback that
            you have.
          </p>
          <div>
            <p className="mt-8 text-neutral-600 mb-2">Bobby & Weibo</p>
            <div className="flex flex-row gap-3">
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
      </div>
    </div>
  )
}
