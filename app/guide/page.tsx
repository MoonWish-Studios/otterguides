import { nanoid } from "nanoid"
import { GUIDES } from "../components/GUIDES"
import { GuideCard, GuideProps } from "../components/GuideCard"

export default function Page({}) {
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="w-10/12 text-center flex justify-center underline-offset-2 underline mb-3">
          We are currently still in beta so hosts you see are just examples of
          what it might look like!
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex-col">
          {GUIDES.map((guide: GuideProps, i: number) => (
            <GuideCard key={nanoid()} guide={guide} hideHighlights={false} />
          ))}
        </div>
      </div>
    </div>
  )
}
