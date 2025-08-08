"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const interests = [
  {
    name: "Basketball",
    icon: "🏀",
    description: "Team sports enthusiast, love the strategy and teamwork",
  },
  {
    name: "Programming",
    icon: "💻",
    description: "Passionate about coding and exploring new technologies",
  },
  {
    name: "Football",
    icon: "⚽",
    description: "Following matches and playing with friends",
  },
  {
    name: "Reading",
    icon: "📚",
    description: "Tech blogs, business books, and sci-fi novels",
  },
  {
    name: "Cooking",
    icon: "👨‍🍳",
    description: "Experimenting with different cuisines and recipes",
  },
  {
    name: "Running",
    icon: "🏃‍♂️",
    description: "Staying fit and clearing my mind through regular runs",
  },
]

export default function InterestsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="interests" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Personal <span className="text-[#007BFF]">Interests</span>
          </h2>
          <div className="w-24 h-1 bg-[#007BFF] mx-auto mb-6"></div>
          <p className="text-xl text-[#F5F5F5]/80 max-w-2xl mx-auto">
            Beyond coding, I enjoy a variety of activities that keep me balanced and inspired
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[#2B2B2B] rounded-lg p-6 text-center hover:bg-[#333333] transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-4">{interest.icon}</div>
              <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">{interest.name}</h3>
              <p className="text-[#F5F5F5]/70 text-sm">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
