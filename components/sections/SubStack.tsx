import Button from "../Button";
import SubstackCard from "../SubstackCard";
const substackCards =[{
    title:"Oh, to be known by my computer",
    date:"Read"
},
{
    title:"Expansive Brands",
    date:"August 12 2025"
},
{
    title:"We’re not a traditional agency",
    date:"September 9, 2024"
},
{
    title:"Managing is a maker’s skill",
    date:"June 6, 2024"
},
{
    title:"In defense of story points",
    date:"July 27, 2024"
},
{
    title:"We ship better work for less",
    date:"September 1, 2024"
},
]
export default function SubStack(){
    return(
        <div className="h-screen text-white ">
            <div className="text-white  text-center ">
<h1 className="py-30 text-5xl">We’re open-sourcing our<br>
</br> entire business model.</h1>

      </div>
      {
        substackCards.map(card=><SubstackCard title={card.title} date={card.date}/>)
      }
      
     <div className="text-center py-10 flex items-center justify-center">
     
           <Button text="View All on Substack" className=" bg-gray-900 text-center px-3 py-2 mt-5 bg-black text-white"/>
           </div>

        </div>

    )
}