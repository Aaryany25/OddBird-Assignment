import Button from "../Button";
import ImagesDiv from "../ImagesDiv";
import MissionCards from "../MissionCards";

const MissionCardss = [
  "We work with what's plausible to explore the edge of what's possible. Sometimes we architect & lead product; sometimes we embed with client teams. Day in and day out, we show up, add value, and stay loyal.",
  "We have a zero surprises rule, actively communicating priorities, blockers and spend weekly, like clockwork. We bill in arrears for work done in the previous month. Our contracts have no minimum commitment, so getting started is simple and low risk. Use as much or as little of our time as you need.",
  "No hierarchy, no performative culture, and no dead weight. We share profits, take weekends, and evolve with collective intuition and intent."
]

export default function Missions() {
  return (
    <div className="bg-[#131316]">

      {/* Mission Header */}
      <div className="text-white text-center border-b border-gray-700">
        <h1 className="py-16 sm:py-20 md:py-30 text-3xl sm:text-4xl md:text-5xl">
          Mission
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row w-full font-sans text-white">

        {/* Left */}
        <div className="left bg-[#131316] w-full md:w-1/2 flex md:rounded-r-xl border-b-2 md:border-b-0 md:border-r-2 border-dashed">
          <div className="w-full flex flex-col justify-around px-6 sm:px-10 md:px-12 py-10 gap-8 md:gap-0 md:h-screen">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light">
              We're designing infrastructure;<br /> digital, emotional, and robust.
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light">
              We price honestly, and work transparently.
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light">
              We don't broker the work, we do <br />the work.
            </h1>
          </div>
        </div>

        {/* Right */}
        <div className="right w-full md:w-1/2 bg-[#131316] md:rounded-l-xl overflow-hidden py-6 md:py-0">
          {MissionCardss.map((cards, i) => (
            <MissionCards key={i} text={cards} />
          ))}
        </div>

      </div>
    </div>
  )
}