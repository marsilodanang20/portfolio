"use client"

import { motion, type Variants } from "framer-motion"
import Image from "next/image"
import { Github, ExternalLink, ArrowRight } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Distribusi Baznas",
      description: "Sistem informasi distribusi zakat BAZNAS Kabupaten Cirebon. Memudahkan pelacakan penyaluran dana zakat kepada penerima manfaat secara transparan dan akurat.",
      tech: ["Laravel", "PHP", "Bootstrap", "MySQL"],
      image: "/images/gambar7.png",
      github: "https://github.com/marsilodanang20/distribusi-zakat",
      demo: "https://distribusi-baznas.gt.tc",
      tags: ["Web App", "Management System"],
      features: "Real-time Tracking, Reporting, User Management"
    },
    {
      title: "Buku Tamu Baznas",
      description: "Platform digitalisasi buku tamu kantor BAZNAS. Menggantikan proses manual dengan sistem digital yang efisien untuk pendataan pengunjung dan keperluan administratif.",
      tech: ["Laravel", "PHP", "Bootstrap", "MySQL"],
      image: "/images/gambar8.png",
      github: "https://github.com/marsilodanang20/Bukutamu-Baznas",
      demo: "https://bukutamu-baznas.wuaze.com",
      tags: ["Digitalization", "Office Tool"],
      features: "Data Export, Guest Analytics, Secure Auth"
    },
    {
      title: "E-Commerce Laravel + Midtrans",
      description: "Platform toko online lengkap dengan integrasi pembayaran otomatis. Mendukung manajemen produk, keranjang belanja, dan notifikasi real-time.",
      tech: ["Laravel", "PHP", "Bootstrap", "MySQL", "Midtrans"],
      image: "/images/gambar9.png",
      github: "Private Repository",
      demo: "https://autoklinik.wuaze.com",
      tags: ["E-Commerce", "Payment Gateway"],
      features: "Payment Integration, Order Management, Real-time status"
    },
    {
      title: "Auto Klinik",
      description: "E-commerce spesialis penjualan sparepart motor. Menyediakan antarmuka yang ramah pengguna untuk pencarian dan pembelian suku cadang kendaraan.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/images/gambar1.png",
      github: "https://github.com/marsilodanang20/web",
      demo: "https://marsilodanang20.github.io/web/",
      tags: ["Frontend", "E-Commerce"],
      features: "Responsive Design, Product Catalog, Search Filter"
    },
    {
      title: "Portal Desa Ciawiasih",
      description: "Portal resmi desa pelayanan publik dan informasi digital. Membantu transparansi pemerintahan desa dan aksesibilitas layanan bagi warga.",
      tech: ["React", "Next.js", "TypeScript"],
      image: "/images/gambar2.png",
      github: "https://github.com/marsilodanang20/portal_desa",
      demo: "https://profildesaciawiasih.vercel.app/",
      tags: ["Public Service", "Portal"],
      features: "News Portal, Public Service Info, Interactive Map"
    },
    {
      title: "UMKM Desa Ciawiasih",
      description: "Marketplace lokal untuk pemberdayaan UMKM desa. Wadah promosi produk-produk lokal agar dapat menjangkau pasar yang lebih luas.",
      tech: ["React", "Next.js", "TypeScript"],
      image: "/images/gambar3.png",
      github: "https://github.com/marsilodanang20/umkm_ciawiasih",
      demo: "https://profilumkmciawiasih.vercel.app/",
      tags: ["Marketplace", "SME Support"],
      features: "Product Showcase, Seller Profile, Direct Contact"
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">&lt;Featured Projects /&gt;</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of my best work, demonstrating my capability to solve real-world problems with code.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.github !== "Private Repository" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                      title="View Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                    {project.tags[0]}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{project.description}</p>

                <div className="mb-6">
                  <p className="text-sm font-semibold mb-2 text-foreground/80">Key Features:</p>
                  <p className="text-sm text-muted-foreground">{project.features}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border mt-auto">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs font-medium px-2 py-1 bg-muted text-muted-foreground rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <a href="https://github.com/marsilodanang20" target="_blank" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
            View more on GitHub <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
