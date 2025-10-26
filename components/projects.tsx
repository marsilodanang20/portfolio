"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "AUTO KLINIK",
      description: "E-commerce penjualan sparepart motor dengan fitur lengkap untuk manajemen produk dan penjualan.",
      tech: ["HTML", "CSS", "JavaScript", "MySQL"],
      image: "/images/gambar1.png",
      github: "https://github.com/marsilodanang20/web",
      demo: "https://marsilodanang20.github.io/web/",
    },
    {
      title: "Portal Desa Ciawiasih",
      description: "Portal desa dengan layanan desa, informasi, dan publikasi digital untuk masyarakat desa.",
      tech: ["React", "Next.js", "TypeScript"],
      image: "/images/gambar2.png",
      github: "https://github.com/marsilodanang20/portal_desa",
      demo: "https://profildesaciawiasih.vercel.app/",
    },
    {
      title: "UMKM Desa Ciawiasih",
      description: "Platform profil UMKM desa untuk menampilkan produk dan layanan usaha mikro kecil menengah.",
      tech: ["React", "Next.js", "TypeScript"],
      image: "/images/gambar3.png",
      github: "https://github.com/marsilodanang20/umkm_ciawiasih",
      demo: "https://profilumkmciawiasih.vercel.app/",
    },
    {
      title: "Advantage Dealer Motor",
      description: "Sistem inventaris dan penjualan untuk dealer motor dengan dashboard admin yang komprehensif.",
      tech: ["PHP", "Bootstrap", "JavaScript", "MySQL"],
      image: "/images/gambar4.png",
      github: "https://github.com/marsilodanang20/App_dealermotor",
      demo: "coming-soon",
    },
    {
      title: "UMKM Jagapura Lor",
      description: "Platform profil UMKM desa Jagapura Lor untuk showcase produk dan layanan lokal.",
      tech: ["React", "Next.js", "TypeScript"],
      image: "/images/gambar5.png",
      github: "https://github.com/marsilodanang20/umkm-jagapura-lor",
      demo: "https://umkm-jagapura-lor.vercel.app/",
    },
    {
      title: "Tata Surya Edukasi",
      description: "Website edukasi interaktif tentang tata surya dengan visualisasi planet dan informasi lengkap.",
      tech: ["React", "Next.js", "TypeScript"],
      image: "/images/gambar6.png",
      github: "https://github.com/marsilodanang20/tatasurya",
      demo: "https://tatasurya-eight.vercel.app/",
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
    <section id="projects" className="py-20 sm:py-32">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center"
      >
        &lt;Projects /&gt;
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="border-2 border-foreground overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-48 overflow-hidden bg-muted">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="text-xs px-2 py-1 border border-foreground rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 border border-foreground text-sm hover:bg-foreground hover:text-background transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </motion.a>
                {project.demo !== "coming-soon" && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 border border-foreground text-sm hover:bg-foreground hover:text-background transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </motion.a>
                )}
                {project.demo === "coming-soon" && (
                  <span className="flex items-center gap-2 px-4 py-2 border border-muted-foreground text-sm text-muted-foreground">
                    <ExternalLink className="w-4 h-4" />
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
