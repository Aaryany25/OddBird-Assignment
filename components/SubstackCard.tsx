import { RiArrowRightLine } from "react-icons/ri";

type Substack={
title:string,
date:string,
}
export default function SubstackCard({title,date}:Substack){
    return(
        <div className="group mx-50 p-3 flex justify-between font-thin border-b-2">
            <div className="flex item-center gap-5">

            <RiArrowRightLine className="text-xl transition group-hover:translate-x-2 hidden group-hover:block" />
            <h2>{title}</h2>
            </div>
            <h2>{date}</h2>
        </div>
    )
}