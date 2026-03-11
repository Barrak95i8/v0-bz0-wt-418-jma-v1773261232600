'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight, Lock, Eye, Trash2, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FilingModal } from '@/components/FilingModal'

export default function Privacy() {
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-primary">
            TaxEase
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm">
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            Your Privacy Matters
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
            We're transparent about how we collect, use, and protect your personal information.
          </motion.p>
        </motion.section>

        {/* Trust Badges */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-4 mb-12"
        >
          <motion.div variants={itemVariants} className="bg-accent/10 border border-accent/20 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm">PIPEDA Compliant</p>
                <p className="text-xs text-muted-foreground">Canadian privacy law certified</p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-accent/10 border border-accent/20 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm">Bank-Level Encryption</p>
                <p className="text-xs text-muted-foreground">AES-256 encryption standard</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Content Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 mb-12"
        >
          {/* What We Collect */}
          <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Eye className="w-6 h-6 text-primary" />
              What We Collect
            </h2>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                To help you file your taxes, we collect only what's necessary:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Your name, email, and contact information</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Income information from T4/T4A slips</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Deduction details (charitable donations, medical expenses, etc.)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Social Insurance Number (encrypted, only for CRA filing)</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* How We Use It */}
          <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Data</h2>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                Your information is used solely for:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Filing your tax return with CRA EFILE</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Calculating your maximum refund</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Sending filing updates and refund status</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Improving our service based on feedback</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground border-t border-border pt-3 mt-3">
                <strong>We never:</strong> Sell your data, share it with third parties (except CRA), or use it for marketing.
              </p>
            </div>
          </motion.section>

          {/* How We Protect It */}
          <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              How We Protect Your Data
            </h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                Your data is protected by industry-leading security measures:
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>AES-256 bit encryption for all data in transit and at rest</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>SSL/TLS certificates on every page</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Annual security audits and penetration testing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Secure servers hosted on Canadian infrastructure</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Limited employee access (audit trails logged)</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Data Retention & Deletion */}
          <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Trash2 className="w-6 h-6 text-primary" />
              Your Data, Your Control
            </h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong>Data Retention:</strong> We keep your data for 7 years (CRA requirement), then securely delete it.
              </p>
              <p>
                <strong>Your Rights:</strong> You can request to view, edit, or delete your data at any time. Contact support@taxease.ca to request data deletion.
              </p>
              <p>
                <strong>Opt-Out:</strong> You can unsubscribe from emails in any message footer. Unsubscribing doesn't delete your data—it just stops communications.
              </p>
            </div>
          </motion.section>

          {/* Cookies & Tracking */}
          <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Cookies & Tracking</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                We use minimal cookies for essential functions only (session, security). We don't track you across other websites.
              </p>
              <p>
                Optional analytics help us improve the service, but you can disable them anytime in your account settings.
              </p>
            </div>
          </motion.section>

          {/* Contact */}
          <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Questions?</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Our privacy team responds to inquiries within 48 hours.
            </p>
            <a href="mailto:privacy@taxease.ca" className="text-accent font-semibold hover:text-accent/80">
              privacy@taxease.ca
            </a>
          </motion.section>
        </motion.div>

        {/* Conversion CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="bg-primary text-primary-foreground rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-3">Ready to file securely?</h2>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Your data is protected with bank-level security. Start filing your Canadian taxes in minutes.
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
              <p className="font-bold text-primary mb-2">TaxEase</p>
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
            <p>Built with trust for Canadian taxpayers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
