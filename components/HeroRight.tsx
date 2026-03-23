"use client"
import HeroCard from "./HeroCard";

const data = [
  {
    id: 1,
    title: "Product Design and MVPs",
    desc: "Full Stack, Native Apps, Staff Augmentation",
    image: "https://images.unsplash.com/photo-1580169188512-147b97dfa87b?q=80&w=687"
  },
  {
    id: 2,
    title: "Greenfield Innovation",
    desc: "Full Stack, Native Apps, Staff Augmentation",
    image: "https://images.unsplash.com/photo-1773496396127-7177f0f740c6?w=600"
  },
  {
    id: 3,
    title: "Sophisticated Websites",
    desc: "Full Stack, Native Apps, Staff Augmentation",
    image: "https://images.unsplash.com/photo-1774035035189-32043bae4c88?w=600"
  }
]

type HeroRightProps = {
  onHover: (id: number) => void
}

export default function HeroRight({ onHover }: HeroRightProps) {
  return (
    <div className="w-full h-full flex flex-col justify-between py-6 sm:py-8 md:py-10 px-0">
      {data.map(card => (
        <HeroCard
          key={card.id}
          index={card.id}
          title={card.title}
          desc={card.desc}
          onHover={() => onHover(card.id)}
        />
      ))}
    </div>
  )
}