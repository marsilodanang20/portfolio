"use client"

import { motion } from "framer-motion"

export default function Education() {
  const educationData = [
    {
      level: "Elementary School",
      school: "SDN 1 KARANGWANGUN",
      year: "2010 - 2016",
    },
    {
      level: "Junior High School",
      school: "MTsN 1 CIREBON",
      year: "2016 - 2019",
    },
    {
      level: "Senior High School",
      school: "MA AL-HIKMAH CIREBON",
      year: "2019 - 2022",
    },
    {
      level: "Bachelor of Informatics Engineering",
      school: "UNIVERSITAS MUHAMMADIYAH CIREBON",
      year: "2022 - Present",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section id="education" className="py-20 sm:py-32">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center"
      >
        &lt;Education /&gt;
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-4"
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ x: 5 }}
            className="border-l-2 border-primary pl-6 py-4 hover:border-primary transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <h3 className="font-bold text-lg text-foreground">{edu.level}</h3>
              <span className="text-sm text-muted-foreground">{edu.year}</span>
            </div>
            <p className="text-muted-foreground">{edu.school}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
