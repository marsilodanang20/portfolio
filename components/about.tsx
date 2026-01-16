"use client"

import { motion, type Variants } from "framer-motion"
import { Server, Layout, Database, Wrench } from "lucide-react"

export default function About() {
  const skills = {
    backend: [
      { name: "Laravel", level: "Expert" },
      { name: "PHP", level: "Expert" },
      { name: "Python", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" },
      { name: "REST API", level: "Expert" },
    ],
    frontend: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
    ],
    database: [
      { name: "MySQL", level: "Expert" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Database Design", level: "Advanced" },
    ],
    tools: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "VS Code", level: "Expert" },
      { name: "Postman", level: "Advanced" },
      { name: "Composer", level: "Expert" },
    ],
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">&lt;About Me /&gt;</h2>
          <div className="max-w-3xl mx-auto text-center space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              I am a professional <strong>Fullstack Web Developer</strong> with a strong focus on building scalable, high-performance web applications. My expertise lies in bridging the gap between complex backend logic and intuitive frontend experiences.
            </p>
            <p>
              With deep proficiency in <strong>Laravel</strong> and modern JavaScript frameworks like <strong>Next.js</strong>, I help businesses transform their requirements into robust digital solutions. I prioritize clean code architecture, security, and user-centric design in every project I undertake.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Backend */}
          <motion.div variants={itemVariants} className="bg-muted/30 p-6 rounded-xl border border-border">
            <div className="flex items-center gap-3 mb-6 text-primary">
              <Server className="w-6 h-6" />
              <h3 className="font-bold text-lg">Backend</h3>
            </div>
            <ul className="space-y-3">
              {skills.backend.map((skill, idx) => (
                <li key={idx} className="flex justify-between items-center text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground text-xs bg-muted px-2 py-1 rounded">{skill.level}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Frontend */}
          <motion.div variants={itemVariants} className="bg-muted/30 p-6 rounded-xl border border-border">
            <div className="flex items-center gap-3 mb-6 text-primary">
              <Layout className="w-6 h-6" />
              <h3 className="font-bold text-lg">Frontend</h3>
            </div>
            <ul className="space-y-3">
              {skills.frontend.map((skill, idx) => (
                <li key={idx} className="flex justify-between items-center text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground text-xs bg-muted px-2 py-1 rounded">{skill.level}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Database */}
          <motion.div variants={itemVariants} className="bg-muted/30 p-6 rounded-xl border border-border">
            <div className="flex items-center gap-3 mb-6 text-primary">
              <Database className="w-6 h-6" />
              <h3 className="font-bold text-lg">Database</h3>
            </div>
            <ul className="space-y-3">
              {skills.database.map((skill, idx) => (
                <li key={idx} className="flex justify-between items-center text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground text-xs bg-muted px-2 py-1 rounded">{skill.level}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div variants={itemVariants} className="bg-muted/30 p-6 rounded-xl border border-border">
            <div className="flex items-center gap-3 mb-6 text-primary">
              <Wrench className="w-6 h-6" />
              <h3 className="font-bold text-lg">Tools</h3>
            </div>
            <ul className="space-y-3">
              {skills.tools.map((skill, idx) => (
                <li key={idx} className="flex justify-between items-center text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground text-xs bg-muted px-2 py-1 rounded">{skill.level}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
