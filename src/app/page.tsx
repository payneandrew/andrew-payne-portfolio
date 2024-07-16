"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import IntroSection from "./components/intro-section";
import SkillsCard from "./components/skills-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-6 bg-home-gradient">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-4xl md:text-6xl font-bold text-gray-900">
          <Typewriter
            options={{
              strings: ["Frontend Software Engineer, Gardening Aficionado"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
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
        <IntroSection />
        <div className="flex rounded bg-white border">
          <SkillsCard {...designerData} />
          <SkillsCard {...frontendDeveloperData} />
          <SkillsCard {...mentorData} />
        </div>
      </div>
    </main>
  );
}

const designerData = {
  title: "Designer",
  description:
    "I value simple content structure, clean design patterns, and thoughtful interactions.",
  items: ["UX", "UI", "Web", "Apps", "Logos"],
  tools: ["Affinity Designer", "Figma", "Pen & Paper", "Sketch"],
};

const frontendDeveloperData = {
  title: "Frontend Developer",
  description:
    "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
  items: ["HTML", "Pug", "Slim", "CSS", "Sass", "Git"],
  tools: [
    "Astro JS",
    "Bitbucket",
    "Bootstrap",
    "Bulma",
    "Codekit",
    "Github",
    "Netlify",
    "Tailwind CSS",
    "VS Code",
  ],
};

const mentorData = {
  title: "Mentor",
  description:
    "I genuinely care about people, and enjoy helping them work on their craft.",
  items: ["UX/UI", "Product design", "Freelancing"],
  tools: [
    "9+ years experience",
    "30+ short courses",
    "65+ bootcamps",
    "250+ students",
    "2,500+ mentor sessions",
    "60+ group critiques",
    "18,000+ bits of feedback",
  ],
};
