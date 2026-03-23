"use client"
import Button from "../Button";
import ImagesDiv from "../ImagesDiv";
import { RiArrowRightLine } from "react-icons/ri";

const Projectsdata = [
  "Technical Strategy",
  "Web Design",
  "Product Design",
  "System Architecture",
  "Greenfield Innovation",
  "Web Apps",
  "Native Apps",
  "Desktop Apps",
  "eCommerce",
  "AI / LLMs",
  "Staff Augmentation",
  "Fractional CTO",
  "UI / UX",
  "Creative Direction",
  "Brand Strategy",
  "Graphic Design"
]

export default function Projects() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen font-sans dark:bg-black border-b-2">

      {/* Left */}
      <div className="left bg-[#E2E2E0] w-full md:w-1/4 flex  md:border-b-0 md:border-r-2 md:rounded-br-xl">
        <div className="w-full flex flex-col justify-between px-5 sm:px-8 md:px-10 py-8 md:py-10">
          <div>
            <h1 className="text-2xl sm:text-3xl">
              We Deliver so<br /> much More
            </h1>
            <Button text="View All Capabilities" className="px-3 py-1 mt-5" />
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="right bg-[#E2E2E0] w-full md:w-3/4 md:rounded-bl-xl overflow-hidden flex flex-col sm:flex-row">

        {/* Projects List */}
        <div className="px-4 sm:px-5 pt-5 pb-5 w-full sm:w-1/2">
          {Projectsdata.map((data, i) => (
            <div key={i} className="group flex items-center gap-3 sm:gap-5">
              <RiArrowRightLine className="text-xl sm:text-2xl md:text-3xl transition-transform duration-200 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-1 shrink-0" />
              <h1 className="text-xl sm:text-2xl md:text-3xl p-1 group-hover:translate-x-1 transition-transform duration-200">
                {data}
              </h1>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="flex items-start justify-center sm:justify-start pt-5 px-4 sm:px-0 pb-5 sm:pb-0">
          <ImagesDiv
            className="pt-5"
            src="https://images.unsplash.com/photo-1580169188512-147b97dfa87b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={250}
            height={250}
          />
        </div>

      </div>
    </div>
  );
}