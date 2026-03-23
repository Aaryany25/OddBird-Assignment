"use client"

import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Missions from "@/components/sections/Missions";
import Projects from "@/components/sections/Projects";
import SubStack from "@/components/sections/SubStack";
import Testimonial from "@/components/sections/Testimonial";
import Works from "@/components/sections/Work";

export default function Home() {
  return (
    <div className=" bg-black font-sans ">
      {/* hello world my first next app */}
      <Hero/>
      <Projects/>
      <Works/>
      <Missions/>
      <Testimonial/>
      <SubStack/>
      <Footer/>
    </div>
  );
}
