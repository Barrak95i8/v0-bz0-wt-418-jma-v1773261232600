'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronRight, Search, BookOpen, HelpCircle, MessageCircle, FileText, ArrowLeft } from 'lucide-react'
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

const helpCategories = [
  {
    title: 'Getting Started',
    icon: BookOpen,
    articles: [
      { title: 'How to Create an Account', href: '#' },
      { title: 'Document Checklist for Filing', href: '#' },
      { title: 'Understanding Your Tax Return', href: '#' },
      { title: 'Mobile App Setup Guide', href: '#' },
    ],
  },
  {
    title: 'Filing Your Taxes',
    icon: FileText,
    articles: [
      { title: 'Step-by-Step Filing Guide', href: '#' },
      { title: 'T4 vs T4A: What\'s the Difference?', href: '#' },
      { title: 'Adding Deductions & Credits', href: '#' },
      { title: 'FHSA Contribution Guide', href: '#' },
    ],
  },
  {
    title: 'Account & Security',
    icon: HelpCircle,
    articles: [
      { title: 'Reset Your Password', href: '#' },
      { title: 'Two-Factor Authentication Setup', href: '#' },
      { title: 'How We Protect Your Data', href: '#' },
      { title: 'Account Recovery Options', href: '#' },
    ],
  },
  {
    title: 'Refunds & Payments',
    icon: MessageCircle,
    articles: [
      { title: 'When Will I Get My Refund?', href: '#' },
      { title: 'Direct Deposit Setup', href: '#' },
      { title: 'CRA Audit: What To Expect', href: '#' },
      { title: 'Amend a Previous Return', href: '#' },
    ],
  },
]

export default function HelpPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-semibold">Back</span>
          </Link>
          <h1 className="text-xl font-bold">Help Center</h1>
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
            Help Center
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Find answers to common questions about TaxEase. Our knowledge base covers everything from getting started to filing your taxes.
          </motion.p>

          {/* Search Bar */}
          <motion.div variants={itemVariants} className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-card"
            />
          </motion.div>
        </motion.section>

        {/* Categories Grid */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {helpCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/20 transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                </div>

                <ul className="space-y-2">
                  {category.articles.map((article) => (
                    <li key={article.title}>
                      <a
                        href={article.href}
                        className="text-sm text-accent hover:text-accent/80 transition flex items-center gap-2 group"
                      >
                        {article.title}
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.section>

        {/* Still Need Help Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="bg-muted rounded-lg p-8 md:p-12 text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Still need help?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our support team is available 24/7 to answer your questions.
          </p>
          <Link href="/support">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Contact Support <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.section>

        {/* Ready to File CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center"
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
