"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Backend",
    skills: [
      { name: "Python", level: "Expert", percentage: 90 },
      { name: "Java", level: "Advanced", percentage: 80 },
      { name: "Node.js", level: "Advanced", percentage: 75 },
      { name: "SQL", level: "Proficient", percentage: 70 },
      { name: "Flask / FastAPI", level: "Proficient", percentage: 65 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML/CSS", level: "Expert", percentage: 90 },
      { name: "JavaScript", level: "Advanced", percentage: 85 },
      { name: "React", level: "Advanced", percentage: 80 },
      { name: "Tailwind CSS", level: "Advanced", percentage: 75 },
      { name: "Next.js", level: "Proficient", percentage: 70 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: "Advanced", percentage: 85 },
      { name: "Selenium", level: "Advanced", percentage: 80 },
      { name: "Docker", level: "Proficient", percentage: 65 },
      { name: "AWS", level: "Proficient", percentage: 60 },
      { name: "MongoDB", level: "Proficient", percentage: 70 },
    ],
  },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-[#007BFF]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-[#007BFF] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-[#2B2B2B] rounded-lg p-6 hover:bg-[#333333] transition-colors duration-300"
            >
              <h3 className="text-2xl font-bold mb-8 text-[#007BFF] text-center">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[#F5F5F5] font-medium text-lg">{skill.name}</span>
                      <span className="text-[#F5F5F5]/60 text-sm">{skill.level}</span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-[#404040] rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                          transition={{
                            duration: 1.5,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                            ease: "easeOut",
                          }}
                          className="bg-gradient-to-r from-[#007BFF] to-[#0056b3] h-2 rounded-full relative overflow-hidden"
                        >
                          <motion.div
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-[#2B2B2B] rounded-lg p-8 max-w-4xl mx-auto">
            <h4 className="text-xl font-semibold text-[#F5F5F5] mb-4">Additional Expertise</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Machine Learning",
                "NLP",
                "Blockchain",
                "Data Analysis",
                "Web Scraping",
                "SEO Optimization",
                "E-commerce",
                "Agile Development",
                "API Development",
                "Database Design",
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#007BFF]/20 text-[#007BFF] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#007BFF]/30 transition-colors duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
