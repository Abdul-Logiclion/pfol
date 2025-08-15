"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string | string[];
}

interface ExperienceSectionProps {
  experience: Experience[];
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="experience" className="pb-16 px-4 bg-gray-50 dark:bg-gray-900 font-sans">
      <div className="container mx-auto">
        <h2 className="mb-12  text-center text-2xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
          Experience
        </h2>
        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experience.map((exp, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ExperienceCard exp={exp} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}