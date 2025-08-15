import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceCardProps {
  exp: {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string | string[];
  };
}

export default function ExperienceCard({ exp }: ExperienceCardProps) {
  const renderDescription = () => {
    if (Array.isArray(exp.description)) {
      return (
        <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
          {exp.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p className="text-slate-700 dark:text-slate-300">{exp.description}</p>;
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 font-sans">
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
          <div className="mb-2 sm:mb-0">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
            <p className="text-base text-blue-600 font-medium">{exp.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>
          </div>
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 font-semibold px-4 py-1">
            {exp.period}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="mt-4">
        {renderDescription()}
      </CardContent>
    </Card>
  );
}