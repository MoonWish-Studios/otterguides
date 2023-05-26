"use client"
import Image from "next/image"
import TextLeftIcon from "../components/TextLeftIcon"
import GuideHighlights, { GuideButton } from "../components/GuideHighlights"
import { nanoid } from "nanoid"
import useWindowSize from "../components/useScreensize"
// import { useMediaQuery } from "react-responsive"
import { VT323 } from "next/font/google"
import { useState } from "react"
import Reviews from "../components/Reviews"
import GuideInterests, { Interest } from "../components/Interests"
const vt323 = VT323({ weight: "400", subsets: ["latin"] })

export default function Experience({}) {
  return (
    <div className="flex justify-center">
      <div className="flex-col">
        {GUIDES.map((guide, i) => (
          <GuideCard key={i} guide={guide} hideHighlights={false} />
        ))}
      </div>
    </div>
  )
}

export const GUIDES = [
  {
    name: "Luna Santiago",
    employment: "Street Artist",
    languages: ["English", "Spanish"],
    bio: "Hola! I'm Luna, a passionate street artist with a deep love for colors and creativity. Join me on a vibrant journey through the city's street art scene, where we'll explore hidden murals, learn about different artistic styles, and even try our hand at creating our own masterpieces. Let's bring the streets to life with art!",
    interests: ["Street Art", "Painting", "Photography"],
    rating: 4.8,
    reviews: 120,
    price: 50,
    duration: 2,
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    highlights: [
      "Hidden murals",
      "Artistic styles",
      "Interactive workshops",
      "Capturing the city's spirit",
      "Creating masterpieces",
    ],
    id: 1,
    location: "https://www.google.com/maps?q=New+York+City",
  },
  {
    name: "Max Taylor",
    employment: "Mixologist",
    languages: ["English", "French", "Italian"],
    bio: "Cheers! I'm Max, a cocktail enthusiast and master mixologist. Join me on an unforgettable journey through the city's most vibrant bars and speakeasies. We'll explore unique flavors, learn the art of mixology, and even create our own signature cocktails. Get ready to sip and savor the city's cocktail culture in style!",
    interests: ["Cocktails", "Bartending", "Culinary Experiences"],
    rating: 4.9,
    reviews: 95,
    price: 70,
    duration: 3,
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    highlights: [
      "Hidden bars",
      "Mixology workshops",
      "Crafting signature cocktails",
      "Unforgettable flavors",
      "Immersive culinary experiences",
    ],
    id: 2,
    location: "https://www.google.com/maps?q=Paris",
  },
  {
    name: "Kai Nakamura",
    employment: "Sushi Chef",
    languages: ["English", "Japanese"],
    bio: "Konnichiwa! I'm Kai, a passionate sushi chef with years of experience honing my skills. Embark on a culinary adventure with me as we explore the secrets of sushi-making, from selecting the freshest ingredients at local markets to mastering the art of precision knife work. Join me and discover the delicate flavors and exquisite craftsmanship behind Japan's most beloved cuisine.",
    interests: ["Culinary Arts", "Japanese Culture", "Food Photography"],
    rating: 4.7,
    reviews: 80,
    price: 60,
    duration: 4,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    highlights: [
      "Local fish markets",
      "Sushi-making workshops",
      "Tasting authentic flavors",
      "Traditional techniques",
      "Capturing food moments",
    ],
    id: 3,
    location: "https://www.google.com/maps?q=Tokyo",
  },
  {
    name: "Sofia Rivera",
    employment: "Yoga Instructor",
    languages: ["English", "Spanish"],
    bio: "Namaste! I'm Sofia, a certified yoga instructor deeply connected to the mind, body, and spirit. Join me on a transformative journey through the city's serene yoga studios, lush parks, and breathtaking outdoor locations. We'll explore various yoga styles, practice meditation, and embrace holistic well-being. Get ready to find your inner balance and cultivate a sense of peace within the urban chaos.",
    interests: [
      "Yoga",
      "Meditation",
      "Nature",
      "Wellness",
      "Mindfulness",
      "Self-care",
      "Healthy living",
      "Spirituality",
      "Outdoor activities",
      "Holistic healing",
    ],
    rating: 4.9,
    reviews: 150,
    price: 60,
    duration: 2,
    avatar:
      "https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    highlights: [
      "Serene yoga studios",
      "Outdoor meditation sessions",
      "Breath-taking landscapes",
      "Connecting mind and body",
      "Inner peace",
    ],
    id: 4,
    location: "https://www.google.com/maps?q=Los+Angeles",
  },
  {
    name: "Diego Sanchez",
    employment: "Surfing Instructor",
    languages: ["English", "Portuguese", "Spanish"],
    bio: "Hey there! I'm Diego, a passionate surfer riding the waves since I was a kid. Join me on an epic adventure through the city's best surf spots, where we'll catch thrilling waves and experience the adrenaline rush of riding the ocean's power. Whether you're a beginner or an experienced surfer, I'll guide you to improve your skills and embrace the surf lifestyle. Let's chase the perfect wave together!",
    interests: [
      "Surfing",
      "Beach life",
      "Water sports",
      "Ocean conservation",
      "Fitness",
      "Adventure",
      "Travel",
      "Sunset watching",
      "Beach parties",
      "Coastal photography",
    ],
    rating: 4.7,
    reviews: 100,
    price: 80,
    duration: 3,
    avatar:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1148&q=80",
    highlights: [
      "Best surf spots",
      "Surf lessons",
      "Riding thrilling waves",
      "Embracing surf culture",
      "Unforgettable beach memories",
    ],
    id: 5,
    location: "https://www.google.com/maps?q=Rio+de+Janeiro",
  },
  {
    name: "Alessia Rossi",
    employment: "Fashion Stylist",
    languages: ["English", "Italian", "French"],
    bio: "Ciao! I'm Alessia, a fashion stylist with an eye for trends and a love for personal style. Join me on a stylish journey through the city's hidden boutiques, fashion districts, and iconic fashion landmarks. We'll discover unique designer pieces, learn about fashion history, and even create your own signature looks. Get ready to elevate your style and embrace the city's fashion-forward energy!",
    interests: [
      "Fashion",
      "Shopping",
      "Street style",
      "Vintage fashion",
      "Fashion photography",
      "Fashion history",
      "Personal styling",
      "Designer brands",
      "Fashion events",
      "Fashion blogging",
    ],
    rating: 4.8,
    reviews: 120,
    price: 90,
    duration: 4,
    avatar:
      "https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    highlights: [
      "Hidden boutiques",
      "Fashion district tour",
      "Creating signature looks",
      "Capturing street style",
      "Fashion-forward energy",
    ],
    id: 6,
    location: "https://www.google.com/maps?q=Milan",
  },
  {
    name: "Raj Patel",
    employment: "Culinary Historian",
    languages: ["English", "Hindi"],
    bio: "Hello! I'm Raj, a culinary historian fascinated by the stories behind food. Join me on a gastronomic adventure through the city's vibrant markets, traditional eateries, and cultural hotspots. We'll explore diverse cuisines, discover ancient recipes, and delve into the historical context of local dishes. Prepare your taste buds for a journey that blends flavors, culture, and unforgettable dining experiences.",
    interests: [
      "Food",
      "Cooking",
      "Food history",
      "Cultural diversity",
      "Food photography",
      "Local markets",
      "Food festivals",
      "Traditional recipes",
      "Gastronomic traditions",
      "Culinary storytelling",
    ],
    rating: 4.9,
    reviews: 110,
    price: 70,
    duration: 3,
    avatar:
      "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    highlights: [
      "Vibrant markets",
      "Culinary secrets",
      "Tasting local flavors",
      "Food history insights",
      "Unforgettable dining experiences",
    ],
    id: 7,
    location: "https://www.google.com/maps?q=Mumbai",
  },
  {
    name: "Liam Cooper",
    employment: "Nature Photographer",
    languages: ["English", "French", "German"],
    bio: "Hi there! I'm Liam, a nature photographer captivated by the beauty of the great outdoors. Join me on a photographic journey through the city's most scenic landscapes, hidden trails, and breathtaking natural wonders. We'll capture stunning vistas, learn photography techniques, and immerse ourselves in the serenity of nature. Let's create visual stories that reflect the soul of the city's wilderness.",
    interests: [
      "Photography",
      "Nature",
      "Landscape photography",
      "Wildlife",
      "Hiking",
      "Adventure",
      "Travel",
      "Outdoor exploration",
      "Nature conservation",
      "Environmental awareness",
    ],
    rating: 4.8,
    reviews: 130,
    price: 80,
    duration: 4,
    avatar:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
    highlights: [
      "Scenic landscapes",
      "Photography workshops",
      "Capturing wildlife",
      "Connecting with nature",
      "Visual storytelling",
    ],
    id: 8,
    location: "https://www.google.com/maps?q=Vancouver",
  },
]

