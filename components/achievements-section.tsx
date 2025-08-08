"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, TrendingUp, Target, Zap } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "First-Class Dissertation",
    description: "Awarded First-Class for research on Cryptocurrency Optimisation",
    metric: "First-Class",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/20",
  },
  {
    icon: TrendingUp,
    title: "Business Revenue",
    description: "Built profitable e-commerce business achieving five-figure revenues",
    metric: "Five-Figure",
    color: "text-green-400",
    bgColor: "bg-green-400/20",
  },
  {
    icon: Target,
    title: "Traffic Growth",
    description: "Engineered 40% increase in organic traffic through SEO optimization",
    metric: "40% ↑",
    color: "text-blue-400",
    bgColor: "bg-blue-400/20",
  },
  {
    icon: Zap,
    title: "AI Accuracy",
    description: "Achieved 90% accuracy in NLP chatbot for train ticket queries",
    metric: "90%",
    color: "text-purple-400",
    bgColor: "bg-purple-400/20",
  },
]

export default function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key <span className="text-[#007BFF]">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-[#007BFF] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-[#2B2B2B] rounded-lg p-6 text-center hover:bg-[#333333] transition-all duration-300"
            >
              <div
                className={`${achievement.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <achievement.icon className={achievement.color} size={32} />
              </div>
              <div className={`text-2xl font-bold ${achievement.color} mb-2`}>{achievement.metric}</div>
              <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">{achievement.title}</h3>
              <p className="text-[#F5F5F5]/80 text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
