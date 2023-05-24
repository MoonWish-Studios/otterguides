import { nanoid } from "nanoid"
import Link from "next/link"

function Hightlight({ children }: { children: React.ReactNode }) {
  return (
    <li className="mb-3 ml-2 md:mb-4 relative md:ml-6">
      <span className="absolute flex items-center justify-center w-2.5 h-2.5 -left-3.5 top-1 md:w-6 md:h-6 md:-left-[37px] md:top-0 ">
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
      <h3 className="flex items-center mb-1 pl-1 text-sm font-regular md:text-base text-neutral-500">
        {children}
      </h3>
    </li>
  )
}
export default function GuideHighlights({
  highlights,
}: {
  highlights: string[]
}) {
  return (
    <div className="w-60 shrink-0 md:mt-0 mt-4 ">
      <h3 className="font-medium text-sm md:text-base text-neutral-700 ">
        Guide Highlights
      </h3>
      <ol className="relative border-l border-cyan-200 ml-2 mt-2">
        {highlights.map((highlight) => (
          <Hightlight key={nanoid()}>{highlight}</Hightlight>
        ))}
      </ol>
    </div>
  )
}
export function GuideButton({ href }: { href: string | number }) {
  return (
    <div className="flex flex-col justify-end ">
      <p className="mt-6 mb-2 md:text-base text-sm">$35/person · 6 hours</p>
      <Link
        href={`/guide/${href}`}
        className="flex-none text-center rounded-xl bg-cyan-300 md:max-w-xl px-6 py-2.5 text-sm md:text-base"
      >
        View Guide
      </Link>
    </div>
  )
}
