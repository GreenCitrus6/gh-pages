import Header from "./header";
import Image from "next/image";

export default function Home() {
  const basePath = "/gh-pages";

  return (
    <>
      <Header />
      <Image
        src={`${basePath}/carl.gif`}
        width={327}
        height={498}
        alt="carl"
      />
    </>
  );
}
