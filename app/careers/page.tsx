'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronRight, Users, Zap, Heart, Target, MapPin, Briefcase, ArrowLeft } from 'lucide-react'

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

const values = [
  {
    icon: Users,
    title: 'People First',
    description: 'We believe in building a team where everyone can do their best work.',
  },
  {
    icon: Zap,
    title: 'Impact Driven',
    description: 'We\'re on a mission to simplify taxes for every Canadian.',
  },
  {
    icon: Heart,
    title: 'Trust & Integrity',
    description: 'We handle sensitive financial data with the utmost care and responsibility.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We sweat the details and take pride in what we build.',
  },
]

const openPositions = [
  {
    title: 'Full Stack Engineer',
    department: 'Engineering',
    location: 'Toronto, ON',
    type: 'Full-time',
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Tax Compliance Specialist',
    department: 'Compliance',
    location: 'Vancouver, BC',
    type: 'Full-time',
  },
  {
    title: 'Customer Support Lead',
    department: 'Support',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Toronto, ON',
    type: 'Full-time',
  },
  {
    title: 'Data Analyst',
    department: 'Analytics',
    location: 'Remote',
    type: 'Full-time',
  },
]

export default function Careers() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-semibold">Back</span>
          </Link>
          <h1 className="text-xl font-bold">Careers</h1>
          <div className="w-16" />
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            Join the TaxEase Team
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're building the future of tax filing in Canada. If you're passionate about simplifying complex problems and helping millions of Canadians, we'd love to meet you.
          </motion.p>
        </motion.section>

        {/* Company Culture Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12">
            Our Culture
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/20 transition text-center"
                >
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Perks Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-muted rounded-lg p-8 md:p-12 mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-center">
            Why Join TaxEase?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants}>
              <h3 className="font-semibold mb-2">Competitive Compensation</h3>
              <p className="text-sm text-muted-foreground">Industry-competitive salaries, equity packages, and benefits.</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="font-semibold mb-2">Flexible Work</h3>
              <p className="text-sm text-muted-foreground">Work from anywhere with flexible hours. We trust you to do your best work.</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="font-semibold mb-2">Growth & Learning</h3>
              <p className="text-sm text-muted-foreground">Professional development budget and mentorship from industry experts.</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="font-semibold mb-2">Health & Wellness</h3>
              <p className="text-sm text-muted-foreground">Comprehensive health coverage and wellness programs.</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="font-semibold mb-2">Impact Driven Mission</h3>
              <p className="text-sm text-muted-foreground">Help millions of Canadians simplify their taxes and get their refunds.</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="font-semibold mb-2">Diverse & Inclusive</h3>
              <p className="text-sm text-muted-foreground">We celebrate diverse perspectives and create an inclusive environment.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Open Positions */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-center">
            Open Positions
          </motion.h2>
          <div className="grid gap-4">
            {openPositions.map((position) => (
              <motion.div
                key={position.title}
                variants={itemVariants}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/20 transition"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-1">
                        {position.type}
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/5 whitespace-nowrap"
                  >
                    Apply Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Don't see your role?</h2>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            We're always looking for talented people. Send us your resume and tell us what you'd like to do.
          </p>
          <Link href="/contact">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Get in Touch <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.section>
      </main>

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
                <li><Link href="/#features" className="hover:text-foreground transition">Features</Link></li>
                <li><Link href="/#pricing" className="hover:text-foreground transition">Pricing</Link></li>
                <li><Link href="/#faq" className="hover:text-foreground transition">FAQ</Link></li>
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
