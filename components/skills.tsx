"use client";

import React, { useRef, ReactElement } from "react";
import { motion, useInView } from "framer-motion";
import {
  Atom,
  ServerCog,
  Database,
  Coffee,
  Code,
  GitBranch,
  Paintbrush,
  FileText,
  TerminalSquare,
  FunctionSquare,
  Settings2,
  Laptop2,
  Boxes,
} from "lucide-react";

interface Skill {
  name: string;
  icon: ReactElement;
  level: number;
}

const categorizedSkills: Record<string, Skill[]> = {
  Development: [
    { name: "HTML", icon: <Code className="w-10 h-10" />, level: 80 },
    { name: "React", icon: <Atom className="w-10 h-10" />, level: 60 },
    { name: "Tailwind", icon: <Paintbrush className="w-10 h-10" />, level: 90 },
    { name: "EJS", icon: <FileText className="w-10 h-10" />, level: 90 },
    { name: "Node.js", icon: <ServerCog className="w-10 h-10" />, level: 75 },
    {
      name: "Express",
      icon: <TerminalSquare className="w-10 h-10" />,
      level: 80,
    },
    { name: "MongoDB", icon: <Database className="w-10 h-10" />, level: 80 },
    { name: "Java", icon: <Coffee className="w-10 h-10" />, level: 75 },
    { name: "C", icon: <Code className="w-10 h-10" />, level: 70 },
    { name: "DSA", icon: <FunctionSquare className="w-10 h-10" />, level: 60 },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: <GitBranch className="w-10 h-10" />, level: 85 },
    { name: "Vite", icon: <Settings2 className="w-10 h-10" />, level: 80 },
    {
      name: "Hoppscotch",
      icon: <Settings2 className="w-10 h-10" />,
      level: 75,
    },
    { name: "Docker", icon: <Boxes className="w-10 h-10" />, level: 30 },
    { name: "Postman", icon: <Settings2 className="w-10 h-10" />, level: 60 },
  ],
  Systems: [
    {
      name: "Linux",
      icon: <TerminalSquare className="w-10 h-10" />,
      level: 85,
    },
    { name: "Windows", icon: <Laptop2 className="w-10 h-10" />, level: 95 },
  ],
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-[#111827]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-[#3B82F6] dark:bg-[#60A5FA] mx-auto mb-6"></div>
        </motion.div>

        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <motion.div
            key={category}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold text-center text-[#3B82F6] dark:text-[#60A5FA] mb-6">
              {category}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-[#F1F5F9] dark:bg-[#1E293B] rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex justify-center items-center mb-4 text-[#3B82F6] dark:text-[#60A5FA]">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{skill.name}</h4>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-2.5 rounded-full bg-[#3B82F6] dark:bg-[#60A5FA]"
                    ></motion.div>
                  </div>
                  <p className="mt-2 text-sm text-[#475569] dark:text-[#CBD5E1]">
                    {skill.level}%
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
