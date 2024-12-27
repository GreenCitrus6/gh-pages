'use client';

import Image from "next/image";
import frog from "../../public/e44.webp";
import cat from "../../public/936.jpg";

function pickImage() {
    let rand = Math.random();
  
    if (rand <= 0.5) {
      return cat;
    } else {
      return frog;
    }
  }
  

export default function graphicDesign() {

    let graphicDesignPath = pickImage();

    return (
        <>
            <Image 
            src={graphicDesignPath}
            alt="graphic design is my passion"
          />
        </>
    );
}