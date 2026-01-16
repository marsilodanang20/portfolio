"use client"

import type React from "react"

import { motion, type Variants } from "framer-motion"
import { Mail, Github, Instagram, Twitter, Send, ArrowRight } from "lucide-react"
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
      color: "hover:text-foreground",
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="contact" className="py-20 sm:py-32 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
        >
          {/* Left Content: Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Have a project in mind or want to discuss a potential collaboration?
                I'm always open to new opportunities. Let's create something amazing together.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-background/50 hover:bg-background transition-colors shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Email Me</p>
                  <a href="mailto:marsilodanang20@gmail.com" className="text-lg font-bold hover:text-primary transition-colors">
                    marsilodanang20@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wide">Connect with me</p>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg bg-background ${link.color}`}
                      title={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Content: Form */}
          <div className="bg-card border border-border p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all min-h-[150px] resize-y"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
              >
                {isSubmitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
