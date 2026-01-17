"use client"

import { motion, type Variants } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Lanyard from "@/components/lanyard"

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center pt-24 pb-12 lg:pt-0 lg:pb-0 overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Lanyard Section: Above text on mobile for better visual flow, or below if text is prioritized */}
          {/* I will keep text on top for mobile (order-1) and lanyard below (order-2) as per standard UX */}

          {/* Typography Content */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col items-center lg:items-end text-center lg:text-right z-20">
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 shadow-sm backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] font-jakarta">
                  Web & Software Engineering
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-7xl lg:text-[6.5rem] font-black font-jakarta leading-[0.9] tracking-tighter mb-8 text-foreground"
            >
              Building <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-foreground via-foreground/80 to-foreground/40">
                Premium
              </span> <br />
              Experiences.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl lg:max-w-md font-sans font-light"
            >
              Hi, I&apos;m <span className="text-foreground font-semibold">Marsilo Danang W.</span> Specializing in creating high-performance web applications using <span className="text-foreground font-medium">Laravel</span> and <span className="text-foreground font-medium">Modern React</span>.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-end gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="group px-8 py-5 bg-primary text-primary-foreground rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:shadow-[0_20px_40px_-15px_rgba(var(--primary),0.3)] hover:-translate-y-1 active:scale-95 w-full sm:w-auto"
              >
                Let&apos;s Talk Business
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </a>
              <a
                href="#projects"
                className="px-8 py-5 border border-border bg-card/50 backdrop-blur-md hover:bg-muted text-foreground rounded-2xl font-bold transition-all active:scale-95 w-full sm:w-auto text-center"
              >
                View Projects
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-16 flex items-center justify-center lg:justify-end gap-12 opacity-60">
              <div className="flex flex-col items-center lg:items-end">
                <span className="text-3xl font-black font-jakarta tracking-tighter text-foreground">100%</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Satisfaction</span>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="flex flex-col items-center lg:items-end">
                <span className="text-3xl font-black font-jakarta tracking-tighter text-foreground">12+</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Completed</span>
              </div>
            </motion.div>
          </div>

          {/* Lanyard Card Interaction */}
          <motion.div
            variants={itemVariants}
            className="order-2 lg:order-1 lg:col-span-5 h-[450px] sm:h-[600px] lg:h-[800px] w-full flex items-center justify-center relative z-10"
          >
            <div className="w-full h-full relative group">
              <div className="absolute inset-x-0 top-0 bottom-0 bg-primary/5 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
              <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
