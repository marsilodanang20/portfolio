"use client"

import { motion, type Variants } from "framer-motion"
import { ShieldCheck, Zap, HeartHandshake, Layers } from "lucide-react"

export default function ValueProposition() {
    const values = [
        {
            icon: ShieldCheck,
            title: "Clean & Secure Code",
            description: "Built with industry standards to ensure your application is secure, maintainable, and bug-free."
        },
        {
            icon: Zap,
            title: "High Performance",
            description: "Optimized for speed and efficiency to provide the best user experience and SEO ranking."
        },
        {
            icon: Layers,
            title: "Scalable Architecture",
            description: "Designed to grow with your business, handling increased traffic and new features effortlessly."
        },
        {
            icon: HeartHandshake,
            title: "Client-Centric Approach",
            description: "Communication is key. I work closely with you to ensure the final product meets your exact vision."
        }
    ]

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    }

    return (
        <section className="py-20 bg-primary/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Why Work With Me?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        More than just code, I deliver value and reliability for your business success.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {values.map((val, idx) => {
                        const Icon = val.icon
                        return (
                            <motion.div key={idx} variants={itemVariants} className="text-center p-6">
                                <div className="mx-auto w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-sm mb-6 text-primary border border-border">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{val.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{val.description}</p>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
