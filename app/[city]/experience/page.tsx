import Image from "next/image"
export default function Experience({}) {
  return (
    <div>
      <GuideCard />
    </div>
  )
}

function GuideCard() {
  return (
    <div className="h-fit w-fit rounded-lg m-4 p-5 border border-neutral-300 flex ">
      {/* Avatar Profile */}
      <div className=" max-h-60 w-40 relative rounded-lg bg-neutral-400 shrink-0 overflow-clip ">
        <Image
          alt="Guide Profile Picture"
          className="object-cover"
          src="https://images.unsplash.com/photo-1564109799258-6b7c25cd1c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3418&q=80"
          fill
        />
      </div>
      {/* Guide Profile */}
      <div className="ml-4 max-w-xl  pr-4 mr-8 border-r">
        <h1 className="font-medium text-xl">Kamari Ababuo</h1>

        <TextLeftIcon alt="briefcase" icon="/assets/icons/briefcase.svg">
          Soccer Team Coach at SuperSport Africa
        </TextLeftIcon>
        <TextLeftIcon alt="globe-alt" icon="/assets/icons/globe-alt.svg">
          Speaks English, Afrikaans, Swahiili
        </TextLeftIcon>
        <p className="mt-4 font-light">
          Lorem ipsum dolor sit amet consectetur. Volutpat lacus fermentum
          mattis arcu. Et mi sapien quisque lorem. Etiam sit tellus lorem augue
          elementum. Gravida adipiscing tellus mattis gravida sed elementum
          turpis euismod enim. Nunc pharetra et viverra sed posuere massa
          viverra.
        </p>

        <h1 className="my-2 text-neutral-500">Interests</h1>
        <div className="flex gap-2 flex-wrap">
          <Interest>Math</Interest>
          <Interest>Cycling</Interest>
          <Interest>Food</Interest>
          <Interest>Travel</Interest>
          <Interest>Dance</Interest>
          <Interest>Photography</Interest>
          <Interest>Skincare</Interest>
          <Interest>Soccer</Interest>
        </div>
      </div>
      {/* Guide Highlights */}
      <GuideHighlights />
    </div>
  )
}
function Hightlight({ children }: { children: React.ReactNode }) {
  return (
    <li className="mb-4 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 -left-3 ">
        <svg
          width="12"
          height="12"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#22D3EE" />
        </svg>
      </span>
      <h3 className="flex items-center mb-1 font-regular text-base text-neutral-500">
        {children}
      </h3>
    </li>
  )
}
function GuideHighlights() {
  return (
    <div className="w-60 shrink-0 ">
      <h3>Guide Highlights</h3>
      <ol className="relative border-l border-cyan-200 ml-2 mt-2">
        <Hightlight>Kayak along Long Beach</Hightlight>
        <Hightlight>City highlights</Hightlight>
        <Hightlight>Join a community event</Hightlight>
        <Hightlight>Enjoy tasty local food</Hightlight>
        <Hightlight>Wine tasting</Hightlight>
      </ol>

      <p className="mt-6 mb-2 text-base">$35/person · 6 hours</p>
      <button className="rounded-xl bg-cyan-300 max-w-xl w-full px-6 py-2.5">
        View Guide
      </button>
    </div>
  )
}
function TextLeftIcon({
  icon,
  alt,
  children,
  className = "",
}: {
  icon: string
  alt: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className="flex gap-x-1 justify-start items-center my-1 text-neutral-500">
      <Image
        alt={alt}
        className={className}
        width="20"
        height="20"
        src={icon}
      />
      {children}
    </div>
  )
}
function Reviews() {
  return <div>test</div>
}

function Interest({ children }: { children: React.ReactNode }) {
  return (
    <div className="border w-fit rounded-full border-neutral-400 px-4 py-1">
      {children}
    </div>
  )
}
