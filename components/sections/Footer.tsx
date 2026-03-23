import Button from "../Button";

// const footercontent=
export default function Footer(){
    return(
        <div className="">

        <div className=" text-white p-10 flex justify-between ">
            <div className="flex gap-3">
                <Button text="How We Bill" className=" text-center px-2 py-1 mt-5 bg-[#242426] text-black text-xs"/>
                <Button text="How we Work" className=" text-center px-2 py-1 mt-5 bg-[#242426] text-black text-xs"/>
                <Button text="Work for us" className=" text-center px-2 py-1 mt-5 bg-[#242426] text-black text-xs"/>
            </div>
            <div className="flex gap-3">
                <Button text="instagram" className=" text-center px-2 py-1 mt-5 bg-[#242426] text-black text-xs"/>
                <Button text="X.com" className=" text-center px-2 py-1 mt-5 bg-[#242426] text-black text-xs"/>
                <Button text="Substack" className=" text-center px-2 py-1 mt-5 bg-[#242426] text-black text-xs"/>
            </div>
        </div>
        </div>
    )
}