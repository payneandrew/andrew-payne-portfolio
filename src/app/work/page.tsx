import Image from "next/image";

const projects = [
  {
    title: "Yoomi iOS Mobile App",
    description: "Description of Project 1.",
    imageUrl: "/project1.jpg", // Replace with actual image URL
  },
  {
    title: "Yoomi Web App",
    description: "Description of Project 2.",
    imageUrl: "/project2.jpg", // Replace with actual image URL
  },
  // Add more projects as needed
];

export default function WorkPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-6 bg-home-gradient">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 text-center">
          My Work
        </h1>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
