"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="home" className="py-20 sm:py-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm
            <br />
            <span className="text-primary">Marsilo Danang</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Fullstack Developer | Building modern web applications with clean code and beautiful design.
          </motion.p>
          <motion.a
            variants={itemVariants}
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors font-medium cursor-pointer"
          >
            View My Project
          </motion.a>
        </div>

        <motion.div variants={itemVariants} className="flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            className="relative w-full max-w-md aspect-square"
          >
            <Image
              src="/images/hero-image.jpg"
              alt="Developer workspace"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
