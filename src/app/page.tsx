"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import SkillsCard from "./components/skills-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-6 bg-home-gradient">
      <div className="flex flex-col items-center justify-center text-center gap-12">
        <div>
          <div className="text-4xl md:text-6xl font-bold text-gray-900 h-36">
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
        </div>
        <div className="mt-6">
          <Image
            className=""
            src={"/andrew-memoji.png"}
            alt="andrew-payne-headshot"
            width={500}
            height={500}
          />
        </div>
        {/* <IntroSection /> */}
        <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl bg-white">
          <SkillsCard {...frontendDeveloperData} />
          <SkillsCard {...backendDeveloperData} />
          <SkillsCard {...testingData} />
        </div>
      </div>
    </main>
  );
}

const frontendDeveloperData = {
  title: "Frontend Development",
  description:
    "I like to code things from scratch, and enjoy bringing ideas to life in the browser and on mobile.",
  items: ["TypeScript", "JavaScript", "CSS", "HTML", "Swift", "Kotlin"],
  tools: [
    "React",
    "React Native",
    "Expo",
    "NextJS",
    "VueJS",
    "Angular",
    "Bitbucket",
    "Github",
    "Tailwind CSS",
    "VS Code",
  ],
  header1: "Languages I speak:",
  header2: "Dev Tools:",
  iconPath: "/skills/frontend-development.png",
};

const backendDeveloperData = {
  title: "Backend Development",
  description:
    "I focus on building robust server-side applications and APIs that power modern web and mobile applications. I enjoy optimizing backend code for performance, scalability, and reliability.",
  items: ["TypeScript", "JavaScript", "Java", "Python"],
  tools: ["NodeJS", "AWS Lambda", "Spring Boot"],
  header1: "Languages I speak:",
  header2: "Dev Tools:",
  iconPath: "/skills/backend-development.png",
};

const testingData = {
  title: "Testing",
  description:
    "I am passionate about ensuring the quality and reliability of software through rigorous testing methodologies. I specialize in writing automated tests for frontend and backend applications to deliver high-quality software.",
  items: ["TypeScript", "JavaScript"],
  tools: [
    "Jest",
    "React Testing Library",
    "Cypress E2E Tests",
    "Cypress Component Tests",
    "Playwright",
    "iOS XCUITest",
    "Android Espresso",
    "Appium",
  ],
  header1: "Languages I speak:",
  header2: "Testing Tools:",
  iconPath: "/skills/testing.png",
};

// const frontendDeveloperData = {
//   title: "Frontend Developer",
//   description:
//     "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
//   items: ["HTML", "Pug", "Slim", "CSS", "Sass", "Git"],
//   tools: [
//     "Astro JS",
//     "Bitbucket",
//     "Bootstrap",
//     "Bulma",
//     "Codekit",
//     "Github",
//     "Netlify",
//     "Tailwind CSS",
//     "VS Code",
//   ],
// };

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
