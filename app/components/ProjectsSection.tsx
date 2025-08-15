// components/ProjectsSection.tsx
import ProjectCard from "./ProjectCard";

interface ProjectsSectionProps {
  projects: {
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
    image: string;
  }[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="px-4 bg-gray-50 pb-16">
      <div className="container mx-auto">
        <h2 className="mb-12  text-center text-2xl md:text-4xl bg-gradient-to-r
         from-blue-600 to-purple-600 bg-clip-text
          text-transparent tracking-tight">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-11">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}