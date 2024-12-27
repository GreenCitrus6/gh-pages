'use client';

import Header from "./header";
import Image from "next/image";
import dynamic from "next/dynamic";

import frog from "../../public/e44.webp";
import cat from "../../public/936.jpg";


// import ToDo from "./todo";

const ToDoNoSSR = dynamic(
  () => import('./todo'),
  { ssr: false }
)

function pickImage() {
  let rand = Math.random();

  if (rand <= 0.5) {
    return cat;
  } else {
    return frog;
  }
}


export default function Home() {
  const basePath = "/gh-pages";

  let graphicDesignPath = pickImage();

  return (
    <>
      <Header />


      <main className="flex flex-row justify-start">
        <section id="imgContainer"
          className="mr-6">
          <Image
            src={`${basePath}/carl.gif`}
            width={327}
            height={498}
            alt="carl"
            priority={false}
          />
          <Image 
            src={graphicDesignPath}
            alt="graphic design is my passion"
          />
        </section>
        <div className="mt-3 w-full">
          <ToDoNoSSR />
        </div>
      </main>
    </>
  );
}
