import Button from "./Button";
type content={
    text:string
}
export default function MissionCards({text}:content){
    return(
        <div className="text-white px-5 ml-15 py-9 ">
            <h1 className="text-xl font-thin w-3/4">{text}</h1>
             <Button text="Read More" className="px-3 py-1 mt-5 bg-black text-white" />
        </div>
    )
}