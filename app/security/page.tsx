'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight, Lock, Server, Shield, BadgeCheck, AlertTriangle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FilingModal } from '@/components/FilingModal'

export default function Security() {
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
            Your Security, Our Priority
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
            We use the same security standards as Canadian banks to protect your tax information.
          </motion.p>
        </motion.section>

        {/* Trust Badges */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-4 mb-12"
        >
          <motion.div variants={itemVariants} className="bg-accent/10 border border-accent/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <BadgeCheck className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">CRA Certified</p>
                <p className="text-xs text-muted-foreground">Approved EFILE provider</p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-accent/10 border border-accent/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Bank-Level Encryption</p>
                <p className="text-xs text-muted-foreground">AES-256 standard</p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-accent/10 border border-accent/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Server className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Canadian Servers</p>
                <p className="text-xs text-muted-foreground">Data stays in Canada</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Content Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 mb-12"
        >
          {/* Encryption & Transmission */}
          <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6 text-primary" />
              Encryption & Data Transmission
            </h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">How we protect your data in transit:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>SSL/TLS encryption on every page (HTTPS only)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>AES-256 bit encryption (same as military standard)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>HSTS headers prevent downgrade attacks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>No data transmitted in plain text</span>
                </li>
              </ul>
              <p className="border-t border-border pt-3 mt-3">
                <strong>Translation:</strong> Your information is scrambled so thoroughly that even if hackers intercept it, they can't read it.
              </p>
            </div>
          </motion.section>

          {/* Data Storage */}
          <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Server className="w-6 h-6 text-primary" />
              How We Store Your Data
            </h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Security measures for stored data:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Encrypted databases at rest (AES-256)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Data hosted on Canadian servers (PIPEDA compliant)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Automatic daily backups with redundancy</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Multi-layer access controls and authentication</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Audit logging for all data access</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* CRA Compliance */}
          <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BadgeCheck className="w-6 h-6 text-primary" />
              CRA EFILE Certified
            </h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                TaxEase is an official Canada Revenue Agency (CRA) EFILE certified service provider. This means:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Approved by CRA and Health Canada (federal)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Subject to rigorous CRA security audits</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Complies with CRA data protection requirements</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Regular security testing and compliance reviews</span>
                </li>
              </ul>
              <p className="border-t border-border pt-3 mt-3">
                <strong>What this means for you:</strong> CRA wouldn't certify us if we weren't secure. Your taxes are filed through verified, trusted channels.
              </p>
            </div>
          </motion.section>

          {/* PIPEDA Compliance */}
          <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">PIPEDA Compliant</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                PIPEDA (Personal Information Protection and Electronic Documents Act) is Canada's federal privacy law. TaxEase fully complies:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>You control your personal information</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>You can request to view, edit, or delete your data</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>We don't sell or share your data with third parties</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>We use data only for tax filing (no marketing tricks)</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Security Testing */}
          <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Regular Security Audits</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">We test our security continuously:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Third-party penetration testing (annual)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Vulnerability assessments and patching</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Security code reviews before every release</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Automated security scanning (continuous)</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Account Security */}
          <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              Protect Your Account
            </h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">What you can do:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Use a strong, unique password (12+ characters)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Enable two-factor authentication (2FA)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Never share your password via email or phone</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Log out after every session</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Report suspicious activity immediately</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* If Security is Breached */}
          <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-primary" />
              If We Discover a Breach
            </h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                In the unlikely event of a security breach, we will:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">1.</span>
                  <span>Immediately notify affected users by email</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">2.</span>
                  <span>Notify CRA within 72 hours (if tax data affected)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">3.</span>
                  <span>Provide credit monitoring if personal data exposed</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">4.</span>
                  <span>Publish a transparency report on our website</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Questions */}
          <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Security Questions?</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Our security team is ready to answer any concerns.
            </p>
            <a href="mailto:security@taxease.ca" className="text-accent font-semibold hover:text-accent/80">
              security@taxease.ca
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
          <h2 className="text-3xl font-bold mb-3">File with confidence</h2>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Bank-level security, CRA certified, and fully compliant with Canadian privacy laws. Your taxes are safe with us.
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
