import Button from "../Button";

export default function Footer() {
  return (
    <div className="bg-[#131316]">
      <div className="text-white px-5 sm:px-8 md:px-10 py-8 sm:py-10 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-start sm:items-center">

        {/* Left links */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Button text="How We Bill"  className="text-center px-2 py-1 bg-[#242426] text-white text-xs" />
          <Button text="How We Work"  className="text-center px-2 py-1 bg-[#242426] text-white text-xs" />
          <Button text="Work For Us"  className="text-center px-2 py-1 bg-[#242426] text-white text-xs" />
        </div>

        {/* Right links */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Button text="Instagram" className="text-center px-2 py-1 bg-[#242426] text-white text-xs" />
          <Button text="X.com"     className="text-center px-2 py-1 bg-[#242426] text-white text-xs" />
          <Button text="Substack"  className="text-center px-2 py-1 bg-[#242426] text-white text-xs" />
        </div>

      </div>
    </div>
  )
}