interface GuideProps {
  name: string
  employment: string
  languages: string[]
  bio: string
  interests: string[]
  rating: number
  reviews: number
  price: number
  duration: number
  avatar: string
  highlights: string[]
  id: string | number
  location: string
}
export function GuideCard({
  guide,
  hideHighlights,
}: {
  guide: GuideProps
  hideHighlights?: boolean
}) {
  console.log(guide)
  // const isLarge = useMediaQuery({
  // query: "(min-width: 1024px)",
  // })
  const windowSize = useWindowSize()
  const isMobile = windowSize.width > 0
  const isSmall = windowSize.width > 640
  const isMedium = windowSize.width > 768
  const isLarge = windowSize.width > 1024
  console.log(isLarge, isMedium)
  return (
    <div className="shrink-0">
      {isLarge ? (
        <ExpandedGuideCard guide={guide} hideHighlights={hideHighlights} />
      ) : isMedium ? (
        <MedGuideCard guide={guide} hideHighlights={hideHighlights} />
      ) : (
        isMobile && (
          <SmallGuideCard guide={guide} hideHighlights={hideHighlights} />
        )
      )}
    </div>
  )
}
function MedGuideCard({
  guide,
  hideHighlights,
}: {
  guide: GuideProps
  hideHighlights?: boolean
}) {
  return (
    <div className="h-fit w-fit rounded-lg m-4 p-5 border border-neutral-300 flex">
      {/* Guide Profile */}
      <div className="ml-4 max-w-xl  pr-4">
        <div className="flex gap-2">
          {/* Avatar Profile */}
          <div className=" h-20 w-20 relative rounded-full bg-neutral-400 shrink-0 overflow-clip">
            <Image
              alt="Guide Profile Picture"
              className="object-cover"
              src={guide.avatar}
              fill
            />
          </div>

          {/* Guide Info */}
          <div>
            {/* Name */}
            <h1 className="font-medium text-xl">{guide.name}</h1>
            {/* Employment */}
            <p className="text-md text-neutral-400">{guide.employment}</p>
            <Reviews rating={guide.rating} reviewCount={guide.reviews} />
          </div>
        </div>
        {/* Language */}
        <TextLeftIcon alt="globe-alt" icon="/assets/icons/globe-alt.svg">
          Speaks {guide.languages.join(", ")}
        </TextLeftIcon>
        {/* Bio */}
        <p className="mt-4 font-light text-ellipsis">{guide.bio}</p>
        {/* Interests */}
        <GuideInterests interests={guide.interests} />
      </div>
      {/* Guide Highlights */}
      {!hideHighlights && (
        <div className="flex flex-col pl-8 border-l">
          <GuideHighlights highlights={guide.highlights} />
          <p className="mt-6 mb-2 md:text-base text-sm">
            ${guide.price}/person · {guide.duration} hours
          </p>
          <GuideButton href={guide.id} />
        </div>
      )}
    </div>
  )
}

