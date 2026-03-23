type Work={
    src:string,
    title:string,
    desc:string
}
import ImagesDiv from "./ImagesDiv";

export default function WorkCards({src,title,desc}:Work){
    return(
        <div className="text-white  b p-3 ">
            
            <ImagesDiv className="pt-5" src={src} width={500} height={400} />
                <h1 className="w-fit  text-2xl m-2">{title}</h1>
            <p className="">{desc}</p>
        </div>
    )
}