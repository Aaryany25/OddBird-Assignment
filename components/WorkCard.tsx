"use client"
import { useState, useEffect, useRef } from "react";
import ImagesDiv from "./ImagesDiv";

type Work = {
  src: string | string[],
  title: string,
  desc: string,
  sizes?:number
}

export default function WorkCards({ src, title, desc ,sizes}: Work) {
  const images = Array.isArray(src) ? src : [src];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovered && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
      }, 800);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setCurrentIndex(0);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, images.length]);

  return (
    <div
      className="text-white p-2 sm:p-3 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative w-full overflow-hidden">
        <ImagesDiv
          className="w-full transition-opacity duration-300"
          src={images[currentIndex]}
          width={500}
          height={400}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-white scale-125" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <h1 className="text-lg sm:text-xl md:text-2xl m-2">{title}</h1>
      <p className="text-sm sm:text-base text-gray-300 px-2">{desc}</p>
    </div>
  )
}