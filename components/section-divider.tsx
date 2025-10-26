"use client"

import { motion } from "framer-motion"

interface SectionDividerProps {
  isVisible: boolean
}

export default function SectionDivider({ isVisible }: SectionDividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 pointer-events-none z-40"
    >
      <div className="w-full h-full grid grid-cols-12 gap-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 0.3 : 0 }}
            transition={{ duration: 0.3 }}
            className="border-r border-primary/30"
          />
        ))}
      </div>
      <div className="absolute inset-0 grid grid-rows-12 gap-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`row-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 0.3 : 0 }}
            transition={{ duration: 0.3 }}
            className="border-b border-primary/30"
          />
        ))}
      </div>
    </motion.div>
  )
}
