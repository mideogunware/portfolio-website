"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Download } from "lucide-react"
import { downloadActualCV, generateCVPDF, downloadPDF } from "@/utils/create-downloadable-files"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const downloadCV = () => {
    // Try to download from GitHub first, fallback to generated PDF
    try {
      downloadActualCV()
    } catch (error) {
      console.log("GitHub download failed, generating PDF...")
      // Fallback to generated PDF if GitHub fails
      const cvPDF = generateCVPDF()
      downloadPDF(cvPDF, "Samuel_Ogunware_CV.pdf")
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-[#1A1A1A]/95 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold text-[#007BFF] cursor-pointer"
              onClick={() => scrollToSection("#home")}
            >
              Samuel Ogunware
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-[#F5F5F5] hover:text-[#007BFF] transition-colors duration-200 text-sm"
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.button
                onClick={downloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#007BFF] text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-[#0056b3] transition-colors duration-200"
              >
                <Download size={16} />
                <span>CV</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#F5F5F5] hover:text-[#007BFF] transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden bg-[#2B2B2B] rounded-lg mt-2 p-4"
            >
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-[#F5F5F5] hover:text-[#007BFF] transition-colors duration-200"
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.button
                onClick={downloadCV}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 bg-[#007BFF] text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-[#0056b3] transition-colors duration-200"
              >
                <Download size={16} />
                <span>Download CV</span>
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  )
}
