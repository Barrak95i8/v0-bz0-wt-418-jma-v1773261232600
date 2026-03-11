'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MessageCircle, Clock, FileText, ArrowLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { FilingModal } from '@/components/FilingModal'

export default function SupportPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
      transition: { type: 'spring', stiffness: 100 },
    },
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg group-hover:bg-primary/90 transition">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-primary">TaxEase</span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-3">
            We're Here to Help
          </motion.h1>
          <motion.p variants={itemVariants} className="text-muted-foreground max-w-2xl mx-auto">
            Our support team is available 24/7. Choose your preferred way to get in touch.
          </motion.p>
        </motion.section>

        {/* Contact Methods */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-4 mb-12"
        >
          {/* Phone */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-lg p-4 hover:shadow-lg hover:border-primary/20 transition"
          >
            <div className="bg-accent/10 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
              <Phone className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-semibold mb-1">Call Us</h3>
            <p className="text-xs text-muted-foreground mb-3">
              Mon–Fri, 9 AM–9 PM ET
            </p>
            <a href="tel:1-800-TAXEASE" className="text-accent text-sm font-semibold hover:text-accent/80 transition">
              1-800-TAXEASE
            </a>
          </motion.div>

          {/* Email */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-lg p-4 hover:shadow-lg hover:border-primary/20 transition"
          >
            <div className="bg-accent/10 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-semibold mb-1">Email Us</h3>
            <p className="text-xs text-muted-foreground mb-3">
              2-hour response time
            </p>
            <a href="mailto:support@taxease.ca" className="text-accent text-sm font-semibold hover:text-accent/80 transition">
              support@taxease.ca
            </a>
          </motion.div>

          {/* Chat */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-lg p-4 hover:shadow-lg hover:border-primary/20 transition"
          >
            <div className="bg-accent/10 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
              <MessageCircle className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-semibold mb-1">Live Chat</h3>
            <p className="text-xs text-muted-foreground mb-3">
              Available 24/7
            </p>
            <button className="text-accent text-sm font-semibold hover:text-accent/80 transition">
              Start Chat
            </button>
          </motion.div>
        </motion.section>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-card border border-border rounded-lg p-6"
          >
            <motion.h2 variants={itemVariants} className="text-xl font-bold mb-4">
              Send us a Message
            </motion.h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full text-sm"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full text-sm"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <Input
                  type="text"
                  placeholder="How can we help?"
                  required
                  className="w-full text-sm"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-1">Message</label>
                <Textarea
                  placeholder="Tell us more..."
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

              {formSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 rounded p-4 text-green-800 text-sm"
                >
                  Thank you! We'll get back to you within 2 hours.
                </motion.div>
              )}
            </form>
          </motion.section>

          {/* FAQ Quick Links */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-3"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-xl font-bold mb-4">Common Questions</h2>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-sm mb-1">What documents do I need?</h3>
              <p className="text-xs text-muted-foreground">
                T4/T4A, Notice of Assessment, and deduction receipts. We provide a checklist.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-sm mb-1">How long does filing take?</h3>
              <p className="text-xs text-muted-foreground">
                10-15 minutes for most filers. Complex returns take up to 30 minutes.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-sm mb-1">Is my data secure?</h3>
              <p className="text-xs text-muted-foreground">
                Yes. Bank-level encryption, PIPEDA compliant. Data never shared.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-sm mb-1">When will I get my refund?</h3>
              <p className="text-xs text-muted-foreground">
                CRA processes within 3-5 business days. We'll keep you updated.
              </p>
            </motion.div>
          </motion.section>
        </div>

        {/* Conversion CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center my-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to file?</h2>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
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
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                  <FileText className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-primary">TaxEase</span>
              </div>
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
            <p>&copy; 2024 TaxEase Canada. All rights reserved.</p>
            <p>CRA EFILE Certified | PIPEDA Compliant | Encrypted</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
