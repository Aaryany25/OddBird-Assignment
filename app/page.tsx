"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Missions from "@/components/sections/Missions";
import Projects from "@/components/sections/Projects";
import SubStack from "@/components/sections/SubStack";
import Testimonial from "@/components/sections/Testimonial";
import Works from "@/components/sections/Work";

export default function Home() {
  return (
    <div className=" bg-black font-sans overflow-x-hidden">
      {/* hello world my first next app */}
      
      <MaxWidthWrapper>
      <Hero/>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
      <Projects/>

      </MaxWidthWrapper>
      <MaxWidthWrapper>
      <Works/>

      </MaxWidthWrapper>
      <MaxWidthWrapper>

      <Missions/>
      </MaxWidthWrapper>
      <MaxWidthWrapper>

      <Testimonial/>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
      <SubStack/>

      </MaxWidthWrapper>
      <MaxWidthWrapper>
      <Footer/>

      </MaxWidthWrapper>

    </div>
  );
}
