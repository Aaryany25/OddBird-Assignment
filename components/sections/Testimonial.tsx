import TestimonialCard from "../TestimonialCard";

const Testimonialss = [
  {
    Testimonial: "The strategy was very clear from the work it's self and didn't need an explanation.",
    company: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYIAAACCCAMAAAB8Uz8PAAAA+VBMVEX////..."
  },
  {
    Testimonial: "We've absolutely loved working with you all as well and are extremely touched you all were so inspired by our drinks a couple weeks ago.",
    company: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAACmCAMAAAC8yPlOAAAAe1BMVEX..."
  },
  {
    Testimonial: "We've been having a lot of conversations internally lately about how much we appreciate your all's creativity, diligence, responsiveness, and patience.",
    company: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAe1BMVEX..."
  },
]

export default function Testimonial() {
  return (
    <div className="bg-black text-white px-5 sm:px-8 md:px-10 py-8 md:py-10 mb-6 md:mb-10 border-b border-white">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 md:gap-5">
        {Testimonialss.map((card, i) => (
          <TestimonialCard key={i} testy={card.Testimonial} company={card.company} />
        ))}
      </div>
    </div>
  )
}