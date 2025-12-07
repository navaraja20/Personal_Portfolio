'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef } from 'react'
import { useAchievements } from '@/context/AchievementContext'
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
  { name: 'NumPy', level: 85, category: 'Programming' },
]

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const { unlockAchievement } = useAchievements()
  const skillsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (inView) {
      unlockAchievement('view_skills')
    }
  }, [inView, unlockAchievement])

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
                      ref={el => {
                        skillsRef.current[globalIndex] = el
                      }}
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
      </div>
    </section>
  )
}
