"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react"

const education = [
  {
    institution: "University of East Anglia",
    degree: "BSc Computer Science",
    grade: "2:1 (Upper Second-Class Honours)",
    period: "Sep 2022 – Jun 2025",
    location: "Norwich, UK",
    keyAreas: ["AI", "Advanced Web Development", "Data Science", "Software Engineering", "Databases"],
    achievements: [
      "First-Class dissertation on Cryptocurrency Optimisation",
      "Specialized in AI and Machine Learning applications",
      "Advanced coursework in blockchain technology",
    ],
  },
  {
    institution: "St George's School, Harpenden",
    degree: "A-Levels",
    grade: "A-Levels: Computer Science, Business, Graphic Communication",
    period: "Sep 2020 – Sep 2022",
    location: "Harpenden, UK",
    keyAreas: ["Computer Science", "Business Studies", "Graphic Communication"],
    achievements: [],
  },
]

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-[#007BFF]">Education</span>
          </h2>
          <div className="w-24 h-1 bg-[#007BFF] mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#2B2B2B] rounded-lg p-6 hover:bg-[#333333] transition-colors duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <div className="bg-[#007BFF]/20 p-3 rounded-full">
                    <GraduationCap className="text-[#007BFF]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#F5F5F5] mb-1">{edu.institution}</h3>
                    <p className="text-[#007BFF] font-semibold mb-2">{edu.degree}</p>
                    <div className="flex items-center space-x-4 text-[#F5F5F5]/80 text-sm mb-2">
                      <div className="flex items-center space-x-1">
                        <Award size={16} />
                        <span>{edu.grade}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`grid ${edu.achievements.length > 0 ? "md:grid-cols-2" : "md:grid-cols-1"} gap-6`}>
                <div>
                  <h4 className="text-[#007BFF] font-semibold mb-3">Key Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.keyAreas.map((area) => (
                      <span
                        key={area}
                        className="bg-[#007BFF]/20 text-[#007BFF] px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {edu.achievements.length > 0 && (
                  <div>
                    <h4 className="text-[#007BFF] font-semibold mb-3">Achievements</h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-[#F5F5F5]/90 flex items-start">
                          <span className="text-[#007BFF] mr-2 mt-1">•</span>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
