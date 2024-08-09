import { Metadata } from "next";
import Image from "next/image";
import SkillsCard, { SkillsCardProps } from "./components/skills-card";
import TypeWriter from "./components/typewriter";

export const metadata: Metadata = {
  title: "Home | Andrew Payne",
  description: "Andrew Payne's Personal Website",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-6 bg-home-gradient">
      <div className="flex flex-col items-center justify-center text-center gap-12">
        <div>
          <TypeWriter />
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            I ideate and code beautifully simple things, and I love what I do.
          </p>
        </div>
        <div className="mt-6">
          <Image
            src={"/andrew-memoji.png"}
            alt="andrew-payne-headshot"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl bg-white">
          <SkillsCard {...frontendDeveloperData} />
          <SkillsCard {...backendDeveloperData} />
          <SkillsCard {...testingData} />
        </div>
      </div>
    </main>
  );
}

const frontendDeveloperData: SkillsCardProps = {
  title: "Frontend Development",
  description:
    "I like to code things from scratch, and enjoy bringing ideas to life in the browser and on mobile.",
  list1: ["TypeScript", "JavaScript", "CSS", "HTML", "Swift", "Kotlin"],
  list2: [
    "React",
    "NextJS",
    "VueJS",
    "Tailwind CSS",
    "Angular",
    "React Native",
    "Expo",
    "SwiftUI",
  ],
  header1: "Languages I speak:",
  header2: "Frameworks and Libraries:",
  iconPath: "/skills/frontend-development.png",
};

const backendDeveloperData: SkillsCardProps = {
  title: "Backend Development",
  description:
    "I am capable of building server-side applications and APIs that power modern web and mobile applications.",
  list1: ["TypeScript", "JavaScript", "Java", "Python"],
  list2: ["Express", "NodeJS", "AWS Lambda", "Spring Boot"],
  header1: "Languages I speak:",
  header2: "Frameworks and Libraries:",
  iconPath: "/skills/backend-development.png",
};

const testingData: SkillsCardProps = {
  title: "Testing and Tooling",
  description:
    "I'm an advocate for building high-quality applications with a strong background in software testing.",
  list1: [
    "Docker",
    "Azure",
    "Github Actions",
    "Jenkins",
    "Github",
    "Bitbucket",
    "VS Code",
  ],
  list2: [
    "Jest",
    "React Testing Library",
    "Cypress E2E Tests",
    "Cypress Component Tests",
    "Playwright",
    "iOS XCUITest",
    "Android Espresso",
    "Appium",
  ],
  header1: "Dev Tools:",
  header2: "Frameworks and Libraries:",
  iconPath: "/skills/testing.png",
};
