"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Brain, BarChart3, ShoppingCart, Database, Smartphone } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack web applications using React, Node.js, and modern frameworks",
    features: ["Responsive Design", "API Integration", "Performance Optimization"],
  },
  {
    icon: Brain,
    title: "AI/ML Solutions",
    description: "Intelligent systems using NLP, machine learning, and data analysis",
    features: ["Chatbot Development", "Data Processing", "Predictive Analytics"],
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Transform raw data into actionable insights and visualizations",
    features: ["Business Intelligence", "Statistical Analysis", "Dashboard Creation"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms with payment integration and SEO",
    features: ["Shopify Development", "SEO Optimization", "Inventory Management"],
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Efficient database architecture and optimization for scalable applications",
    features: ["SQL Optimization", "Data Modeling", "Performance Tuning"],
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive applications optimized for all devices and screen sizes",
    features: ["Cross-Platform", "User Experience", "Performance"],
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I <span className="text-[#007BFF]">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-[#007BFF] mx-auto mb-6"></div>
          <p className="text-xl text-[#F5F5F5]/80 max-w-3xl mx-auto">
            I provide comprehensive technical solutions combining academic knowledge with real-world experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#2B2B2B] rounded-lg p-6 hover:bg-[#333333] transition-all duration-300 group"
            >
              <div className="bg-[#007BFF]/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#007BFF]/30 transition-colors duration-300">
                <service.icon className="text-[#007BFF]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#F5F5F5] mb-3">{service.title}</h3>
              <p className="text-[#F5F5F5]/80 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-[#F5F5F5]/70 flex items-center text-sm">
                    <span className="text-[#007BFF] mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
