"use client"

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
<h1 className="text-4xl font-light my-2">{title}</h1>
<p className="text-gray-500 text-lg">{desc}</p>
</div>
    )
}