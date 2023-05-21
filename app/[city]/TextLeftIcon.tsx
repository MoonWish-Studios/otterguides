import Image from "next/image"
export default function TextLeftIcon({
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
    <div className="md:text-base text-sm flex gap-x-1 justify-start items-center my-1 text-neutral-500">
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
