"use client"
import Button from "../Button";
import WorkCards from "../WorkCard";

const Workss = [
  {
    id: 1,
    src: [
      "https://images.unsplash.com/photo-1580169188512-147b97dfa87b?q=80&w=687",
      "https://images.unsplash.com/photo-1773496396127-7177f0f740c6?w=600",
      "https://images.unsplash.com/photo-1774035035189-32043bae4c88?w=600",
    ],
    title: "Stripe",
    desc: "How we added objective value in less than a sentence but two lines."
  },
  {
    id: 2,
    src: [
      "https://images.unsplash.com/photo-1773496396127-7177f0f740c6?w=600",
      "https://images.unsplash.com/photo-1580169188512-147b97dfa87b?q=80&w=687",
      "https://images.unsplash.com/photo-1774035035189-32043bae4c88?w=600",
    ],
    title: "The Light Phone",
    desc: "How we added objective value in less than a sentence but two lines."
  },
  {
    id: 3,
    src: [
      "https://images.unsplash.com/photo-1774035035189-32043bae4c88?w=600",
      "https://images.unsplash.com/photo-1773496396127-7177f0f740c6?w=600",
      "https://images.unsplash.com/photo-1580169188512-147b97dfa87b?q=80&w=687",
    ],
    title: "Hinge",
    desc: "How we added objective value in less than a sentence but two lines."
  },
]

export default function Works() {
  return (
    <div className="w-full text-white font-sans bg-[#131316]">
      <h1 className="text-xl sm:text-2xl px-5 sm:px-8 md:px-10 py-5">
        Selected Work
      </h1>

      <div className="px-5 sm:px-8 md:px-10 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {Workss.map(work => (
          <WorkCards key={work.id} src={work.src} title={work.title} desc={work.desc} />
        ))}
        {Workss.map(work => (
          <WorkCards key={`dup-${work.id}`} src={work.src} title={work.title} desc={work.desc} />
        ))}
      </div>

      <div className="text-center py-8 sm:py-10 flex items-center justify-center">
        <Button text="View All Work" className="text-center px-4 sm:px-5 py-2 mt-5 bg-black text-white text-sm sm:text-base" />
      </div>
    </div>
  )
}