"use client"

import { motion, type Variants } from "framer-motion"
import { Layout, Smartphone, Database, Globe, Code2, LineChart } from "lucide-react"

const services = [
    {
        icon: Layout,
        title: "Landing Page Development",
        description: "Desain website modern dan responsif yang dirancang untuk mengonversi pengunjung menjadi pelanggan.",
    },
    {
        icon: Code2,
        title: "Dynamic Web Application",
        description: "Pengembangan aplikasi web kompleks berbasis Laravel atau Next.js dengan fitur kustom sesuai kebutuhan bisnis.",
    },
    {
        icon: Globe,
        title: "Company Profile Website",
        description: "Membangun kredibilitas bisnis Anda dengan website profil perusahaan yang profesional dan elegan.",
    },
    {
        icon: Database,
        title: "Admin Dashboard Systems",
        description: "Sistem manajemen data (CMS/ERP) yang efisien untuk mempermudah operasional bisnis Anda.",
    },
    {
        icon: Smartphone,
        title: "Responsive Design",
        description: "Tampilan website yang otomatis menyesuaikan dengan sempurna di semua perangkat (Desktop, Tablet, Mobile).",
    },
    {
        icon: LineChart,
        title: "Website Maintenance",
        description: "Layanan pemeliharaan, update keamanan, dan optimasi performa agar website tetap berjalan lancar.",
    },
]

export default function Services() {
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
            transition: { duration: 0.6, ease: "easeOut" },
        },
    }

    return (
        <section id="services" className="py-20 bg-muted/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Services</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Solusi digital komprehensif untuk membantu bisnis Anda berkembang di era digital.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="bg-background border border-border p-8 rounded-xl hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
