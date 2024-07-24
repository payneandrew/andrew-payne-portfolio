import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  imageUrl?: string;
  githubUrl?: string;
  websiteUrl: string;
}

const professionalProjects: Project[] = [
  {
    title: "Yoomi iOS Mobile App",
    description:
      "Conceptualized and successfully launched the flagship iOS Mobile app, now available on the Apple App Store.",
    websiteUrl: "https://apps.apple.com/us/app/yoomi-health/id6502195415",
    imageUrl: "/yoomi-mobile-app.png",
  },
  {
    title: "Yoomi Web App",
    description:
      "Developed an analytics platform empowering physical therapists with comprehensive graphs and charts to track patient workout progress, subjective feedback, skipped exercises, and overall well-being.",
    imageUrl: "/yoomi-web-app.png",
    websiteUrl: "https://yoomi.health",
  },
  {
    title: "Capital One Flagship Retail Banking Web and Mobile Applications",
    description:
      "Architected user analytics for the Capital One Retail Bank flagship web application.",
    imageUrl: "/capital-one-logo.png",
    websiteUrl: "https://www.capitalone.com/bank",
  },
  {
    title: "Mastercard Fraud Prevention and Cybersecurity Web Application",
    description:
      "Successfully shipped a customer enrollment application with zero bugs found in production.",
    imageUrl: "/mastercard-symbol.svg",
    websiteUrl:
      "https://www.mastercard.us/en-us/business/large-enterprise/safety-security/cybersecurity/cyber-and-riskmanagement.html",
  },
  {
    title: "Electric Vehicle Fleet Management Web Application",
    description:
      "Developed a responsive web app for managing electric vehicles and charging stations using React and NextJS.",
    imageUrl: "/electrify-america-logo.svg",
    websiteUrl: "https://www.electrifyamerica.com/",
  },
  {
    title: "Fox Sports iOS and Android Apps",
    description:
      "Led automation testing for FOX Sports iOS and Android apps, ensuring seamless 2023 NFL Super Bowl streaming to 115M+ viewers.",
    imageUrl: "/fox-sports-logo.svg",
    websiteUrl:
      "https://apps.apple.com/us/app/fox-sports-watch-live/id294056623",
  },
];

const personalProjects: Project[] = [
  {
    title: "National Parks Tracker",
    description:
      "National Parks Tracker is a React and Next.js application that enables users to explore and keep track of their visits to national parks. The application provides information about various national parks, including details about camping facilities.",
    imageUrl: "/national-parks-tracker-screenshot.png",
    githubUrl: "https://github.com/payneandrew/national-park-tracker",
    websiteUrl: "https://www.national-park-explorer.com",
  },
];

export default function WorkPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-6 bg-home-gradient">
      <div className="flex flex-col  w-full gap-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
          My Work
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-center">
          Professional Projects
        </h2>
        {projectGrid(professionalProjects)}
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-center">
          Personal Projects
        </h2>
        {projectGrid(personalProjects)}
      </div>
    </main>
  );
}

const projectGrid = (projects: Project[]) => {
  return (
    <div className="grid md:grid-cols-3 gap-8 ">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden justify-between p-4"
        >
          {project.imageUrl && (
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          )}
          <div className="">
            <h3 className="text-2xl font-bold ">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <div className="mt-4 flex gap-2">
              {project.githubUrl && (
                <Link href={project.githubUrl} className="flex items-center">
                  <Image
                    src="/github-mark.svg"
                    alt="github logo"
                    height="24"
                    width="24"
                  />
                </Link>
              )}
              <Link
                href={project.websiteUrl}
                className="relative mr-6 mb-4 lg:mb-0 text-lg font-medium text-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-sm after:bg-daisyPurple-800 after:transition-all after:duration-300 after:ease-linear hover:text-daisyPurple-800 hover:after:w-full xl:mr-[30px]"
              >
                View Site
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
