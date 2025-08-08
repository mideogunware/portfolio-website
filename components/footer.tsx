"use client"

import { motion } from "framer-motion"
import { Heart, Linkedin, Github, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2B2B2B] py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 mb-4 md:mb-0"
          >
            <span className="text-[#F5F5F5]">Made with</span>
            <Heart className="text-[#007BFF] fill-current" size={16} />
            <span className="text-[#F5F5F5]">by Samuel Ogunware</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center space-x-4"
          >
            <motion.a
              href="mailto:samuelogunware@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-[#F5F5F5] hover:text-[#007BFF] transition-colors duration-200"
            >
              <Mail size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/samuel-ogunware-74b6b1355"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-[#F5F5F5] hover:text-[#007BFF] transition-colors duration-200"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="https://github.com/samuelogunware"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-[#F5F5F5] hover:text-[#007BFF] transition-colors duration-200"
            >
              <Github size={20} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 pt-6 border-t border-[#333333] text-center"
        >
          <p className="text-[#F5F5F5]/60 text-sm">
            © {new Date().getFullYear()} Samuel Ogunware. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
