'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { Github, ExternalLink, Star, GitFork, Calendar } from 'lucide-react'
import { getRepositories, Repository } from '@/services/github'
import { useAchievements } from '@/context/AchievementContext'
import { formatDate } from '@/lib/utils'

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const { unlockAchievement } = useAchievements()
  const [projects, setProjects] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (inView) {
      unlockAchievement('view_projects')
    }
  }, [inView, unlockAchievement])

  useEffect(() => {
    async function fetchProjects() {
      try {
        const repos = await getRepositories()
        
        // Prioritize Employee-performance-prediction and filter out unwanted repos
        const prioritizedRepos = repos.filter(repo => 
          repo.name !== 'AWS-project1' && 
          repo.name !== 'navaraja20' // Filter out profile repo if exists
        )
        
        // Find Employee-performance-prediction and move it to the front
        const employeePerfIndex = prioritizedRepos.findIndex(
          repo => repo.name === 'Employee-performance-prediction'
        )
        
        if (employeePerfIndex > -1) {
          const employeePerfRepo = prioritizedRepos.splice(employeePerfIndex, 1)[0]
          prioritizedRepos.unshift(employeePerfRepo)
        }
        
        setProjects(prioritizedRepos.slice(0, 6)) // Show top 6 projects
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <section id="projects" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-title text-center"
        >
          PROJECTS
        </motion.h2>

        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="loading-spinner" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="gaming-card group"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-gaming font-bold text-neon-cyan mb-2 group-hover:text-neon-purple transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2 mb-3">
                      {project.description || 'No description available'}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                {project.language && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs px-2 py-1 rounded bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30">
                      {project.language}
                    </span>
                    {project.topics?.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-2 py-1 rounded bg-neon-purple/20 text-neon-purple border border-neon-purple/30"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-500" />
                    <span>{project.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={16} className="text-neon-cyan" />
                    <span>{project.forks_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span className="text-xs">{formatDate(project.updated_at)}</span>
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 glass-effect rounded-lg border border-white/20 hover:border-neon-cyan transition-all hover:scale-105"
                  >
                    <Github size={16} />
                    <span className="text-sm">View Code</span>
                  </a>
                  {project.homepage && (
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 glass-effect rounded-lg border border-white/20 hover:border-neon-purple transition-all hover:scale-105"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/navaraja20?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
