type Work = {
  src: string,
  title: string,
  desc: string
}

import ImagesDiv from "./ImagesDiv";

export default function WorkCards({ src, title, desc }: Work) {
  return (
    <div className="text-white p-2 sm:p-3">
      <ImagesDiv
        className="w-full"
        src={src}
        width={500}
        height={400}
      />
      <h1 className="w-fit text-lg sm:text-xl md:text-2xl m-2">
        {title}
      </h1>
      <p className="text-sm sm:text-base text-gray-300 px-2">
        {desc}
      </p>
    </div>
  )
}