'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { Briefcase, MapPin, Calendar } from 'lucide-react'
import { getExperience, getEducation, LinkedInExperience, LinkedInEducation } from '@/services/linkedin'
import { calculateDuration } from '@/lib/utils'

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [experiences, setExperiences] = useState<LinkedInExperience[]>([])
  const [education, setEducation] = useState<LinkedInEducation[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [exp, edu] = await Promise.all([
          getExperience(),
          getEducation()
        ])
        setExperiences(exp)
        setEducation(edu)
      } catch (error) {
        console.error('Error fetching experience data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id="experience" ref={ref} className="py-20 relative bg-gaming-darker/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-title text-center"
        >
          EXPERIENCE
        </motion.h2>

        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="loading-spinner" />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Work Experience */}
            <div>
              <h3 className="text-2xl font-gaming font-bold text-neon-cyan mb-6 flex items-center gap-2">
                <Briefcase className="text-neon-purple" />
                Work Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className="gaming-card relative"
                  >
                    {exp.current && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-neon-green/20 text-neon-green border border-neon-green/50 animate-pulse">
                          CURRENT
                        </span>
                      </div>
                    )}
                    <h4 className="text-xl font-bold text-neon-cyan mb-2">{exp.title}</h4>
                    <p className="text-lg font-semibold text-neon-purple mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{calculateDuration(exp.startDate, exp.endDate)}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div>
                        <p className="font-semibold text-neon-cyan mb-2">Key Achievements:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-gaming font-bold text-neon-cyan mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-neon-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className="gaming-card"
                  >
                    <h4 className="text-xl font-bold text-neon-cyan mb-2">{edu.degree}</h4>
                    <p className="text-lg font-semibold text-neon-purple mb-2">{edu.school}</p>
                    <p className="text-gray-400 mb-2">{edu.field}</p>
                    <div className="flex items-center gap-1 text-sm text-gray-400 mb-4">
                      <Calendar size={16} />
                      <span>{calculateDuration(edu.startDate, edu.endDate)}</span>
                    </div>
                    {edu.description && (
                      <p className="text-gray-300 mb-4">{edu.description}</p>
                    )}
                    {edu.activities && edu.activities.length > 0 && (
                      <div>
                        <p className="font-semibold text-neon-cyan mb-2">Activities:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.activities.map((activity, i) => (
                            <span
                              key={i}
                              className="text-xs px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/30"
                            >
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
