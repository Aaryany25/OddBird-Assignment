"use client"
import Button from "../Button";
import ImagesDiv from "../ImagesDiv";
const Projectsdata=[
  "Technical Strategy",
  "Web Design",
  "Product Design",
  "System Architecture",
"Greenfield Innovation",
"Web Apps",
"Native Apps",
"Desktop Apps",
"eCommerce",
"AI / LLMs",
"Staff Augmentation",
"Fractional CTO",
"UI / UX",
"Creative Direction",
"Brand Strategy",
"Graphic Design"
]
export default function Projects(){
    return (
    <div className="flex  w-full h-screen  font-sans dark:bg-black border-b-2">
      <div className="left bg-[#E2E2E0] w-1/4 rounded-br-xl flex border-r-2 ">
            <div className="  w-full flex flex-col justify-between px-10 py-10" >
              <div>
      
              <h1 className="text-3xl  " >We Deliver so<br/> much More</h1>
              <Button text="View All Capablities" className="px-3 py-1 mt-5" />
              </div>
              
              <div className="ml-49">
      
              </div>
            </div>
            </div>
      <div className="right bg-[#E2E2E0] w-3/4 rounded-bl-xl overflow-hidden] flex">
      <div className="px-5   w-1/2 pt-5">
      {Projectsdata.map(data=>(

<h1 className="text-3xl p-1 ">{data}</h1>
      )

      )}
      </div>
      <div>
              <ImagesDiv className="pt-5" src="https://images.unsplash.com/photo-1580169188512-147b97dfa87b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={250} height={250}/>
        
        {/* <ImagesDiv/> */}
      </div>
      </div>
    </div>
  );
}