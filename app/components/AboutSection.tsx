"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe } from "lucide-react";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="about" className="px-4 py-16 bg-gray-50 dark:bg-gray-900 font-sans">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12  text-center text-2xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight"
        >
          About Me
        </motion.h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Text Side */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
<div className="space-y-4 text-lg text-slate-600 dark:text-slate-400">
  <p>
    Hello, I'm Abdul. I'm a MERN Stack Developer.
  </p>
  <p>
    I've been fascinated with building and engineering since I was a kid, but it was coding that truly captured my imagination. I was instantly drawn to how quickly I could bring an idea to life and see the tangible output of my work. This drive to create is what led me to pursue a degree in Computer Science.
  </p>
  <p>
    <strong>Fun fact:</strong> I love reading about psychology and quantum physics.
  </p>

  <p>
    <strong>Discipline:</strong>
  </p>
  <p>
    Discipline is an important value of mine.  Doing what I've decided is the ultimate form of self-respect and the source of my self-esteem.
  </p>
</div>
              <motion.div variants={itemVariants} className="mt-8">
              
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Problem Solver</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Team Player</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Quick Learner</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Open Source Contributor</Badge>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Code className="w-6 h-6 mr-3 text-blue-600" />
                      <h3 className="text-xl md:text-2xl text-gray-900 dark:text-white font-medium">Education</h3>
                    </div>
                    <p className="text-base text-gray-700 dark:text-gray-300">
                      Bachelor of Science in Computer Science
                      <br />
                      <span className="font-medium">Sukkur IBA University</span> • May 2025
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Globe className="w-6 h-6 mr-3 text-green-600" />
                      <h3 className="text-xl md:text-2xl text-gray-900 dark:text-white font-medium">Location</h3>
                    </div>
                    <p className="text-base text-gray-700 dark:text-gray-300">
                      Karachi, Pakistan
                      <br />
                      <span className="font-medium">Open to remote opportunities</span>
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}