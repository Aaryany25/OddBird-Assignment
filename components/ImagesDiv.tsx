"use client"
import Image from "next/image"
type ImageProps={
    src:string;
    width:number;
height: number;
  alt?: string;
    className?: string;

}
export default function ImagesDiv({src,width,height,alt="image",className}:ImageProps){
    return(
        <Image 
        className={className}
        src={src}
         width={width}
      height={height}
      alt={alt}
      ></Image>
    )
}