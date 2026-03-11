'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight, FileText, CheckCircle, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FilingModal } from '@/components/FilingModal'

export default function Terms() {
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
            Terms of Service
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
            Simple terms for Canadian tax filing. No surprises, no fine print.
          </motion.p>
        </motion.section>

        {/* Key Points */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-4 mb-12"
        >
          <motion.div variants={itemVariants} className="bg-accent/10 border border-accent/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Simple & Transparent</p>
                <p className="text-xs text-muted-foreground">No hidden fees or surprise charges</p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-accent/10 border border-accent/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Your Responsibility</p>
                <p className="text-xs text-muted-foreground">You're responsible for accuracy</p>
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
          {/* Who Can Use TaxEase */}
          <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Who Can Use TaxEase?</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>TaxEase is for Canadian residents who:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Are 18 years or older</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Have a valid Social Insurance Number (SIN)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>File taxes with Canada Revenue Agency (CRA)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Agree to provide accurate information</span>
                </li>
              </ul>
              <p className="border-t border-border pt-3 mt-3">
                By using TaxEase, you confirm you meet these requirements.
              </p>
            </div>
          </motion.section>

          {/* Your Responsibilities */}
          <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Your Responsibilities</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">You are responsible for:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Providing accurate and complete information</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Reviewing your tax return before submission</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Keeping your login credentials secure</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Reporting any unauthorized account access immediately</span>
                </li>
              </ul>
              <p className="border-t border-border pt-3 mt-3">
                <strong>Important:</strong> If we discover intentional fraud, we'll report it to CRA and cooperate with investigations.
              </p>
            </div>
          </motion.section>

          {/* What TaxEase Provides */}
          <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">What TaxEase Provides</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>We provide:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Step-by-step tax filing guidance</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Secure electronic submission to CRA EFILE</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Refund tracking and status updates</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>24/7 support for filing assistance</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* What TaxEase Doesn't Do */}
          <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">What TaxEase Doesn't Do</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>We do NOT:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Provide legal or accounting advice (consult a professional for complex matters)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Guarantee specific refund amounts</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Represent you in CRA disputes or audits</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>File provincial returns (federal only)</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Service Level & Availability */}
          <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Service Availability</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                TaxEase is available 24/7 during tax season. We may perform maintenance that could cause temporary interruptions. We'll notify you 48 hours in advance.
              </p>
              <p>
                CRA EFILE accepts returns year-round, but refunds are processed faster during tax season.
              </p>
            </div>
          </motion.section>

          {/* Pricing & Payment */}
          <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Pricing & Payment</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Current Pricing:</p>
              <p className="text-lg font-bold text-primary">
                $149 CAD for federal tax filing
              </p>
              <ul className="space-y-2 ml-4 mt-3">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>One-time fee per return</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>No additional hidden charges</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Payment due at checkout before filing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Refunds available for cancelled returns (within 7 days)</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Limitation of Liability */}
          <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">What We're Not Liable For</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                TaxEase is provided "as is." We're not responsible for:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Errors in information you provide</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>CRA audit outcomes or reassessments</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Service interruptions due to technology issues</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Third-party services (like CRA systems)</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Changes to Terms */}
          <motion.section variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Changes to These Terms</h2>
            <p className="text-sm text-muted-foreground">
              We may update these terms anytime. You'll be notified by email if changes affect your use. Continued use means you accept the updates.
            </p>
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
          <h2 className="text-3xl font-bold mb-3">Agree with our terms?</h2>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Start filing your Canadian taxes with confidence. Clear terms, transparent pricing, zero surprises.
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
