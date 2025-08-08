"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import EducationSection from "@/components/education-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import DetailedProjectsSection from "@/components/detailed-projects-section"
import SkillsSection from "@/components/skills-section"
import AchievementsSection from "@/components/achievements-section"
import ServicesSection from "@/components/services-section"
import TimelineSection from "@/components/timeline-section"
import InterestsSection from "@/components/interests-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Loader from "@/components/loader"
import ParticleBackground from "@/components/particle-background"

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-[#1A1A1A] text-[#F5F5F5] min-h-screen relative overflow-x-hidden">
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>

      {!isLoading && (
        <>
          <ParticleBackground />
          <Navigation />
          <main>
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <ExperienceSection />
            <AchievementsSection />
            <ProjectsSection />
            <DetailedProjectsSection />
            <ServicesSection />
            <SkillsSection />
            <TimelineSection />
            <InterestsSection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}
