import Button from "../Button";

// const footercontent=
export default function Footer(){
    return(
        <div className="text-white p-10 flex justify-between">
            <div>
                <Button text="How We Bill" className=" text-center px-3 py-2 mt-5 bg-[#242426] text-white"/>
                <Button text="How we Work" className=" text-center px-3 py-2 mt-5 bg-black text-white"/>
                <Button text="Work for us" className=" text-center px-3 py-2 mt-5 bg-black text-white"/>
            </div>
            <div>
                <Button text="instagram" className=" text-center px-3 py-2 mt-5 bg-gray-700 text-white"/>
                <Button text="X.com" className=" text-center px-3 py-2 mt-5 bg-black text-white"/>
                <Button text="Substack" className=" text-center px-3 py-2 mt-5 bg-black text-white"/>
            </div>
        </div>
    )
}