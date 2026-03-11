'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Check, Shield, Zap, DollarSign, MessageCircle, FileText, Menu, X, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ModalStep {
  type: 'province' | 'complexity' | 'contact' | 'success'
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState<ModalStep['type']>('province')
  const [formData, setFormData] = useState({
    province: '',
    complexity: [] as string[],
    name: '',
    phone: '',
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  }

  const openModal = () => {
    setIsModalOpen(true)
    setCurrentStep('province')
    setFormData({ province: '', complexity: [], name: '', phone: '' })
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const nextStep = () => {
    if (currentStep === 'province' && formData.province) {
      setCurrentStep('complexity')
    } else if (currentStep === 'complexity' && formData.complexity.length > 0) {
      setCurrentStep('contact')
    } else if (currentStep === 'contact' && formData.name && formData.phone) {
      setCurrentStep('success')
    }
  }

  const handleComplexityChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      complexity: prev.complexity.includes(value)
        ? prev.complexity.filter((item) => item !== value)
        : [...prev.complexity, value],
    }))
  }

  const resetModal = () => {
    closeModal()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-primary">TaxEase</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
              Features
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition">
              Pricing
            </a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition">
              FAQ
            </a>
            <Button 
              onClick={openModal}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Start Filing
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-muted rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden border-t border-border bg-card p-4 space-y-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <a href="#features" className="block text-sm text-muted-foreground hover:text-foreground transition">
              Features
            </a>
            <a href="#pricing" className="block text-sm text-muted-foreground hover:text-foreground transition">
              Pricing
            </a>
            <a href="#faq" className="block text-sm text-muted-foreground hover:text-foreground transition">
              FAQ
            </a>
            <Button 
              onClick={() => {
                openModal()
                setIsMenuOpen(false)
              }}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Start Filing
            </Button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
          <motion.div 
            className="grid md:grid-cols-2 gap-8 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-balance leading-tight">
                Your Canadian taxes, <span className="text-accent">simplified</span>
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                From T4 to FHSA to RRSP optimization—TaxEase handles it all.
                <br />
                Get filed in under 10 minutes and claim every deduction you deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={openModal}
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  Get My Max Refund <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-2">
                <div>
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Canadians filed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">$12M</div>
                  <div className="text-sm text-muted-foreground">Refunds claimed</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-white space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-white/80">QUICK START</p>
                  <h3 className="text-xl font-bold">Start your filing today</h3>
                </div>
                <div className="space-y-3 bg-white/10 rounded-lg p-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Province</p>
                    <p className="text-white/70">Select your home province</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Complexity</p>
                    <p className="text-white/70">Tell us about your income</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Contact</p>
                    <p className="text-white/70">We'll connect you with an expert</p>
                  </div>
                </div>
                <Button 
                  onClick={openModal}
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  Begin Now <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <motion.section 
        className="border-t border-b border-border bg-card"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-muted-foreground font-semibold mb-6">TRUSTED BY CANADIANS</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              <p className="text-sm font-medium">CRA EFILE Certified</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Zap className="w-6 h-6 text-accent" />
              <p className="text-sm font-medium">10 Min Filing</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <DollarSign className="w-6 h-6 text-primary" />
              <p className="text-sm font-medium">Maximum Refund</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MessageCircle className="w-6 h-6 text-accent" />
              <p className="text-sm font-medium">24/7 Support</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Everything you need for Canadian taxes
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              From common deductions to complex situations, we've got you covered.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {[
              {
                icon: FileText,
                title: 'T4/T4A Support',
                description: 'Automatically import your employment income and deductions.',
              },
              {
                icon: Zap,
                title: 'FHSA Ready',
                description: 'Maximize your First Home Savings Account contributions.',
              },
              {
                icon: DollarSign,
                title: 'Deduction Finder',
                description: 'Discover deductions you might have missed.',
              },
              {
                icon: Shield,
                title: 'CRA Audit Defense',
                description: 'We keep detailed records for CRA inquiries.',
              },
              {
                icon: Check,
                title: 'RRSP Optimizer',
                description: 'Get personalized RRSP contribution recommendations.',
              },
              {
                icon: MessageCircle,
                title: 'Expert Review',
                description: 'Optional human review by certified accountants.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow p-4">
                  <div className="space-y-2">
                    <feature.icon className="w-6 h-6 text-accent" />
                    <h3 className="font-semibold text-sm">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              onClick={openModal}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Start Filing Today <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 3-Step Process */}
      <motion.section 
        className="bg-secondary/30 py-16 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How TaxEase Works
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Answer Quick Questions',
                description: 'Tell us your province, income type, and any complex situations. Takes just 2 minutes.',
              },
              {
                step: '2',
                title: 'We Prepare Your Return',
                description: 'Our algorithm finds every deduction you qualify for using CRA rules.',
              },
              {
                step: '3',
                title: 'File & Get Your Refund',
                description: 'Review and file directly with CRA. Most refunds arrive in 5-7 business days.',
              },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
                {index < 2 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 text-accent">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              onClick={openModal}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Begin Your Filing <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Social Proof / Testimonials */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Loved by Canadian Filers
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {[
              {
                name: 'Marcus C.',
                role: 'Software Developer, ON',
                text: 'Saved me 2 hours vs. doing it manually. Found deductions I completely forgot about.',
                rating: 5,
              },
              {
                name: 'Sarah L.',
                role: 'Freelance Designer, BC',
                text: 'Perfect for self-employed income. Love that I can export records for my accountant.',
                rating: 5,
              },
              {
                name: 'David K.',
                role: 'Teacher, AB',
                text: 'Finally, something simple. No confusing jargon, just straightforward tax filing.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-accent">★</span>
                      ))}
                    </div>
                    <CardDescription className="text-foreground text-sm leading-relaxed">
                      "{testimonial.text}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <motion.section 
        id="pricing"
        className="bg-secondary/30 py-8 md:py-12 pb-20 md:pb-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-center mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Simple, Transparent Pricing
          </motion.h2>
          <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto text-sm">
            One fair price. No hidden fees. File for yourself or your family.
          </p>

          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <Card className="border-2 border-accent relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                BEST VALUE
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Complete Filing</CardTitle>
                <CardDescription className="text-xs">Everything included</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="text-3xl font-bold text-primary">$149</span>
                  <span className="text-muted-foreground ml-2 text-sm">CAD</span>
                </div>
                <ul className="space-y-2">
                  {[
                    'Complete tax return filing',
                    'T4/T4A, FHSA & RRSP support',
                    'Deduction optimization',
                    '24/7 expert support',
                    'CRA EFILE included',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-xs">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={openModal}
                  size="sm"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  Start Filing <ChevronRight className="w-3 h-3 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <section id="faq" className="py-8 md:py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {[
              {
                q: 'How long does filing take?',
                a: 'Most filers complete their return in under 10 minutes. Complex situations may take longer, but our interface guides you through each step.',
              },
              {
                q: 'Is my data secure?',
                a: 'We use bank-level encryption (AES-256) and comply with PIPEDA and CRA security requirements. Your data is never sold or shared.',
              },
              {
                q: 'Can I file for self-employed income?',
                a: 'Yes! We support T4As, contract income, and business income. You can upload your financial documents for our team to review.',
              },
              {
                q: 'What if I made a mistake?',
                a: 'We offer free amendments within 30 days of filing. Our team will review and refile with CRA if needed.',
              },
              {
                q: 'Do you guarantee my refund?',
                a: 'We find eligible deductions based on CRA rules and maximize your refund. Results vary by situation—most people get more than filing alone.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="border border-border rounded-lg p-6 hover:bg-muted/50 transition-colors cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground text-sm">{item.a}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 text-center bg-primary/5 rounded-lg p-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-3">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">Our support team is available 24/7 to help.</p>
            <a href="/support">
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
              >
                Contact Support
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <motion.section 
        className="bg-primary text-primary-foreground py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to get your maximum refund?
          </motion.h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of Canadians who've already filed with TaxEase. Your refund is waiting.
          </p>
          <Button 
            onClick={openModal}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
          >
            File Now <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </motion.section>

      {/* Modal */}
      {isModalOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={closeModal}
        >
          <motion.div 
            className="bg-card rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {currentStep === 'province' && (
              <div className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Where do you file taxes?</h2>
                  <p className="text-muted-foreground text-sm mt-1">Select your home province.</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {['Ontario', 'British Columbia', 'Alberta', 'Quebec', 'Manitoba', 'Saskatchewan'].map((prov) => (
                    <button
                      key={prov}
                      onClick={() => setFormData({ ...formData, province: prov })}
                      className={`p-3 rounded-lg text-sm font-medium border-2 transition ${
                        formData.province === prov
                          ? 'border-accent bg-accent/10 text-accent'
                          : 'border-border hover:border-muted-foreground'
                      }`}
                    >
                      {prov}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={closeModal} className="flex-1">
                    Cancel
                  </Button>
                  <Button 
                    onClick={nextStep} 
                    disabled={!formData.province}
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Next <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {currentStep === 'complexity' && (
              <div className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">What's your income situation?</h2>
                  <p className="text-muted-foreground text-sm mt-1">Select all that apply.</p>
                </div>
                <div className="space-y-3">
                  {['T4 Employment', 'T4A Contract Work', 'Self-Employment', 'Investment Income', 'FHSA/RRSP'].map((item) => (
                    <label key={item} className="flex items-center p-3 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition">
                      <input
                        type="checkbox"
                        checked={formData.complexity.includes(item)}
                        onChange={() => handleComplexityChange(item)}
                        className="w-4 h-4 rounded text-accent"
                      />
                      <span className="ml-3 font-medium text-sm">{item}</span>
                    </label>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => setCurrentStep('province')}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={nextStep} 
                    disabled={formData.complexity.length === 0}
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Next <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {currentStep === 'contact' && (
              <div className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Let's connect with you</h2>
                  <p className="text-muted-foreground text-sm mt-1">We'll send filing details to this email.</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="e.g., Marcus Chen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="e.g., (416) 555-0123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => setCurrentStep('complexity')}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={nextStep} 
                    disabled={!formData.name || !formData.phone}
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Complete <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {currentStep === 'success' && (
              <div className="p-6 space-y-6 text-center">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <Check className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">You're all set, {formData.name.split(' ')[0]}!</h2>
                  <p className="text-muted-foreground text-sm mt-2">
                    We've received your information. An expert will contact you at {formData.phone} within 24 hours to complete your filing.
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 text-left space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground">FILING SUMMARY</p>
                  <div className="space-y-1 text-sm">
                    <p><strong>Province:</strong> {formData.province}</p>
                    <p><strong>Income Type:</strong> {formData.complexity.join(', ')}</p>
                  </div>
                </div>
                <Button 
                  onClick={resetModal}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Close
                </Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                  <FileText className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-primary">TaxEase</span>
              </div>
              <p className="text-sm text-muted-foreground">Canadian tax filing made simple.</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition">Pricing</a></li>
                <li><a href="#faq" className="hover:text-foreground transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-foreground transition">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-foreground transition">Terms</Link></li>
                <li><Link href="/security" className="hover:text-foreground transition">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/help" className="hover:text-foreground transition">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-foreground transition">Contact</Link></li>
                <li><Link href="/careers" className="hover:text-foreground transition">Careers</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 TaxEase Canada. All rights reserved.</p>
            <p>CRA EFILE Certified | PIPEDA Compliant | Encrypted</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
