import Button from "../Button";
import ImagesDiv from "../ImagesDiv";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row w-full font-sans dark:bg-black border-b-2">
      
      {/* Left */}
      <div className="left bg-[#E2E2E0] w-full md:w-1/2 rounded-br-none md:rounded-br-xl flex border-b-2 md:border-b-0 md:border-r-2">
        <div className="w-full flex flex-col justify-between px-5 sm:px-8 md:px-10 py-8 md:py-10">
          
          <div>
            <h1 className="text-xl sm:text-2xl w-2/3 sm:w-1/2 md:w-1/3">
              We Specialized in Three Things
            </h1>
            <Button text="View All Capabilities" className="px-3 py-1 mt-5" />
          </div>

          <div className="flex justify-end mt-8 md:mt-0">
            <ImagesDiv
              src="https://images.unsplash.com/photo-1773332585749-5146862ba746?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={450}
              height={300}
            />
          </div>

        </div>
      </div>

      {/* Right */}
      <div className="right bg-[#E2E2E0] w-full md:w-1/2 rounded-bl-none md:rounded-bl-xl overflow-hidden">
        <HeroRight />
      </div>

    </div>
  );
}