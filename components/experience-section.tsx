"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Founder",
    company: "Shopify E-commerce Business",
    period: "Jul 2023 – Dec 2024",
    description: [
      "Built and scaled a profitable e-commerce business, achieving five-figure revenues within the first 18 months",
      "Engineered a 40% increase in organic traffic by implementing on-page and technical SEO strategies",
      "Automated inventory tracking with Python scripts, reducing stock errors by 20%",
      "Managed end-to-end operations including product sourcing, shipping, and customer support",
    ],
    technologies: ["Shopify", "Python", "SEO", "Analytics"],
  },
  {
    title: "Business Analyst Intern",
    company: "Luton, UK",
    period: "Jul 2021 - Aug 2021",
    description: [
      "Analysed large sets of financial and operational data to identify key business trends",
      "Developed Excel dashboards that cut financial reporting time by 20%",
      "Documented business requirements to support cross-team collaboration",
      "Assisted in system testing to ensure accurate financial reporting",
    ],
    technologies: ["Excel", "Data Analysis", "Financial Modeling"],
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-[#007BFF]">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-[#007BFF] mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#2B2B2B] rounded-lg p-6 hover:bg-[#333333] transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-center space-x-3 mb-2 md:mb-0">
                  <Briefcase className="text-[#007BFF]" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-[#F5F5F5]">{experience.title}</h3>
                    <p className="text-[#007BFF] font-medium">{experience.company}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-[#F5F5F5]/80">
                  <Calendar size={16} />
                  <span className="text-sm">{experience.period}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {experience.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-[#F5F5F5]/90 flex items-start">
                    <span className="text-[#007BFF] mr-2 mt-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#007BFF]/20 text-[#007BFF] px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
