"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Education from "@/components/education"
import Projects from "@/components/projects"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import SectionDivider from "@/components/section-divider"

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showDivider, setShowDivider] = useState(false)
  const [dividerPosition, setDividerPosition] = useState(0)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDark(true)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", isDark ? "dark" : "light")
    }
  }, [isDark, mounted])

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      setShowDivider(true)
      setDividerPosition(window.scrollY)

      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setShowDivider(false)
      }, 3000)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  if (!mounted) return null

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <SectionDivider isVisible={showDivider} />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <Education />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
