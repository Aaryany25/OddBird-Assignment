"use client"
import { RiArrowRightLine } from "react-icons/ri";

type Content={
    index:number,
    title:string,
    desc:string
}
export default function HeroCard({index,title,desc}:Content){
    return(
<div className="w-full bg-[#E2E2E0] py-10 px-5 border-b-2 border-gray-500
">
   
<h3 className="text-xl">{index}</h3>
<div className=" group flex items-center gap-5">
<RiArrowRightLine className="text-xl transition group-hover:translate-x-2 hidden group-hover:block" />
<h1 className="text-4xl font-light my-2">{title}</h1>
</div>
<p className="text-gray-500 text-lg">{desc}</p>
</div>
    )
}