'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { X, ChevronRight } from 'lucide-react'
import { useState } from 'react'

interface FilingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function FilingModal({ isOpen, onClose }: FilingModalProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    province: '',
    complexity: '',
    name: '',
    phone: '',
  })

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleClose = () => {
    setStep(1)
    setFormData({ province: '', complexity: '', name: '', phone: '' })
    onClose()
  }

  const provinces = ['Ontario', 'British Columbia', 'Alberta', 'Quebec', 'Manitoba', 'Saskatchewan']
  const complexities = [
    { value: 'T4', label: 'T4 Employment Only' },
    { value: 'T4A', label: 'T4A Freelance/Contractor' },
    { value: 'Self', label: 'Self-Employment' },
    { value: 'Investment', label: 'Investment Income' },
    { value: 'FHSA', label: 'FHSA/RRSP Contributions' },
    { value: 'Multiple', label: 'Multiple Income Sources' },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 bg-card rounded-xl shadow-lg overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-1 hover:bg-muted rounded-lg transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="p-6">
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Select Your Province</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {provinces.map((prov) => (
                      <button
                        key={prov}
                        onClick={() => {
                          setFormData({ ...formData, province: prov })
                          handleNext()
                        }}
                        className="p-3 border border-border rounded-lg hover:bg-accent hover:text-accent-foreground hover:border-accent transition text-sm font-medium"
                      >
                        {prov}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Income Complexity</h2>
                  <p className="text-sm text-muted-foreground">Tell us about your income</p>
                  <div className="space-y-2">
                    {complexities.map((comp) => (
                      <button
                        key={comp.value}
                        onClick={() => {
                          setFormData({ ...formData, complexity: comp.value })
                          handleNext()
                        }}
                        className="w-full p-3 border border-border rounded-lg hover:bg-accent hover:text-accent-foreground hover:border-accent transition text-sm font-medium text-left"
                      >
                        {comp.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Your Contact Info</h2>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 123-4567"
                        className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">You're All Set!</h2>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold">Province:</span> {formData.province}</p>
                    <p><span className="font-semibold">Income Type:</span> {formData.complexity}</p>
                    <p><span className="font-semibold">Name:</span> {formData.name}</p>
                    <p><span className="font-semibold">Phone:</span> {formData.phone}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Thank you! An expert will contact you shortly to help with your filing.
                  </p>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-3 mt-6">
                {step > 1 && (
                  <Button
                    onClick={handleBack}
                    variant="outline"
                    className="flex-1"
                  >
                    Back
                  </Button>
                )}
                {step < 4 && (
                  <Button
                    onClick={handleNext}
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                    disabled={step === 1 && !formData.province || step === 2 && !formData.complexity || step === 3 && (!formData.name || !formData.phone)}
                  >
                    Next <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
                {step === 4 && (
                  <Button
                    onClick={handleClose}
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    Close
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
