"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <footer className="border-t border-border mt-20 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-8">
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ x: 5 }}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">© {currentYear} Marsilodanang. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  )
}
