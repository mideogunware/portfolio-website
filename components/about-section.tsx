"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-[#007BFF]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[#007BFF] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-[#F5F5F5]">
              I'm a Computer Science graduate from the University of East Anglia with strong foundations in Python,
              Java, and data analysis. My journey in technology combines academic excellence with real-world
              entrepreneurial experience, having built and scaled a profitable e-commerce business to five-figure
              revenues.
            </p>
            <p className="text-lg leading-relaxed text-[#F5F5F5]">
              I specialize in AI systems, web development, and blockchain technology, with hands-on experience in NLP,
              data analysis, and full-stack development. My technical expertise spans from building AI chatbots to
              optimizing cryptocurrency systems, always focusing on practical solutions that deliver real value.
            </p>
            <p className="text-lg leading-relaxed text-[#F5F5F5]">
              I'm currently seeking an entry-level role where I can apply my technical expertise and entrepreneurial
              mindset to contribute to innovative projects and continue growing as a developer in a collaborative
              environment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-[#007BFF] shadow-2xl"
              >
                <img
                  src="/images/samuel-profile.png"
                  alt="Samuel Ogunware - Computer Science Graduate"
                  className="w-full h-full object-cover object-top scale-110"
                  style={{ objectPosition: "50% 20%" }}
                />
                {/* Subtle overlay for better integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#007BFF]/10 to-transparent"></div>
              </motion.div>

              {/* Animated border ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -inset-4 border-2 border-dashed border-[#007BFF]/30 rounded-full"
              />

              {/* Floating accent elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-[#007BFF]/20 rounded-full blur-sm"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#007BFF]/10 rounded-full blur-sm"
              />
            </div>
          </motion.div>
        </div>

        {/* Additional professional highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-[#2B2B2B]/50 rounded-lg backdrop-blur-sm">
            <div className="text-2xl font-bold text-[#007BFF] mb-1">2:1 / 3.6 GPA</div>
            <div className="text-[#F5F5F5] font-medium">Upper Second Class Honours</div>
            <div className="text-[#F5F5F5]/60 text-sm">Computer Science</div>
          </div>
          <div className="text-center p-6 bg-[#2B2B2B]/50 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-[#007BFF] mb-2">£10K+</div>
            <div className="text-[#F5F5F5] font-medium">Business Revenue</div>
            <div className="text-[#F5F5F5]/60 text-sm">E-commerce Success</div>
          </div>
          <div className="text-center p-6 bg-[#2B2B2B]/50 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-[#007BFF] mb-2">90%</div>
            <div className="text-[#F5F5F5] font-medium">AI Accuracy</div>
            <div className="text-[#F5F5F5]/60 text-sm">NLP Chatbot</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
