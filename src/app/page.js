'use client';

import Header from "./header";
import dynamic from "next/dynamic";

const ToDoNoSSR = dynamic(
  () => import('./todo'),
  { ssr: false }
)

const GraphicDesignNoSSR = dynamic (
  () => import('./graphicdesign'),
  { ssr: false }
)

const RandomImageNoSSR = dynamic (
  () => import('./randomimage'),
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
          <RandomImageNoSSR />
          <GraphicDesignNoSSR />
        </section>
        <div className="mt-3 w-full">
          <ToDoNoSSR />
        </div>
      </main>
    </>
  );
}