function ExpandedGuideCard({
  guide,
  hideHighlights,
}: {
  guide: GuideProps
  hideHighlights?: boolean
}) {
  return (
    <div className="h-fit w-fit rounded-lg m-4 p-5 border border-neutral-300 flex ">
      {/* Avatar Profile */}
      <div className=" max-h-60 w-40 relative rounded-lg bg-neutral-400 shrink-0 overflow-clip ">
        <Image
          alt="Guide Profile Picture"
          className="object-cover"
          src={guide.avatar}
          fill
        />
      </div>
      {/* Guide Profile */}
      <div className="ml-4 max-w-xl  pr-4  ">
        {/* Name */}
        <h1 className="font-medium text-xl">{guide.name}</h1>
        {/* Employment */}
        <p className="text-md text-neutral-400">{guide.employment}</p>
        <Reviews rating={guide.rating} reviewCount={guide.reviews} />
        {/* Language */}
        <TextLeftIcon alt="globe-alt" icon="/assets/icons/globe-alt.svg">
          Speaks {guide.languages.join(", ")}
        </TextLeftIcon>
        {/* Bio */}
        <p className="mt-4 font-light">{guide.bio}</p>
        {/* Interests */}
        <GuideInterests interests={guide.interests} />
      </div>
      {/* Guide Highlights */}
      {!hideHighlights && (
        <div className="flex flex-col border-l pl-8">
          <GuideHighlights highlights={guide.highlights} />
          <p className="mt-6 mb-2 md:text-base text-sm">
            ${guide.price}/person · {guide.duration} hours
          </p>
          <GuideButton href={guide.id} />
        </div>
      )}
    </div>
  )
}

