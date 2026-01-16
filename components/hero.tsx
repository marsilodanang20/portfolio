"use client"

import { motion, type Variants } from "framer-motion"
import { ArrowRight, Database, Code2 } from "lucide-react"
import Lanyard from "@/components/lanyard"

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="home" className="pt-24 pb-12 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 flex items-start min-h-[calc(100vh-80px)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full"
        >
          {/* Left Content (Text) */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left z-20 relative">
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium border border-primary/20 backdrop-blur-sm">
                Professional Web Developer
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
              Hi, I&apos;m <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 block my-2">
                Marsilo Danang
              </span>
              <span className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-muted-foreground block">
                And I&apos;m a Web Developer
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              I help businesses and startups create high-performance web applications using Laravel and Modern Frontend Technologies. Clean code, secure, and built to scale.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="px-6 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg hover:shadow-primary/20 hover:-translate-y-1 text-sm sm:text-base"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="px-6 py-3 sm:px-8 sm:py-4 border border-input bg-background hover:bg-muted text-foreground rounded-lg font-medium transition-colors flex items-center gap-2 text-sm sm:text-base"
              >
                View Portfolio
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10 sm:mt-12 flex justify-center lg:justify-start items-center gap-6 sm:gap-10 text-muted-foreground grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-3">
                <span className="font-bold text-2xl sm:text-3xl text-foreground">100%</span>
                <span className="text-xs sm:text-sm leading-tight text-left">Client<br />Satisfaction</span>
              </div>
              <div className="w-px h-10 bg-border"></div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-2xl sm:text-3xl text-foreground">10+</span>
                <span className="text-xs sm:text-sm leading-tight text-left">Projects<br />Completed</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content: Lanyard Interaction */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 flex justify-center lg:justify-end h-[500px] sm:h-[600px] lg:h-[700px] w-full relative z-10 -mt-10 lg:mt-0"
          >
            <Lanyard position={[0, 0, 10]} gravity={[0, -40, 0]} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
