import Button from "../Button";
import ImagesDiv from "../ImagesDiv";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <div className="flex  w-full h-screen  font-sans dark:bg-black border-b-2">
      <div className="left bg-[#E2E2E0] w-1/2 rounded-br-xl flex border-r-2 ">
      <div className="  w-full flex flex-col justify-between px-10 py-10" >
        <div>

        <h1 className="text-2xl  w-1/3" >We Speacilaed in Three things</h1>
        <Button text="View All Capablities" className="px-3 py-1 mt-2" />
        </div>
        
        <div className="ml-49">

      <ImagesDiv src="https://images.unsplash.com/photo-1773332585749-5146862ba746?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={450} height={300}/>
        </div>
      </div>
      </div>
      <div className="right bg-[#E2E2E0] w-1/2 rounded-bl-xl overflow-hidden ">
<HeroRight/>
      </div>
    </div>
  );
}
