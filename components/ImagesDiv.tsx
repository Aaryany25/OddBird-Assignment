"use client"
import Image from "next/image"
type ImageProps={
    src:string;
    width:number;
height: number;
  alt?: string;
    className?: string;

}
export default function ImagesDiv({src,width,height,alt="image"}:ImageProps){
    return(
        <Image
        src={src}
         width={width}
      height={height}
      alt={alt}
      ></Image>
    )
}