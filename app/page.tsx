"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Services from "@/components/services"
import VelocityScroll from "@/components/velocity-scroll"
import About from "@/components/about"
import ValueProposition from "@/components/value-proposition"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import SplashCursor from "@/components/splash-cursor"
import SectionDivider from "@/components/section-divider"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [showDivider, setShowDivider] = useState(false)

  useEffect(() => {
    setMounted(true)

    let scrollTimeout: ReturnType<typeof setTimeout>
    const handleScroll = () => {
      setShowDivider(true)
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setShowDivider(false)
      }, 2000)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden">
      <SplashCursor />
      <SectionDivider isVisible={showDivider} />
      <Header />

      <main className="relative flex flex-col w-full">
        <Hero />

        <div className="relative z-10 bg-background">
          <VelocityScroll />

          <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-32 py-20 sm:py-32 lg:py-48">
            <ValueProposition />
            <Services />
            <Projects />
            <About />
            <Contact />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
