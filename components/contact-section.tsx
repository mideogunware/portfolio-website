"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle, Zap, Clock } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
    automated?: boolean
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    console.log("=== Form Submission Started ===")
    console.log("Form data:", formData)

    try {
      // First, test if the API route is accessible
      console.log("Testing API route...")
      const testResponse = await fetch("/api/contact", { method: "GET" })
      console.log("Test response status:", testResponse.status)

      if (!testResponse.ok) {
        throw new Error("API route not accessible")
      }

      // Now submit the actual form
      console.log("Submitting form data...")
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      console.log("Response status:", response.status)
      console.log("Response headers:", Object.fromEntries(response.headers.entries()))

      // Get response text first to debug
      const responseText = await response.text()
      console.log("Raw response:", responseText)

      // Try to parse as JSON
      let data
      try {
        data = JSON.parse(responseText)
        console.log("Parsed response data:", data)
      } catch (parseError) {
        console.error("JSON parse error:", parseError)
        console.error("Response was:", responseText)
        throw new Error(`Server returned invalid JSON: ${responseText.substring(0, 100)}...`)
      }

      if (response.ok) {
        if (data.automated) {
          setSubmitStatus({
            type: "success",
            message: "🎉 Message sent successfully! I'll respond within 24 hours.",
            automated: true,
          })
        } else {
          setSubmitStatus({
            type: "success",
            message: "Opening your email client to send the message...",
            automated: false,
          })

          // Open email client
          if (data.mailtoUrl) {
            setTimeout(() => {
              window.open(data.mailtoUrl, "_blank")
            }, 1000)
          }
        }

        // Reset form
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        })
      }
    } catch (error) {
      console.error("Contact form error:", error)
      setSubmitStatus({
        type: "error",
        message: `Error: ${error instanceof Error ? error.message : "Unknown error"}. Please email me directly at samuelogunware@gmail.com`,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-[#007BFF]">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-[#007BFF] mx-auto mb-6"></div>
          <p className="text-xl text-[#F5F5F5]/80 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#F5F5F5]">Get In Touch</h3>
              <p className="text-[#F5F5F5]/80 mb-8">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:samuelogunware@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-4 p-4 bg-[#2B2B2B] rounded-lg hover:bg-[#333333] transition-colors duration-200"
              >
                <Mail className="text-[#007BFF]" size={24} />
                <span className="text-[#F5F5F5]">samuelogunware@gmail.com</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/samuel-ogunware-74b6b1355"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-4 p-4 bg-[#2B2B2B] rounded-lg hover:bg-[#333333] transition-colors duration-200"
              >
                <Linkedin className="text-[#007BFF]" size={24} />
                <span className="text-[#F5F5F5]">linkedin.com/in/samuel-ogunware</span>
              </motion.a>

              <motion.a
                href="https://github.com/samuelogunware"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-4 p-4 bg-[#2B2B2B] rounded-lg hover:bg-[#333333] transition-colors duration-200"
              >
                <Github className="text-[#007BFF]" size={24} />
                <span className="text-[#F5F5F5]">github.com/samuelogunware</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#F5F5F5] mb-2 font-medium">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-[#2B2B2B] border border-[#333333] rounded-lg text-[#F5F5F5] focus:border-[#007BFF] focus:outline-none transition-colors duration-200 disabled:opacity-50"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#F5F5F5] mb-2 font-medium">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-[#2B2B2B] border border-[#333333] rounded-lg text-[#F5F5F5] focus:border-[#007BFF] focus:outline-none transition-colors duration-200 disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#F5F5F5] mb-2 font-medium">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-3 bg-[#2B2B2B] border border-[#333333] rounded-lg text-[#F5F5F5] focus:border-[#007BFF] focus:outline-none transition-colors duration-200 resize-none disabled:opacity-50"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              {/* Status Message */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-start space-x-3 ${
                    submitStatus.type === "success"
                      ? "bg-green-900/20 border border-green-600/30 text-green-400"
                      : "bg-red-900/20 border border-red-600/30 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    submitStatus.automated ? (
                      <Zap size={20} className="mt-0.5 flex-shrink-0" />
                    ) : (
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0" />
                    )
                  ) : (
                    <AlertCircle size={20} className="mt-0.5 flex-shrink-0" />
                  )}
                  <span className="text-sm leading-relaxed">{submitStatus.message}</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className="w-full bg-[#007BFF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0056b3] transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>

            {/* Enhanced Info Box */}
            <div className="mt-6 p-4 bg-[#2B2B2B]/50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Zap className="text-green-400" size={16} />
                <Clock className="text-blue-400" size={16} />
                <span className="text-green-400 font-medium text-sm">Smart Delivery</span>
              </div>
              <p className="text-[#F5F5F5]/60 text-xs">
                Attempts automated delivery via Resend, falls back to email client if needed. I'll respond within 24
                hours!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
