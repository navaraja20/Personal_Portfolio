'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Send, Mail, MapPin, Linkedin, Github, CheckCircle, XCircle } from 'lucide-react'
import { useAchievements } from '@/context/AchievementContext'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const { unlockAchievement } = useAchievements()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  useEffect(() => {
    if (inView) {
      unlockAchievement('contact_form')
    }
  }, [inView, unlockAchievement])

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    unlockAchievement('contact_form')
    
    try {
      // Implement your email service here (e.g., EmailJS, Formspree, or custom API)
      console.log('Form data:', data)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitStatus('success')
      reset()
      
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={ref} className="py-20 relative bg-gaming-darker/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-title text-center"
        >
          GET IN TOUCH
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="gaming-card">
              <h3 className="text-2xl font-gaming font-bold text-neon-cyan mb-6">
                Let's Connect!
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                I'm actively seeking internship opportunities in ML Engineering, Data Engineering, 
                and Data Science. Feel free to reach out if you'd like to discuss potential 
                collaborations or opportunities!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 glass-effect rounded-lg hover:border-neon-cyan border border-transparent transition-all">
                  <div className="w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center">
                    <Mail className="text-neon-cyan" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:nava-raja.mannepalli@epita.fr" className="text-lg font-semibold hover:text-neon-cyan transition-colors">
                      nava-raja.mannepalli@epita.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 glass-effect rounded-lg hover:border-neon-purple border border-transparent transition-all">
                  <div className="w-12 h-12 rounded-full bg-neon-purple/20 flex items-center justify-center">
                    <MapPin className="text-neon-purple" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-lg font-semibold">Paris, France</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 glass-effect rounded-lg hover:border-neon-pink border border-transparent transition-all">
                  <div className="w-12 h-12 rounded-full bg-neon-pink/20 flex items-center justify-center">
                    <Linkedin className="text-neon-pink" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/navaraja-mannepalli/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg font-semibold hover:text-neon-pink transition-colors"
                    >
                      /in/navaraja-mannepalli
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 glass-effect rounded-lg hover:border-neon-green border border-transparent transition-all">
                  <div className="w-12 h-12 rounded-full bg-neon-green/20 flex items-center justify-center">
                    <Github className="text-neon-green" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <a 
                      href="https://github.com/navaraja20" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg font-semibold hover:text-neon-green transition-colors"
                    >
                      @navaraja20
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="gaming-card"
          >
            <h3 className="text-2xl font-gaming font-bold text-neon-cyan mb-6">
              Send a Message
            </h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/50 flex items-center gap-3">
                <CheckCircle className="text-green-500" size={24} />
                <p className="text-green-500 font-semibold">Message sent successfully!</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/50 flex items-center gap-3">
                <XCircle className="text-red-500" size={24} />
                <p className="text-red-500 font-semibold">Failed to send message. Please try again.</p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 glass-effect rounded-lg border border-white/20 focus:border-neon-cyan focus:outline-none transition-all bg-gaming-dark/50"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 glass-effect rounded-lg border border-white/20 focus:border-neon-cyan focus:outline-none transition-all bg-gaming-dark/50"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                  Subject *
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 glass-effect rounded-lg border border-white/20 focus:border-neon-cyan focus:outline-none transition-all bg-gaming-dark/50"
                  placeholder="Internship Opportunity"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 glass-effect rounded-lg border border-white/20 focus:border-neon-cyan focus:outline-none transition-all bg-gaming-dark/50 resize-none"
                  placeholder="Your message here..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner w-5 h-5 border-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
