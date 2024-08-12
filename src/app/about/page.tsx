import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me | Andrew Payne",
  description:
    "Learn more about Andrew Payne's background, skills, and interests.",
};

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-6 bg-home-gradient">
      <div className="flex flex-col w-full gap-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center">About Me</h1>
        <div className="w-full h-1 overflow-hidden relative">
          <div className="border-2 border-daisyPurple-600 rounded absolute top-0 animate-growFromCenter"></div>
        </div>
        <section className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <Image
            src="/andrew-payne-headshot.JPG"
            alt="Andrew Payne"
            width={250}
            height={250}
            className="rounded-full shadow-lg"
            priority={true}
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold">Who Am I?</h2>
            <p className="text-lg text-gray-600">
              I&apos;m Andrew Payne, a software engineer passionate about
              creating impactful digital experiences. With a background in web
              and mobile development, I&apos;ve had the privilege of working on
              a variety of projects, from building iOS apps to architecting
              complex web applications.
            </p>
            <p className="text-lg text-gray-600">
              My journey in software development started with a deep fascination
              for technology and a desire to solve problems creatively. Over the
              years, I&apos;ve honed my skills in front-end and back-end
              development, continuously learning and evolving with the
              ever-changing tech landscape.
            </p>
            <p className="text-lg text-gray-600">
              When I&apos;m not coding, you can find me exploring the great
              outdoors. Checkout{" "}
              <Link
                href="https://www.national-park-explorer.com/"
                className="text-daisyPurple-800 underline"
              >
                National Parks Tracker
              </Link>
              , a web app I built to explore and track the national parks.
              I&apos;m always open to new opportunities and challenges, eager to
              contribute to innovative projects that make a difference.
            </p>
            <p className="text-lg text-gray-600">
              I&apos;m currently based in{" "}
              <span className="font-semibold">[Charlottesville, VA]</span>,
              where I enjoy checking out local restaurants and coffee shops.
              Virginia is where I was born and raised and I continue to call it
              home.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
