"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const timelineEvents = [
  {
    year: "2015",
    title: "Started Secondary Education",
    description: "Began A-Levels in Computer Science, Business, and Graphic Communication",
    type: "education",
  },
  {
    year: "2021",
    title: "First Professional Experience",
    description: "Business Analyst Intern - analyzed financial data and created Excel dashboards",
    type: "work",
  },
  {
    year: "2022",
    title: "University Journey Begins",
    description: "Started BSc Computer Science at University of East Anglia",
    type: "education",
  },
  {
    year: "2023",
    title: "Entrepreneurial Venture",
    description: "Founded profitable Shopify e-commerce business, scaling to five-figure revenues",
    type: "business",
  },
  {
    year: "2024",
    title: "Technical Innovation",
    description: "Developed AI Train Chatbot with 90% accuracy using NLP and web scraping",
    type: "project",
  },
  {
    year: "2025",
    title: "Academic Excellence",
    description: "Awarded an Upper Second Class Honours degree in Computer Science",
    type: "achievement",
  },
]

const getTypeColor = (type: string) => {
  switch (type) {
    case "education":
      return "bg-blue-500"
    case "work":
      return "bg-green-500"
    case "business":
      return "bg-purple-500"
    case "project":
      return "bg-orange-500"
    case "achievement":
      return "bg-yellow-500"
    default:
      return "bg-[#007BFF]"
  }
}

export default function TimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="timeline" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-[#007BFF]">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-[#007BFF] mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#007BFF]/30"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className="bg-[#2B2B2B] rounded-lg p-6 hover:bg-[#333333] transition-colors duration-300">
                    <div className="text-[#007BFF] font-bold text-lg mb-2">{event.year}</div>
                    <h3 className="text-xl font-semibold text-[#F5F5F5] mb-2">{event.title}</h3>
                    <p className="text-[#F5F5F5]/80">{event.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className={`w-6 h-6 rounded-full ${getTypeColor(event.type)} border-4 border-[#1A1A1A]`}></div>
                </div>

                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
