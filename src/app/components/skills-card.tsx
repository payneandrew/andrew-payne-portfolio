interface SkillsCardProps {
  title: string;
  description: string;
  items: string[];
  tools: string[];
}

export default function SkillsCard({
  title,
  description,
  items,
  tools,
}: SkillsCardProps) {
  return (
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-full bg-green-200 text-green-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="ml-2 text-2xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <h3 className="text-purple-600 mb-2">Things I enjoy designing:</h3>
      <ul className="list-disc list-inside mb-4">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3 className="text-purple-600 mb-2">Design Tools:</h3>
      <ul className="list-disc list-inside">
        {tools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
    </div>
  );
}
