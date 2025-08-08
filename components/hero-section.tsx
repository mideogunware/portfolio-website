"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const roles = [
  "I build AI-powered solutions.",
  "I develop web applications.",
  "I analyse complex data systems.",
]

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const currentText = roles[currentRole]

    if (!isDeleting && displayText === currentText) {
      setTimeout(() => setIsDeleting(true), 2000)
      return
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setCurrentRole((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) => (isDeleting ? prev.slice(0, -1) : currentText.slice(0, prev.length + 1)))
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hello, I'm <span className="text-[#007BFF]">Samuel Ogunware</span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl mb-8 h-8 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-[#F5F5F5]">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-[#007BFF] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#0056b3] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View My Work
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-[#007BFF] cursor-pointer"
            onClick={scrollToProjects}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
