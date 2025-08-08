"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Bot, Coins, FileText, Download } from "lucide-react"
import DownloadRequestModal from "@/components/download-request-modal"

const projects = [
  {
    title: "AI Train Chatbot",
    description:
      "AI chatbot helping users find cheapest UK train tickets with real-time delay checking using web scraping and NLP.",
    icon: Bot,
    iconBg: "bg-gradient-to-br from-green-400 to-blue-500",
    technologies: ["Python", "Selenium", "NLP", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/samuelogunware/Train_Chatbot",
  },
  {
    title: "Resume Scanner",
    description:
      "A web application for scanning and analyzing resumes using React frontend and Node.js backend with file processing capabilities.",
    icon: FileText,
    iconBg: "bg-gradient-to-br from-purple-400 to-pink-500",
    technologies: ["React", "Node.js", "JavaScript", "File Processing"],
    liveUrl: "#",
    githubUrl: "https://github.com/samuelogunware/resume_scanner",
  },
  {
    title: "Cryptocurrency Optimisation Research",
    description:
      "First-Class dissertation research on optimising cryptocurrency systems for performance and energy efficiency.",
    icon: Coins,
    iconBg: "bg-gradient-to-br from-yellow-400 to-orange-500",
    technologies: ["Python", "Blockchain", "Performance Analysis", "Research"],
    liveUrl: "#",
    githubUrl: undefined,
    hasDownload: true,
  },
]

interface ProjectsSectionProps {
  onOpenDownloadModal?: () => void
}

export default function ProjectsSection({ onOpenDownloadModal }: ProjectsSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleDissertationRequest = () => {
    if (onOpenDownloadModal) {
      onOpenDownloadModal()
    }
  }

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-[#007BFF]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-[#007BFF] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-[#2B2B2B] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                {/* Icon-based header instead of image */}
                <div className={`${project.iconBg} h-48 flex items-center justify-center relative`}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <project.icon size={80} className="text-white drop-shadow-lg" />
                  </motion.div>

                  {/* Floating particles effect */}
                  <motion.div
                    animate={{
                      y: [-10, 10, -10],
                      x: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full"
                  />
                  <motion.div
                    animate={{
                      y: [10, -10, 10],
                      x: [5, -5, 5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute bottom-6 left-6 w-2 h-2 bg-white/40 rounded-full"
                  />
                  <motion.div
                    animate={{
                      y: [-5, 15, -5],
                      x: [-8, 8, -8],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                    className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-white/50 rounded-full"
                  />

                  {/* Hover overlay with action buttons */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.hasDownload ? (
                      <motion.button
                        onClick={handleDissertationRequest}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white text-[#007BFF] p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                      >
                        <Download size={20} />
                      </motion.button>
                    ) : (
                      <>
                        <motion.a
                          href={project.liveUrl}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-white text-[#007BFF] p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-white text-[#007BFF] p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                          >
                            <Github size={20} />
                          </motion.a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#F5F5F5]">{project.title}</h3>
                <p className="text-[#F5F5F5]/80 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#007BFF]/20 text-[#007BFF] px-3 py-1 rounded-full text-sm font-medium hover:bg-[#007BFF]/30 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}
