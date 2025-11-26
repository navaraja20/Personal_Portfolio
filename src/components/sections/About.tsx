'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, Target, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useAchievements } from '@/context/AchievementContext'
import { getCertifications, LinkedInCertification } from '@/services/linkedin'

const skills = [
  'Python', 'Machine Learning', 'TensorFlow', 'PyTorch', 'Data Engineering',
  'Apache Spark', 'SQL', 'NoSQL', 'AWS', 'Docker', 'Kubernetes', 'Git'
]

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const { unlockAchievement } = useAchievements()
  const [certifications, setCertifications] = useState<LinkedInCertification[]>([])

  useEffect(() => {
    if (inView) {
      unlockAchievement('view_about')
    }
  }, [inView, unlockAchievement])

  useEffect(() => {
    async function fetchCertifications() {
      try {
        const certs = await getCertifications()
        setCertifications(certs)
      } catch (error) {
        console.error('Error fetching certifications:', error)
      }
    }
    fetchCertifications()
  }, [])

  return (
    <section id="about" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-title text-center"
        >
          ABOUT ME
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="gaming-card"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center">
                <GraduationCap size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-gaming font-bold text-neon-cyan">Education</h3>
                <p className="text-gray-400">Academic Background</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-neon-cyan pl-4">
                <h4 className="font-bold text-lg">Master of Science - Computer Science</h4>
                <p className="text-neon-purple font-semibold">EPITA, France</p>
                <p className="text-sm text-gray-400">2023 - 2025</p>
                <p className="text-sm mt-2">Specializing in Machine Learning, Data Engineering, and Artificial Intelligence</p>
              </div>
            </div>
          </motion.div>

          {/* Objective Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="gaming-card"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink flex items-center justify-center">
                <Target size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-gaming font-bold text-neon-cyan">Career Goal</h3>
                <p className="text-gray-400">Current Objective</p>
              </div>
            </div>
            <p className="text-lg leading-relaxed">
              Seeking internship opportunities in <span className="text-neon-cyan font-bold">ML Engineering</span>, 
              <span className="text-neon-purple font-bold"> Data Engineering</span>, and 
              <span className="text-neon-pink font-bold"> Data Science</span> roles where I can apply my technical expertise 
              to solve real-world problems and contribute to innovative projects.
            </p>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="gaming-card mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-cyan to-neon-green flex items-center justify-center">
              <Zap size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-gaming font-bold text-neon-cyan">Core Skills</h3>
              <p className="text-gray-400">Technical Proficiency</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="glass-effect px-4 py-2 rounded-full border border-neon-cyan/50 hover:border-neon-cyan hover:scale-110 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="gaming-card"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-pink to-neon-purple flex items-center justify-center">
              <Award size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-gaming font-bold text-neon-cyan">Certifications</h3>
              <p className="text-gray-400">Professional Credentials</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="glass-effect p-4 rounded-lg border border-neon-purple/50 hover:border-neon-purple hover:scale-105 transition-all"
              >
                <Award className="text-neon-cyan mb-2" size={24} />
                <p className="text-sm font-semibold">{cert.name}</p>
                <p className="text-xs text-gray-400 mt-1">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
