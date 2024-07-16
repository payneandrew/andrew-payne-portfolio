import Image from "next/image";
import NavBar from "./components/nav-bar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-6 bg-home-gradient">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Frontend Software Engineer, Gardening Aficionado
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            I design and code beautifully simple things, and I love what I do.
          </p>
          <div className="mt-8">
            <Image
              className=""
              src={"/andrew-memoji.png"}
              alt="andrew-payne-headshot"
              width={500}
              height={500}
            />
          </div>
        </div>
      </main>
    </>
  );
}
