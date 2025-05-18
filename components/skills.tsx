"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface Skill {
  name: string
  icon: string
  level: number
}

const skills: Skill[] = [
  { name: "React", icon: "⚛️", level: 60 },
  { name: "Node.js", icon: "🟢", level: 75 },
  { name: "Express", icon: "🚂", level: 80 },
  { name: "MongoDB", icon: "🍃", level: 80 },
  { name: "Java", icon: "☕", level: 75 },
  { name: "C", icon: "©️", level: 70 },
  { name: "DSA", icon: "🧮", level: 60 },
  { name: "Git", icon: "🔄", level: 85 },
  { name: "Tailwind", icon: "🎨", level: 90 },
  { name: "EJS", icon: "📄", level: 90 },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="py-20 bg-white dark:bg-[#111827]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-[#3B82F6] dark:bg-[#60A5FA] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-[#475569] dark:text-[#CBD5E1]">
            Here are the technologies and skills I&apos;ve been working with.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-[#F1F5F9] dark:bg-[#1E293B] rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-2.5 rounded-full bg-[#3B82F6] dark:bg-[#60A5FA]"
                ></motion.div>
              </div>
              <p className="mt-2 text-sm text-[#475569] dark:text-[#CBD5E1]">{skill.level}%</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
