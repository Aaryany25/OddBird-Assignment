"use client"
import HeroCard from "../HeroCard";

const data=[{
    id:1,
    title:"Product Design and MVPs",
    desc:"Full Stack , Native Apps ,Staff Augmentation"
},{
    id:2,
title:"Greenflied Innovation",
    desc:"Full Stack , Native Apps ,Staff Augmentation"
},{
    id:3,
title:"Sophatiscated Websites",
    desc:"Full Stack , Native Apps ,Staff Augmentation"
}]
export default function HeroRight(){
    return(
        <div className="w-full h-full flex flex-col justify-between py-10 px-5">
{
    data.map(card=><HeroCard key={card.id} index={card.id} title={card.title} desc={card.desc}/>)
}
          

        </div>
    )
};