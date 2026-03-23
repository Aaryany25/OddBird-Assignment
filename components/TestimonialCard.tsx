import ImagesDiv from "./ImagesDiv";
type testimonial={
    testy:string,
    company:string
}
export default function TestimonialCard({testy,company}:testimonial){
    return(
        <div className="w-2/3 flex flex-col justify-between px-5 py-5 mb-10">
<h1 className="">{testy}</h1>
              <ImagesDiv className="pt-5" src={company} width={100} height={50}/>

{/* <div>Logo</div> */}
        </div>
    )
}