function SmallGuideCard({
  guide,
  hideHighlights,
}: {
  guide: GuideProps
  hideHighlights?: boolean
}) {
  const [expandCard, setExpandCard] = useState(true)
  return (
    <div className="h-fit rounded-lg m-4 sm:p-5 p-3 border border-neutral-300 flex-col relative">
      {/* Expand/Collapse Button */}
      <button
        className=" underline cursor-pointer float-right text-neutral-400 font-light text-sm"
        onClick={() => setExpandCard(!expandCard)}
      >
        {expandCard ? "Collapse" : "Expand"}
      </button>
      {/* Guide Profile */}
      <div className=" max-w-xl ">
        <div className="flex gap-2">
          {/* Avatar Profile */}
          <div className=" h-16 w-16 relative rounded-full bg-neutral-400 shrink-0 overflow-clip">
            <Image
              alt="Guide Profile Picture"
              className="object-cover"
              src={guide.avatar}
              fill
            />
          </div>

          {/* Guide Info */}
          <div className="shrink-0">
            {/* Name */}
            <h1 className="font-medium text-base">Kamari Ababuo</h1>
            {/* Employment */}
            <p className="text-sm text-neutral-400">Soccer Coach</p>
            <Reviews rating={guide.rating} reviewCount={guide.reviews} />
          </div>
        </div>
        {/* Language */}
        <TextLeftIcon alt="globe-alt" icon="/assets/icons/globe-alt.svg">
          Speaks English, Afrikaans, Swahiili
        </TextLeftIcon>
        {/* Bio */}
        <p className="mt-4 font-light md:text-base text-sm">
          Lorem ipsum dolor sit amet consectetur. Volutpat lacus fermentum
          mattis arcu. Et mi sapien quisque lorem. Etiam sit tellus lorem augue
          elementum. Gravida adipiscing tellus mattis gravida sed elementum
          turpis euismod enim. Nunc pharetra et viverra sed posuere massa
          viverra.
        </p>
        {/* Interests */}
        {expandCard && (
          <>
            {/* Guide Highlights */}
            <GuideInterests interests={guide.interests} />
            {!hideHighlights && (
              <GuideHighlights highlights={guide.highlights} />
            )}
          </>
        )}
      </div>
      <p className="mt-6 mb-2 md:text-base text-sm">
        ${guide.price}/person · {guide.duration} hours
      </p>
      <GuideButton href={guide.id} />
    </div>
  )
}
