"use client"

import Hero from "@/components/sections/Hero";
import Missions from "@/components/sections/Missions";
import Projects from "@/components/sections/Projects";
import Works from "@/components/sections/Work";

export default function Home() {
  return (
    <div className=" bg-black font-sans ">
      {/* hello world my first next app */}
      <Hero/>
      <Projects/>
      <Works/>
      <Missions/>
    </div>
  );
}
