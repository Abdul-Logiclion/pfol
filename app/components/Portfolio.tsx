import AboutSection from "./AboutSection";
import AchievementsSection from "./AchievementsSection";
import CertificatesSection from "./CertificationSection";
import ContactSection from "./ContactSection";
import ExperienceSection from "./ExperienceSection";
import Footer from "./Footer";

import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

// Your data is kept here or can be moved to a separate data file for even better organization.
const portfolioData = {
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Python", "Express.js", "Fast API"],
    database: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    tools: ["Git","AWS", "Docker", "Kubernetes", "Vercel", "Linux", "Figma"],
  },
  projects: [
    {
      title: "JobEase: AI Career Agent For IT Job Seekers",
      description: "",
      tech: ["Python", "React.js", "TypeScript", "Express.js", "MongoDB", "Google Gemini API"],
      github: "https://github.com/Abdul-logiclion",
      demo: "https://jobease-frontend-n3wo.vercel.app/",
      image: "/jobease.png?height=200&width=400&text=JobEase+AI+Agent",
    },
    {
      title: "AI Product Scraper: Global Market Intelligence",
      description: "",
      tech: ["Next.js", "Supabase", "PostgreSQL", "FastAPI", "Scrapy", "Pandas", "Selenium", "BeautifulSoup", "Python"],
      github: "https://github.com/Abdul-logiclion",
      demo: "https://global-market-intelligence-szxu.vercel.app/",
      image: "/scraper.png?height=200&width=400&text=AI+Product+Scraper",
    },
  ],
  experience: [
    {
      title: "MERN Stack Developer",
      company: "India (Remote)",
      period: "July 2024 - December 2024",
      description: [
        "Consolidated data from three platforms (Jira, ServiceNow, and Salesforce) into a MERN stack application, which improved data accessibility and reporting efficiency.",
        "Built over five custom React-based reports for in-browser PDF generation, streamlining the data-sharing process for key stakeholders.",
        "Created three custom Jira plugins, extending Jira’s default functionality and reducing manual data retrieval time by an estimated 20%.",
      ],
      location:""
    },
    {
      title: "Front end Intern",
      company: "National Incubation Center",
      period: "Oct '22 - Mar '23",
      description: [
       " Developed the user interface for the startup website, contributing to the product’s initial development.",
        "Collaborated with the team of 5, attending meetings to align on project goals."
      ],
      location:"Sukkur,PK"
    },
  ],
  achievements: [
    {
      title: "Winner",
      description: "Speed programming competition winner at SibaFest25.",
      icon: "🏆",
      year: "May '25",
    },
    {
      title: "Runner-Up",
      description: "Runner-Up in CS Society Programming Competition.",
      icon: "🥈",
      year: "Feb '25",
    },
  ],
    certificates: [
    {
      title: "Google Agile Essentials,",
       platform: "Google",
      icon: "🎓",
      year: "Jul '25",
    },
    {
      title: "Back-end development using Node JS",
      platform: "CodeChef",
      icon: "🎓",
      year: "Aug '25",
    },
     {
      title: "Back End Development and APIs,",
      platform: "FreeCodeCamp",
      icon: "🎓",
      year: "Jul '25",
    }
  ],
};

export default function Portfolio() {
  const { skills, projects, experience, achievements,certificates } = portfolioData;

  

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-white font-sans">
      <main className="h-[80vh] w-[70vw] overflow-auto border border-gray-200 shadow-lg bg-white rounded-lg">
        <HeroSection />
        <AboutSection />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ExperienceSection experience={experience} />
        <AchievementsSection achievements={achievements} />
        <CertificatesSection Certificates={certificates}/>
        <ContactSection />
      </main>
    </div>
  );

}