"use client"

import { motion } from "framer-motion"
import { Users, ClipboardList, Laptop, Smile, Check } from "lucide-react"

const skillCategories = [
  {
    title: "School Leadership",
    icon: <Users className="h-6 w-6" />,
    skills: ["Operations management", "Staff supervision", "Event planning", "Parent-teacher coordination"],
    delay: 0.1,
  },
  {
    title: "Exam Coordination",
    icon: <ClipboardList className="h-6 w-6" />,
    skills: ["Assessment system design", "Result management", "Question paper development", "Progress tracking"],
    delay: 0.2,
  },
  {
    title: "Technology Skills",
    icon: <Laptop className="h-6 w-6" />,
    skills: ["MS Office proficiency", "WordPress management", "Social media management", "Basic graphic design"],
    delay: 0.3,
  },
  {
    title: "Soft Skills",
    icon: <Smile className="h-6 w-6" />,
    skills: ["Leadership & mentoring", "Problem-solving", "Adaptability", "Effective communication"],
    delay: 0.4,
  },
]

export default function SkillsSection() {
  return (
    <section className="py-20 bg-black/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Professional{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my capabilities and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: category.delay }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
              <div className="relative h-full p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl group-hover:bg-white/10 group-hover:border-orange-500/50 transition-all duration-500 flex flex-col items-center hover:-translate-y-2 shadow-xl hover:shadow-[0_10px_40px_rgba(249,115,22,0.15)]">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 flex items-center justify-center text-orange-400 mb-6 border border-orange-500/20 ring-1 ring-white/5 shadow-inner transition-all duration-500">
                  {category.icon}
                </div>

                <h3 className="text-xl font-bold text-center mb-6 group-hover:text-orange-500 transition-colors">
                  {category.title}
                </h3>

                <ul className="space-y-3 w-full">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground group-hover:text-gray-300 transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

