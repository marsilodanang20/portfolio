"use client"

import { motion } from "framer-motion"
import {
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
} from "react-icons/si"

export default function About() {
  const skills = [
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "MySQL", icon: SiMysql, color: "#00758F" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 sm:py-32">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center"
      >
        &lt;About /&gt;
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-muted p-8 border border-border font-mono text-sm leading-relaxed overflow-x-auto mb-12"
      >
        <pre className="text-foreground">
          {`// about
const developer = {
  name: 'Marsilo Danang',
  role: 'Newbie Developer',
  location: 'Indonesia',
  passion: 'Building beautiful and performant web applications'
};`}
        </pre>
      </motion.div>

      <div>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-8 text-center"
        >
          Skills & Technologies
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-3 p-4 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <Icon className="w-8 h-8" style={{ color: skill.color }} />
                <span className="text-xs font-medium text-center">{skill.name}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
