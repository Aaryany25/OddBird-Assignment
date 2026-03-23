"use client"
import HeroCard from "../HeroCard";

const data = [{
    id: 1,
    title: "Product Design and MVPs",
    desc: "Full Stack , Native Apps ,Staff Augmentation"
}, {
    id: 2,
    title: "Greenfield Innovation",
    desc: "Full Stack , Native Apps ,Staff Augmentation"
}, {
    id: 3,
    title: "Sophisticated Websites",
    desc: "Full Stack , Native Apps ,Staff Augmentation"
}]

export default function HeroRight() {
    return (
        <div className="w-full h-full flex flex-col justify-between py-6 sm:py-8 md:py-10 px-0">
            {data.map(card => (
                <HeroCard key={card.id} index={card.id} title={card.title} desc={card.desc} />
            ))}
        </div>
    )
}