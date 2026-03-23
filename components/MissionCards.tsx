import Button from "./Button";

type Content = {
  text: string
}

export default function MissionCards({ text }: Content) {
  return (
    <div className="text-white px-4 sm:px-5 ml-0 sm:ml-8 md:ml-15 py-4 sm:py-6">
      <h1 className="text-base sm:text-lg font-thin w-full sm:w-4/5 md:w-3/4">
        {text}
      </h1>
      <Button
        text="Read More"
        className="px-3 py-1 mt-4 sm:mt-5 bg-black text-white"
      />
    </div>
  )
}