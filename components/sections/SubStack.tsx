import Button from "../Button";
import SubstackCard from "../SubstackCard";

const substackCards = [
  { title: "Oh, to be known by my computer", date: "Read" },
  { title: "Expansive Brands", date: "August 12, 2025" },
  { title: "We're not a traditional agency", date: "September 9, 2024" },
  { title: "Managing is a maker's skill", date: "June 6, 2024" },
  { title: "In defense of story points", date: "July 27, 2024" },
  { title: "We ship better work for less", date: "September 1, 2024" },
]

export default function SubStack() {
  return (
    <div className="min-h-screen text-white bg-[#131316]">

      {/* Header */}
      <div className="text-center px-5 sm:px-10">
        <h1 className="py-16 sm:py-20 md:py-28 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-snug">
          We're open-sourcing our<br className="hidden sm:block" /> entire business model.
        </h1>
      </div>

      {/* Cards */}
      <div>
        {substackCards.map((card, i) => (
          <SubstackCard key={i} title={card.title} date={card.date} />
        ))}
      </div>

      {/* Button */}
      <div className="text-center py-8 sm:py-10 flex items-center justify-center">
        <Button
          text="View All on Substack"
          className="bg-gray-900 text-center px-4 sm:px-5 py-2 mt-5 text-white text-sm sm:text-base"
        />
      </div>

    </div>
  )
}