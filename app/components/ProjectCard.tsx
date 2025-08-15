// components/ProjectCard.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
    image: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ">
      <div className="relative h-32">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.map((tech) => (
            <Badge key={tech}  className="bg-blue-100 text-blue-800 hover:bg-blue-200">{tech}</Badge>
          ))}
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" asChild>
            <Link href={project.github}><Github className="w-4 h-4 mr-1" />Code</Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-1" />Try it here
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}