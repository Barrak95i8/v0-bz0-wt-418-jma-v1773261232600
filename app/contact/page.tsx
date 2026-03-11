'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ChevronRight, Phone, Mail, MessageCircle, MapPin, Clock, ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import { FilingModal } from '@/components/FilingModal'

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
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
}

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', subject: '', message: '' })
    alert('Thank you! We\'ll get back to you soon.')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-semibold">Back</span>
          </Link>
          <h1 className="text-xl font-bold">Contact Us</h1>
          <div className="w-16" />
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question? Our team is here to help. Reach out using any method below.
          </motion.p>
        </motion.section>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Contact Methods */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <motion.div
              variants={itemVariants}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/20 transition"
            >
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-sm text-muted-foreground mb-3">Available Mon–Fri, 9 AM–9 PM ET</p>
                  <a href="tel:1-800-TAXEASE" className="text-accent text-sm font-semibold hover:text-accent/80 transition">
                    1-800-TAXEASE
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/20 transition"
            >
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-sm text-muted-foreground mb-3">We respond within 2 hours</p>
                  <a href="mailto:support@taxease.ca" className="text-accent text-sm font-semibold hover:text-accent/80 transition">
                    support@taxease.ca
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/20 transition"
            >
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Live Chat</h3>
                  <p className="text-sm text-muted-foreground mb-3">24/7 support available</p>
                  <button className="text-accent text-sm font-semibold hover:text-accent/80 transition">
                    Start Chat
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-accent/5 border border-accent/20 rounded-lg p-6"
            >
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-2">Response Times</h3>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>Email: 2 hours during business hours</li>
                    <li>Chat: Instant 24/7</li>
                    <li>Phone: Mon–Fri 9 AM–9 PM ET</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Contact Form */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-card border border-border rounded-lg p-6"
          >
            <motion.h2 variants={itemVariants} className="text-xl font-bold mb-3">
              Send us a Message
            </motion.h2>
            <form onSubmit={handleSubmit} className="space-y-2">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full text-sm"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full text-sm"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <Input
                  type="text"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full text-sm"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-1">Message</label>
                <Textarea
                  placeholder="Tell us more..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  required
                  className="w-full resize-none text-sm"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.section>
        </div>

        {/* Ready to File CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="bg-primary text-primary-foreground rounded-lg p-6 md:p-8 text-center mt-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to file?</h2>
          <p className="text-primary-foreground/90 mb-4 max-w-2xl mx-auto text-sm">
            Get your maximum refund with TaxEase. Simple, secure, Canadian tax filing in under 15 minutes.
          </p>
          <Button 
            onClick={() => setIsModalOpen(true)}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
          >
            File Now <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.section>
      </main>

      <FilingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Footer */}
      <footer className="border-t border-border bg-card py-6 mt-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <div>
              <h3 className="font-bold mb-3">TaxEase</h3>
              <p className="text-xs text-muted-foreground">Canadian tax filing made simple.</p>
            </div>
            <div>
              <h4 className="font-semibold text-xs mb-3">Product</h4>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li><a href="/#features" className="hover:text-foreground transition">Features</a></li>
                <li><a href="/#pricing" className="hover:text-foreground transition">Pricing</a></li>
                <li><a href="/#faq" className="hover:text-foreground transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-xs mb-3">Legal</h4>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-foreground transition">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-foreground transition">Terms</Link></li>
                <li><Link href="/security" className="hover:text-foreground transition">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-xs mb-3">Support</h4>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li><Link href="/help" className="hover:text-foreground transition">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-foreground transition">Contact</Link></li>
                <li><Link href="/careers" className="hover:text-foreground transition">Careers</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-2">
            <p>&copy; 2025 TaxEase Canada. All rights reserved.</p>
            <p>CRA EFILE Certified | PIPEDA Compliant</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
