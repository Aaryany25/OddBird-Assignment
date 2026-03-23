import { RiArrowRightLine } from "react-icons/ri";
type Content={
    text:string,
    className?:string
}
export default function Button({text,className=""}:Content){
return(
    <button className={`group flex items-center  bg-[#D9D9D7] text-black rounded-lg ${className}`}>
        {text}
        <RiArrowRightLine className="text-xl transition group-hover:translate-x-2 hidden group-hover:block" />
       
        </button>
)
}