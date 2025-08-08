"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Download, Mail, User, MessageSquare, CheckCircle, AlertCircle, Zap } from "lucide-react"

interface DownloadRequestModalProps {
  isOpen: boolean
  onClose: () => void
  documentType: "CV" | "Dissertation"
  onSubmit: (data: { name: string; email: string; message: string }) => void
}

export default function DownloadRequestModal({ isOpen, onClose, documentType, onSubmit }: DownloadRequestModalProps) {
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

    console.log("=== Dissertation Request Submission Started ===")
    console.log("Form data:", formData)

    try {
      // First, test if the API route is accessible
      console.log("Testing dissertation request API route...")
      const testResponse = await fetch("/api/dissertation-request", { method: "GET" })
      console.log("Test response status:", testResponse.status)

      if (!testResponse.ok) {
        throw new Error("API route not accessible")
      }

      // Now submit the actual form
      console.log("Submitting dissertation request...")
      const response = await fetch("/api/dissertation-request", {
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
            message: "🎉 Request sent successfully! I'll email you the dissertation within 24 hours.",
            automated: true,
          })
        } else {
          setSubmitStatus({
            type: "success",
            message: "Opening your email client to send the request...",
            automated: false,
          })

          // Open email client
          if (data.mailtoUrl) {
            setTimeout(() => {
              window.open(data.mailtoUrl, "_blank")
            }, 1000)
          }
        }

        // Reset form and close modal after a delay
        setTimeout(() => {
          setFormData({ name: "", email: "", message: "" })
          setSubmitStatus({ type: null, message: "" })
          onClose()
        }, 3000)
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        })
      }
    } catch (error) {
      console.error("Dissertation request error:", error)
      setSubmitStatus({
        type: "error",
        message: `Error: ${error instanceof Error ? error.message : "Unknown error"}. Please email me directly at samuelogunware@gmail.com`,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({ name: "", email: "", message: "" })
      setSubmitStatus({ type: null, message: "" })
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-[#2B2B2B] rounded-lg p-6 w-full max-w-md mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-[#007BFF]/20 p-2 rounded-full">
                  <Download className="text-[#007BFF]" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F5F5F5]">Request {documentType}</h3>
                  <p className="text-[#F5F5F5]/60 text-sm">Please provide your details to receive the document</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClose}
                disabled={isSubmitting}
                className="text-[#F5F5F5]/60 hover:text-[#F5F5F5] transition-colors disabled:opacity-50"
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-[#F5F5F5] mb-2 font-medium text-sm">
                  <User size={16} className="inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#333333] rounded-lg text-[#F5F5F5] focus:border-[#007BFF] focus:outline-none transition-colors duration-200 disabled:opacity-50"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-[#F5F5F5] mb-2 font-medium text-sm">
                  <Mail size={16} className="inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#333333] rounded-lg text-[#F5F5F5] focus:border-[#007BFF] focus:outline-none transition-colors duration-200 disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-[#F5F5F5] mb-2 font-medium text-sm">
                  <MessageSquare size={16} className="inline mr-2" />
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#333333] rounded-lg text-[#F5F5F5] focus:border-[#007BFF] focus:outline-none transition-colors duration-200 resize-none disabled:opacity-50"
                  placeholder={`Tell me why you're interested in my ${documentType.toLowerCase()}...`}
                />
              </div>

              {/* Status Message */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 rounded-lg flex items-start space-x-3 ${
                    submitStatus.type === "success"
                      ? "bg-green-900/20 border border-green-600/30 text-green-400"
                      : "bg-red-900/20 border border-red-600/30 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    submitStatus.automated ? (
                      <Zap size={16} className="mt-0.5 flex-shrink-0" />
                    ) : (
                      <CheckCircle size={16} className="mt-0.5 flex-shrink-0" />
                    )
                  ) : (
                    <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                  )}
                  <span className="text-xs leading-relaxed">{submitStatus.message}</span>
                </motion.div>
              )}

              {/* Info Box */}
              <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-3">
                <p className="text-blue-400 text-sm">
                  <strong>📧 What happens next?</strong>
                </p>
                <p className="text-[#F5F5F5]/80 text-xs mt-1">
                  I'll send the {documentType.toLowerCase()} directly to your email within 24 hours, along with any
                  additional materials you might find useful.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex space-x-3 pt-2">
                <motion.button
                  type="button"
                  onClick={handleClose}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-4 py-3 bg-[#333333] text-[#F5F5F5] rounded-lg hover:bg-[#404040] transition-colors duration-200 disabled:opacity-50"
                >
                  Cancel
                </motion.button>
                <motion.button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-4 py-3 bg-[#007BFF] text-white rounded-lg hover:bg-[#0056b3] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Download size={16} />
                      <span>Request {documentType}</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
