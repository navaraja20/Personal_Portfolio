'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState, useRef } from 'react'
import { useAchievements } from '@/context/AchievementContext'
import { getRepositories, getAllLanguages, getTopLanguages } from '@/services/github'
import gsap from 'gsap'

interface SkillData {
  name: string
  level: number
  category: 'ML/AI' | 'Data Engineering' | 'Programming' | 'Tools' | 'Cloud'
}

const skillsData: SkillData[] = [
  { name: 'Python', level: 95, category: 'Programming' },
  { name: 'TensorFlow', level: 88, category: 'ML/AI' },
  { name: 'PyTorch', level: 85, category: 'ML/AI' },
  { name: 'Scikit-learn', level: 90, category: 'ML/AI' },
  { name: 'Apache Spark', level: 82, category: 'Data Engineering' },
  { name: 'SQL', level: 93, category: 'Data Engineering' },
  { name: 'PostgreSQL', level: 88, category: 'Data Engineering' },
  { name: 'MongoDB', level: 80, category: 'Data Engineering' },
  { name: 'AWS', level: 85, category: 'Cloud' },
  { name: 'Docker', level: 87, category: 'Tools' },
  { name: 'Kubernetes', level: 78, category: 'Tools' },
  { name: 'Git', level: 92, category: 'Tools' },
  { name: 'Pandas', level: 94, category: 'Data Engineering' },
  { name: 'NumPy', level: 92, category: 'Programming' },
]

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const { unlockAchievement } = useAchievements()
  const [githubLanguages, setGithubLanguages] = useState<Array<{ name: string; percentage: number }>>([])
  const skillsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (inView) {
      unlockAchievement('view_skills')
    }
  }, [inView, unlockAchievement])

  useEffect(() => {
    async function fetchLanguages() {
      try {
        const repos = await getRepositories()
        const languages = await getAllLanguages(repos)
        const topLangs = getTopLanguages(languages, 8)
        setGithubLanguages(topLangs)
      } catch (error) {
        console.error('Error fetching languages:', error)
      }
    }
    fetchLanguages()
  }, [])

  useEffect(() => {
    if (inView) {
      skillsRef.current.forEach((skill, index) => {
        if (skill) {
          const bar = skill.querySelector('.skill-bar-fill')
          if (bar) {
            gsap.to(bar, {
              width: `${skillsData[index].level}%`,
              duration: 1.5,
              delay: index * 0.05,
              ease: 'power3.out',
            })
          }
        }
      })
    }
  }, [inView])

  const groupedSkills = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, SkillData[]>)

  const categoryColors: Record<string, string> = {
    'ML/AI': 'neon-cyan',
    'Data Engineering': 'neon-purple',
    'Programming': 'neon-pink',
    'Tools': 'neon-green',
    'Cloud': 'yellow-500',
  }

  return (
    <section id="skills" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-title text-center"
        >
          SKILLS & EXPERTISE
        </motion.h2>

        {/* Skills by Category */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {Object.entries(groupedSkills).map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.1 }}
              className="gaming-card"
            >
              <h3 className={`text-xl font-gaming font-bold text-${categoryColors[category]} mb-6`}>
                {category}
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => {
                  const globalIndex = skillsData.findIndex(s => s.name === skill.name)
                  return (
                    <div
                      key={skill.name}
                      ref={el => skillsRef.current[globalIndex] = el}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">{skill.name}</span>
                        <span className={`text-${categoryColors[category]}`}>{skill.level}%</span>
                      </div>
                      <div className="w-full h-3 bg-gaming-darker rounded-full overflow-hidden relative">
                        <div
                          className={`skill-bar-fill h-full bg-gradient-to-r from-${categoryColors[category]} to-${categoryColors[category]}/50 relative`}
                          style={{ width: '0%' }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Language Stats */}
        {githubLanguages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="gaming-card"
          >
            <h3 className="text-2xl font-gaming font-bold text-neon-cyan mb-6 text-center">
              GitHub Language Distribution
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {githubLanguages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="text-center"
                >
                  <div className="relative w-24 h-24 mx-auto mb-3">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="44"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="8"
                      />
                      <motion.circle
                        cx="48"
                        cy="48"
                        r="44"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        strokeDasharray={`${2 * Math.PI * 44}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 44 }}
                        animate={inView ? {
                          strokeDashoffset: 2 * Math.PI * 44 * (1 - lang.percentage / 100)
                        } : {}}
                        transition={{ delay: 0.8 + index * 0.1, duration: 1.5, ease: 'easeOut' }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00f0ff" />
                          <stop offset="100%" stopColor="#b800ff" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold text-neon-cyan">
                        {lang.percentage.toFixed(0)}%
                      </span>
                    </div>
                  </div>
                  <p className="font-semibold">{lang.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
