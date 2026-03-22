type Content={
    text:string,
    className?:string
}
export default function Button({text,className=""}:Content){
return(
    <button className={`bg-[#D9D9D7] text-black rounded-lg ${className}`}>{text}</button>
)
}