'use client';

import Header from "./header";
import Image from "next/image";
import dynamic from "next/dynamic";

// import ToDo from "./todo";

const ToDoNoSSR = dynamic(
  () => import('./todo'),
  { ssr: false }
)


export default function Home() {
  const basePath = "/gh-pages";

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
        </section>
        <div className="mt-3 w-full">
          <ToDoNoSSR />
        </div>
      </main>
    </>
  );
}
