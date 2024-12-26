import Header from "./header";
import ToDo from "./todo";
import Image from "next/image";

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
        <div className="mt-3">
          <ToDo />
        </div>
      </main>
    </>
  );
}
