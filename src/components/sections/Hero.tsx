'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import Scene3D from '../Scene3D'
import { useAchievements } from '@/context/AchievementContext'
import { getXPLevel, calculateXP } from '@/lib/utils'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { unlockAchievement } = useAchievements()
  
  // Sample XP calculation - would be dynamic based on actual data
  const totalXP = calculateXP(25, 500, 15)
  const { level, progress } = getXPLevel(totalXP)

  useEffect(() => {
    setMounted(true)
    unlockAchievement('first_visit')
  }, [unlockAchievement])

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Scene3D />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gaming-dark/50 to-gaming-dark -z-5" />
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-5">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent animate-scan" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Level Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-8"
        >
          <div className="glass-effect px-6 py-2 rounded-full border border-neon-cyan/50 neon-border">
            <span className="text-neon-cyan font-gaming font-bold">LEVEL {level}</span>
            <span className="mx-2">|</span>
            <span className="text-sm">{progress}% to next level</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-8xl font-gaming font-black mb-6"
        >
          <span className="block text-white" style={{ 
            textShadow: '0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(184, 0, 255, 0.3), 0 2px 4px rgba(0, 0, 0, 0.8)',
            filter: 'brightness(1.2) contrast(1.1)'
          }}>
            NAVARAJA MANNEPALLI
          </span>
        </motion.h1>

        {/* Subtitle with Typing Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-tech font-semibold text-neon-cyan mb-4">
            Aspiring{' '}
            <span className="text-gradient">ML Engineer</span>
            {' | '}
            <span className="text-gradient">Data Engineer</span>
            {' | '}
            <span className="text-gradient">Data Scientist</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Master's in Computer Science @ <span className="text-neon-purple font-bold">EPITA</span>, France
          </p>
        </motion.div>

        {/* Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="max-w-md mx-auto mb-12"
        >
          <div className="glass-effect rounded-lg p-4">
            <div className="flex justify-between mb-2 text-sm">
              <span className="font-gaming">XP Progress</span>
              <span className="text-neon-cyan">{totalXP} XP</span>
            </div>
            <div className="w-full h-3 bg-gaming-darker rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ delay: 1, duration: 1.5, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink relative"
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <a
            href="/Navaraja_Mannepalli_Data_Science_Resume.pdf"
            download
            className="btn-primary flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </a>
          <a
            href="https://github.com/navaraja20"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect px-6 py-3 rounded-lg border border-white/20 hover:border-neon-cyan transition-all hover:scale-105 flex items-center gap-2"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/navaraja-mannepalli/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect px-6 py-3 rounded-lg border border-white/20 hover:border-neon-cyan transition-all hover:scale-105 flex items-center gap-2"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href="#contact"
            className="glass-effect px-6 py-3 rounded-lg border border-white/20 hover:border-neon-cyan transition-all hover:scale-105 flex items-center gap-2"
          >
            <Mail size={20} />
            Contact Me
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-400 font-tech">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={24} className="text-neon-cyan" />
          </motion.div>
        </motion.div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none -z-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </section>
  )
}
