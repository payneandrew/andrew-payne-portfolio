import Image from "next/image";

interface SkillsCardProps {
  title: string;
  description: string;
  items: string[];
  tools: string[];
  header1: string;
  header2: string;
  iconPath: string;
}

export default function SkillsCard({
  title,
  description,
  items,
  tools,
  header1,
  header2,
  iconPath,
}: SkillsCardProps) {
  return (
    <div className="p-6">
      <div className="flex flex-col items-center mb-4 gap-3">
        <div className="p-2 rounded-full bg-mintGreen">
          <Image src={iconPath} alt="skills icon" width={40} height={40} />
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <h3 className="text-daisyPurple-500 mb-2">{header1}</h3>
      <ul className="mb-4">
        <li>{items.join(", ")}</li>
      </ul>
      <h3 className="text-daisyPurple-500 mb-2">{header2}</h3>
      <ul className="">
        {tools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
    </div>
  );
}
