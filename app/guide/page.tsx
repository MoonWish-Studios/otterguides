import { nanoid } from "nanoid"
import { GUIDES } from "../components/GUIDES"
import { GuideCard, GuideProps } from "../components/GuideCard"

export default function Page({}) {
  return (
    <div className="flex justify-center">
      <div className="flex-col">
        {GUIDES.map((guide: GuideProps, i: number) => (
          <GuideCard key={nanoid()} guide={guide} hideHighlights={false} />
        ))}
      </div>
    </div>
  )
}
