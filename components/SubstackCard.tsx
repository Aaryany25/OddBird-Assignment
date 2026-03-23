import { RiArrowRightLine } from "react-icons/ri";

type Substack = {
  title: string,
  date: string,
}

export default function SubstackCard({ title, date }: Substack) {
  return (
    <div className="group px-10 sm:px-10 md:px-24 lg:px-48 p-3 flex justify-between font-thin border-b-2 border-gray-700">
      <div className="flex items-center gap-3 sm:gap-5">
        <RiArrowRightLine className="sm:block sm:text-white text-lg sm:text-xl transition-transform duration-200 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-1 shrink-0" />
        <h2 className="text-sm sm:text-base md:text-lg">{title}</h2>
      </div>
      <h2 className="hidden sm:block text-sm sm:text-base md:text-lg text-gray-400 whitespace-nowrap ml-4">
        {date}
      </h2>
    </div>
  )
}