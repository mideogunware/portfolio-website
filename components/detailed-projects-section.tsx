"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, ChevronDown, ChevronUp, Download } from "lucide-react"
import DownloadRequestModal from "@/components/download-request-modal"

const detailedProjects = [
  {
    title: "Resume Scanner",
    shortDescription: "Web application for scanning and analyzing resumes using React frontend and Node.js backend",
    fullDescription:
      "A modern web application designed to streamline the resume screening process. Built with React frontend and Node.js backend, this tool provides efficient file processing capabilities for analyzing and extracting key information from resume documents.",
    problem:
      "Manual resume screening is time-consuming and prone to human bias, making it difficult for recruiters and HR professionals to efficiently process large volumes of applications while maintaining consistency in evaluation criteria.",
    solution:
      "Developed a web-based resume scanner that automates the initial screening process, providing structured data extraction and analysis capabilities. The application features a clean React interface with robust Node.js backend processing.",
    challenges: [
      "Implementing secure file upload and processing",
      "Creating responsive React components for optimal UX",
      "Designing efficient data extraction algorithms",
      "Ensuring cross-browser compatibility and mobile responsiveness",
    ],
    results: [
      "Successfully processed multiple file formats (PDF, DOC, DOCX)",
      "Implemented secure file handling with validation",
      "Created intuitive user interface with real-time feedback",
      "Established scalable architecture for future enhancements",
    ],
    technologies: ["React", "Node.js", "JavaScript", "File Processing", "Express.js", "HTML/CSS"],
    codeSnippet: `// File Upload Component
const handleFileUpload = async (file) => {
  const formData = new FormData();
  formData.append('resume', file);
  
  try {
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });
    
    const result = await response.json();
    setAnalysisResult(result);
  } catch (error) {
    console.error('Upload failed:', error);
  }
}`,
    image: "/images/resume.png",
    liveUrl: "#",
    githubUrl: "https://github.com/samuelogunware/resume_scanner",
    hasDownload: false,
  },
  {
    title: "AI Train Chatbot",
    shortDescription: "AI chatbot helping users find cheapest UK train tickets with real-time delay checking",
    fullDescription:
      "A comprehensive AI-powered chatbot that revolutionizes how users search for train tickets in the UK. The system combines web scraping, natural language processing, and real-time data integration to provide accurate, up-to-date travel information.",
    problem:
      "Users struggle to find the cheapest train tickets across multiple platforms and often lack real-time delay information, leading to poor travel experiences and overspending.",
    solution:
      "Developed an intelligent chatbot that scrapes multiple rail websites simultaneously, processes user queries using NLP, and provides personalized recommendations with real-time updates.",
    challenges: [
      "Handling dynamic website structures across different rail operators",
      "Processing natural language queries with high accuracy",
      "Managing real-time data updates and API rate limits",
      "Ensuring consistent performance across different query types",
    ],
    results: [
      "Achieved 90% accuracy in query interpretation",
      "Reduced average ticket search time by 60%",
      "Successfully integrated 5+ major UK rail operators",
      "Processed 1000+ test queries with consistent results",
    ],
    technologies: ["Python", "Selenium", "NLP", "JavaScript", "BeautifulSoup", "Flask"],
    codeSnippet: `# NLP Query Processing
def process_user_query(query):
    # Extract key information using NLP
    entities = extract_entities(query)
    intent = classify_intent(query)
    
    return {
        'origin': entities.get('origin'),
        'destination': entities.get('destination'),
        'date': entities.get('date'),
        'intent': intent
    }`,
    image: "/images/train-chatbot-interface.png",
    liveUrl: "#",
    githubUrl: "https://github.com/samuelogunware/Train_Chatbot",
    hasDownload: false,
  },
  {
    title: "Cryptocurrency Optimisation Research",
    shortDescription:
      "First-Class dissertation research on optimising cryptocurrency systems for performance and energy efficiency",
    fullDescription:
      "Comprehensive academic research investigating methods to optimize cryptocurrency systems, focusing on the blockchain trilemma of security, scalability, and decentralization while addressing energy consumption concerns. This 45-page dissertation explores cryptocurrency optimisation through a holistic lens, evaluating hardware and software requirements, consensus mechanisms, transaction throughput and energy consumption of major blockchain protocols including Bitcoin, Ethereum, and Solana.",
    problem:
      "Current cryptocurrency systems face significant challenges in balancing performance, security, and energy efficiency, limiting their mainstream adoption and environmental sustainability. The fundamental trade-offs between security, scalability and decentralisation pose critical challenges.",
    solution:
      "Conducted extensive research and analysis of various consensus mechanisms, developed custom Python benchmarking scripts, and proposed novel approaches to improve transaction throughput while reducing energy consumption. Used data-driven approach with real-time blockchain API data collection to assess Bitcoin, Ethereum, and Solana networks.",
    challenges: [
      "Analyzing complex blockchain consensus mechanisms (PoW, PoS, PoH)",
      "Balancing the blockchain trilemma constraints",
      "Measuring and comparing energy consumption across different systems",
      "Developing practical optimization strategies for real-world deployment",
    ],
    results: [
      "Awarded First-Class grade for research excellence",
      "Identified key optimization strategies across consensus mechanisms",
      "Demonstrated 99%+ energy efficiency improvements in PoS vs PoW",
      "Published comprehensive benchmarking methodology and findings",
    ],
    technologies: [
      "Python",
      "Blockchain Analysis",
      "Performance Modeling",
      "Data Visualization",
      "Research Methodology",
    ],
    liveUrl: "#",
    githubUrl: null,
    hasDownload: true,
    downloadFileName: "Samuel_Ogunware_Cryptocurrency_Research.pdf",
    hasFullPDF: true,
  },
]

