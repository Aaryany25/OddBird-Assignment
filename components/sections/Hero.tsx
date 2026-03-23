"use client"
import { useState } from "react";
import Button from "../Button";
import ImagesDiv from "../ImagesDiv";
import HeroRight from "../HeroRight";

const heroImages: Record<number, string> = {
  1: "https://images.unsplash.com/photo-1604300026918-ee5328fd6054?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  2: "https://images.unsplash.com/photo-1748335356269-a95253e93ea3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
  3: "https://images.unsplash.com/photo-1574364990668-45419652dd4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
}

export default function Hero() {
  const [hoveredId, setHoveredId] = useState<number>(1);

  return (
    <div className="flex flex-col md:flex-row w-full font-sans dark:bg-black border-b-2">

      {/* Left */}
      <div className="left bg-[#E2E2E0] w-full md:w-1/2 flex border-b-2 md:border-b-0 md:border-r-2 md:rounded-br-xl">
        <div className="w-full flex flex-col justify-between px-5 sm:px-8 md:px-10 py-8 md:py-10">
          <div>
            <h1 className="text-xl sm:text-2xl w-2/3 sm:w-1/2 md:w-1/3">
              We Specialized in Three Things
            </h1>
            <Button text="View All Capabilities" className="px-3 py-1 mt-5" />
          </div>

          <div className="flex justify-end mt-8 md:mt-0">
            <div className="transition-opacity duration-500">
              <ImagesDiv
                src={heroImages[hoveredId]}
                width={450}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="right bg-[#E2E2E0] w-full md:w-1/2 md:rounded-bl-xl overflow-hidden">
        <HeroRight onHover={setHoveredId} />
      </div>

    </div>
  );
}