import AchievementCard from "./AchievementCard";

interface Achievement {
  title: string;
  description: string;
  icon: string;
  year: string;
}

interface AchievementsSectionProps {
  achievements: Achievement[];
}

export default function AchievementsSection({ achievements }: AchievementsSectionProps) {
  return (
    <section id="achievements" className="pb-16 px-4 bg-slate-50 dark:bg-slate-900 font-sans">
      <div className="container mx-auto">
        <h2 className="
        mb-12  text-center text-2xl md:text-4xl 
        bg-gradient-to-r from-blue-600
         to-purple-600 bg-clip-text 
         text-transparent tracking-tight">Achievements</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
}