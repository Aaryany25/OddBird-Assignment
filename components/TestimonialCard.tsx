import ImagesDiv from "./ImagesDiv";

type Testimonial = {
  testy: string,
  company: string
}

export default function TestimonialCard({ testy, company }: Testimonial) {
  return (
    <div className="w-full sm:w-1/3 flex flex-col justify-between px-4 sm:px-5 py-4 sm:py-5 border-t border-gray-600 sm:border-t-0 sm:border-l first:border-t-0 first:border-l-0">
      <h1 className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
        {testy}
      </h1>
      <ImagesDiv
        className="mt-4 sm:mt-0 pt-4 sm:pt-5"
        src={company}
        width={100}
        height={50}
      />
    </div>
  )
}