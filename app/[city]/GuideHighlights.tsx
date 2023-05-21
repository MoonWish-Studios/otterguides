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
export default function GuideHighlights() {
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

      <GuideButton />
    </div>
  )
}
export function GuideButton() {
  return (
    <div className="flex flex-col justify-end ">
      <p className="mt-6 mb-2 md:text-base text-sm">$35/person · 6 hours</p>
      <button className="flex-none rounded-xl bg-cyan-300 md:max-w-xl px-6 py-2.5 text-sm md:text-base">
        View Guide
      </button>
    </div>
  )
}
