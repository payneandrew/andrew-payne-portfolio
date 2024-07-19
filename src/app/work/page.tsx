import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  imageUrl?: string;
  githubUrl?: string;
  websiteUrl: string;
}
const projects: Project[] = [
  {
    title: "Yoomi iOS Mobile App",
    description:
      "Experience faster recovery with the award-winning Yoomi Health app. Follow personalized exercise programs, track your progress, and chat with your PT—all in one place.",
    websiteUrl: "https://apps.apple.com/us/app/yoomi-health/id6502195415",
    imageUrl: "/yoomi-mobile-app.png",
  },
  {
    title: "Yoomi Web App",
    description:
      "Yoomi is a digital health company with a vision of improving the standard of care in physical therapy. Our goal is to enhance the capabilities of physical therapists by providing patients with an exciting and interactive experience to improve rehabilitation outcomes.",
    imageUrl: "/yoomi-web-app.png",
    websiteUrl: "https://yoomi.health",
  },
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
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
          My Work
        </h1>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
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

              <div className="p-4">
                <h2 className="text-2xl font-bold ">{project.title}</h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="mt-4 flex gap-2">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      className="flex items-center"
                    >
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
      </div>
    </main>
  );
}