export default function DetailedProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index)
  }

  const handleDissertationRequest = () => {
    setIsDownloadModalOpen(true)
  }

  const handleDownloadSubmit = (data: { name: string; email: string; message: string }) => {
    // This function is now handled by the modal itself
    console.log("Download request submitted:", data)
  }

  return (
    <>
      <section id="detailed-projects" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Project <span className="text-[#007BFF]">Case Studies</span>
            </h2>
            <div className="w-24 h-1 bg-[#007BFF] mx-auto mb-6"></div>
            <p className="text-xl text-[#F5F5F5]/80 max-w-3xl mx-auto">
              Deep dives into my most significant projects, showcasing problem-solving approach and technical
              implementation
            </p>
          </motion.div>

          <div className="space-y-8">
            {detailedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-[#2B2B2B] rounded-lg overflow-hidden hover:bg-[#333333] transition-colors duration-300"
              >
                {/* Project Header */}
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#F5F5F5] mb-2">{project.title}</h3>
                      <p className="text-[#F5F5F5]/80 mb-4">{project.shortDescription}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="bg-[#007BFF]/20 text-[#007BFF] px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 flex-wrap gap-2">
                      {project.hasDownload && (
                        <>
                          <motion.button
                            onClick={handleDissertationRequest}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#007BFF] text-white px-3 py-2 rounded-lg flex items-center space-x-2 hover:bg-[#0056b3] transition-colors duration-200 text-sm"
                          >
                            <Download size={14} />
                            <span>Request PDF</span>
                          </motion.button>
                        </>
                      )}
                      {!project.hasDownload && (
                        <motion.a
                          href={project.liveUrl}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-[#007BFF] text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-[#0056b3] transition-colors duration-200"
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-[#333333] text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-[#404040] transition-colors duration-200"
                        >
                          <Github size={16} />
                          <span>Code</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <motion.button
                    onClick={() => toggleProject(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center space-x-2 text-[#007BFF] hover:text-[#0056b3] transition-colors duration-200"
                  >
                    <span>{expandedProject === index ? "Show Less" : "View Case Study"}</span>
                    {expandedProject === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </motion.button>
                </div>

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedProject === index ? "auto" : 0,
                    opacity: expandedProject === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <div className="border-t border-[#404040] pt-6">
                      {project.hasDownload && (
                        <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-4 mb-6">
                          <h5 className="text-blue-400 font-semibold mb-2">📋 Dissertation Request Required</h5>
                          <div className="text-[#F5F5F5]/80 text-sm space-y-2">
                            <p>
                              <strong>Academic Document:</strong> To maintain document security and track academic
                              interest, please submit a request form
                            </p>
                            <p>
                              <strong>Quick Response:</strong> I'll email you the complete 45-page dissertation within
                              24 hours
                            </p>
                            <p>
                              <strong>Additional Materials:</strong> You'll also receive supplementary research data and
                              methodology notes
                            </p>
                          </div>
                        </div>
                      )}

                      {project.title === "Cryptocurrency Optimisation Research" ? (
                        <div className="mb-8">
                          <div className="text-center max-w-4xl mx-auto">
                            <h4 className="text-xl font-semibold text-[#F5F5F5] mb-6">Project Overview</h4>
                            <p className="text-[#F5F5F5]/80 mb-8 text-lg leading-relaxed">{project.fullDescription}</p>

                            <div className="grid md:grid-cols-2 gap-8">
                              <div className="text-left">
                                <h5 className="text-[#007BFF] font-semibold mb-3">Problem Statement</h5>
                                <p className="text-[#F5F5F5]/80 text-sm leading-relaxed">{project.problem}</p>
                              </div>
                              <div className="text-left">
                                <h5 className="text-[#007BFF] font-semibold mb-3">Solution Approach</h5>
                                <p className="text-[#F5F5F5]/80 text-sm leading-relaxed">{project.solution}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="grid lg:grid-cols-2 gap-8 mb-8">
                          <div>
                            <motion.img
                              whileHover={{ scale: 1.02 }}
                              src={project.image}
                              alt={project.title}
                              className="w-full rounded-lg shadow-lg border border-[#404040]"
                            />
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-[#F5F5F5] mb-3">Project Overview</h4>
                            <p className="text-[#F5F5F5]/80 mb-6">{project.fullDescription}</p>

                            <div className="space-y-4">
                              <div>
                                <h5 className="text-[#007BFF] font-semibold mb-2">Problem Statement</h5>
                                <p className="text-[#F5F5F5]/80 text-sm">{project.problem}</p>
                              </div>
                              <div>
                                <h5 className="text-[#007BFF] font-semibold mb-2">Solution Approach</h5>
                                <p className="text-[#F5F5F5]/80 text-sm">{project.solution}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h5 className="text-[#007BFF] font-semibold mb-3">Key Challenges</h5>
                          <ul className="space-y-2">
                            {project.challenges.map((challenge, challengeIndex) => (
                              <li key={challengeIndex} className="text-[#F5F5F5]/80 flex items-start text-sm">
                                <span className="text-[#007BFF] mr-2 mt-1">•</span>
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-[#007BFF] font-semibold mb-3">Results Achieved</h5>
                          <ul className="space-y-2">
                            {project.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="text-[#F5F5F5]/80 flex items-start text-sm">
                                <span className="text-green-400 mr-2 mt-1">✓</span>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h5 className="text-[#007BFF] font-semibold mb-3">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="bg-[#007BFF]/20 text-[#007BFF] px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Request Modal */}
      <DownloadRequestModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        documentType="Dissertation"
        onSubmit={handleDownloadSubmit}
      />
    </>
  )
}
