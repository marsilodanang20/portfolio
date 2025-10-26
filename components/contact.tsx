"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Github, Instagram, Twitter } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/marsilodanang_",
      color: "hover:text-pink-500",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/marsilodanang20",
      color: "hover:text-gray-700 dark:hover:text-gray-300",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/Marsilodanang20",
      color: "hover:text-blue-500",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:marsilodanang20@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`
    window.location.href = mailtoLink
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitted(false)
    }, 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="contact" className="py-20 sm:py-32">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center"
      >
        &lt;Contact /&gt;
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-2 border-border p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full border-2 border-border rounded-lg px-4 py-2 bg-background focus:border-primary outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full border-2 border-border rounded-lg px-4 py-2 bg-background focus:border-primary outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full border-2 border-border rounded-lg px-4 py-2 bg-background focus:border-primary outline-none transition-colors resize-none"
                placeholder="Your message..."
                rows={5}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-3 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors font-medium rounded-lg"
            >
              {isSubmitted ? "Message Sent!" : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-center gap-6"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out through any of these channels. I'm always open to new opportunities and
              collaborations.
            </p>
          </motion.div>

          <div className="flex gap-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 border-2 border-border rounded-lg transition-all duration-300 ${link.color}`}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              )
            })}
          </div>

          <motion.a
            variants={itemVariants}
            href="mailto:marsilodanang20@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 p-4 border-2 border-primary bg-primary text-primary-foreground hover:shadow-lg transition-shadow rounded-lg"
          >
            <Mail className="w-6 h-6" />
            <div>
              <div className="font-bold">Email</div>
              <div className="text-sm">marsilodanang20@gmail.com</div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
