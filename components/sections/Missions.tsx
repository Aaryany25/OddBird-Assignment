import Button from "../Button";
import ImagesDiv from "../ImagesDiv";
import MissionCards from "../MissionCards";
import HeroRight from "./HeroRight";
const MissionCardss=["We work with what’s plausible to explore the edge of what’s possible. Sometimes we architect & lead product; sometimes we embed with client teams. Day in and day out, we show up, add value, and stay loyal.","We have a zero surprises rule, actively communicating priorities, blockers and spend weekly, like clockwork. We bill in arrears for work done in the previous month. Our contracts have no minimum commitment, so getting started is simple and low risk. Use as much or as little of our time as you need.",
  "No hierarchy, no performative culture, and no dead weight. We share profits, take weekends, and evolve with collective intuition and intent."
]
export default function Missions(){
    return(
      <div className="bg-gray-500">
      <div className="text-white bg-[#131316] text-center border-b-1">
<h1 className="py-30 text-5xl"> Mission</h1>

      </div>
       <div className="flex w-full font-sans  text-white">
             <div className="left bg-[#131316] w-1/2 h-screen flex  rounded-r-xl border-r-2 border-dashed">
             <div className="  w-full flex flex-col justify-between px-12 py-10 text-4xl font-light" >
               <h1>We’re designing infrastructure;<br></br> digital, emotional, and robust.</h1>
               <h1>We price honestly, and work transparently.</h1>
               <h1>We don’t broker the work, we do <br></br>the work.</h1>
               <div className="ml-49">
       
             {/* <ImagesDiv src="https://images.unsplash.com/photo-1773332585749-5146862ba746?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={450} height={300}/> */}
               </div>
             </div>
             </div>
             <div className="right  w-1/2 bg-[#131316] rounded-l-xl overflow-hidden ">
       {/* <HeroRight/> */}
       {
       
        MissionCardss.map(cards=> <MissionCards text={cards}/>)
       }
      

             </div>
           </div>
      </div>
    )
}