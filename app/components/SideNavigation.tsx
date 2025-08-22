'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const sectionIds = [
    "about",
    "skills",
    "projects",
    "experience",
    "achievements",
    "certifications",
  ];

  const activeSection = useActiveSection(sectionIds);

  return (
    <nav className="fixed md:right-4 top-1/4 
      bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 overflow-hidden">
      <div className="container flex flex-col space-y-2">
        {sectionIds.map((id) => (
          <Link
            key={id}
            href={`#${id}`}
            className={`transition-colors truncate ${
              activeSection === id
                ? "text-blue-600 font-semibold"
                : "hover:text-blue-600"
            }`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </Link>
        ))}
      </div>
    </nav>
  );
}

type ActiveSectionProps = string[];

function useActiveSection(sectionIds: ActiveSectionProps) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
