import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AchievementCardProps {
  achievement: {
    title: string;
    description: string;
    icon: string;
    year: string;
  };
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 font-sans">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="text-3xl">{achievement.icon}</div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg">{achievement.title}</h3>
              <Badge  className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200">{achievement.year}</Badge>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm">{achievement.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}