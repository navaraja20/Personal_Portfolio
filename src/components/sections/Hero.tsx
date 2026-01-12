'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { useAchievements } from '@/context/AchievementContext'
import { getXPLevel, calculateXP } from '@/lib/utils'
import { AuroraTextEffect } from '@/components/effects/AuroraTextEffect'
import Image from 'next/image'

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
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gaming-dark/50 to-gaming-dark -z-5" />
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-5">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent animate-scan" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <AuroraTextEffect
                text="NAVARAJA MANNEPALLI"
                className="bg-transparent mb-6"
                fontSize="clamp(2rem, 6vw, 4rem)"
                colors={{
                  first: "bg-neon-cyan",
                  second: "bg-neon-purple",
                  third: "bg-neon-pink",
                  fourth: "bg-neon-blue",
                }}
                blurAmount="blur-xl"
                animationSpeed={{
                  border: 8,
                  first: 6,
                  second: 7,
                  third: 4,
                  fourth: 10,
                }}
              />
            </motion.div>

            {/* Subtitle with Typing Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-xl md:text-3xl font-tech font-semibold text-neon-cyan mb-4">
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
              className="mb-12 lg:mx-0 mx-auto max-w-md"
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
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
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
          </div>

          {/* Right Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group max-w-md w-full">
              {/* Subtle border glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-neon-cyan/20 via-neon-purple/20 to-neon-pink/20 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
              
              {/* Card container */}
              <div className="relative gaming-card rounded-2xl overflow-hidden border border-white/10 hover:border-neon-cyan/30 transition-all duration-300">
                {/* Subtle header accent */}
                <div className="h-1 bg-gradient-to-r from-neon-cyan/40 via-neon-purple/40 to-neon-pink/40"></div>
                
                {/* Card content */}
                <div className="p-6 bg-gaming-dark/80 backdrop-blur-sm">
                  {/* Profile image */}
                  <div className="relative mb-6">
                    <div className="relative">
                      <Image
                        src="/profile.png"
                        alt="Navaraja Mannepalli"
                        width={400}
                        height={400}
                        className="rounded-lg w-full h-auto shadow-xl border border-white/10"
                        priority
                      />
                    </div>
                  </div>
                  
                  {/* Card info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                      <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse shadow-sm shadow-neon-cyan/30"></div>
                      <span className="text-xs font-gaming text-neon-cyan/90 tracking-wider">AVAILABLE FOR OPPORTUNITIES</span>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Location:</span>
                        <span className="text-gray-200 font-medium">France</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Focus:</span>
                        <span className="text-gray-200 font-medium">ML & Data</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Status:</span>
                        <span className="text-gray-200 font-medium">Master's Student</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Centered below both columns */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 mt-16"
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
