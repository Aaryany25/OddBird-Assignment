"use client"
import { RiArrowRightLine } from "react-icons/ri";

type Content = {
  index: number,
  title: string,
  desc: string,
  onHover: () => void
}

export default function HeroCard({ index, title, desc, onHover }: Content) {
  return (
    <div
      className="w-full bg-[#E2E2E0] py-6 px-4 sm:py-8 sm:px-5 md:py-10 border-b-2 border-gray-500 cursor-pointer"
      onMouseEnter={onHover}
    >
      <h3 className="text-base sm:text-lg md:text-xl">{index}</h3>

      <div className="group flex items-center gap-3 sm:gap-5">
        <RiArrowRightLine className="text-lg sm:text-xl transition-transform duration-200 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 shrink-0" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-light my-1 sm:my-2 group-hover:translate-x-1 transition-transform duration-200">
          {title}
        </h1>
      </div>

      <p className="text-gray-500 text-sm sm:text-base md:text-lg mt-1">{desc}</p>
    </div>
  )
}