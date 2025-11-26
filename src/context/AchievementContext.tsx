'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlocked: boolean
  timestamp?: number
}

interface AchievementContextType {
  achievements: Achievement[]
  unlockAchievement: (id: string) => void
  showNotification: boolean
  currentAchievement: Achievement | null
}

const AchievementContext = createContext<AchievementContextType | undefined>(undefined)

const defaultAchievements: Achievement[] = [
  {
    id: 'first_visit',
    title: 'Welcome Explorer!',
    description: 'Visited the portfolio for the first time',
    icon: '🎮',
    unlocked: false,
  },
  {
    id: 'view_projects',
    title: 'Code Inspector',
    description: 'Viewed the projects section',
    icon: '💻',
    unlocked: false,
  },
  {
    id: 'view_skills',
    title: 'Skill Seeker',
    description: 'Explored the skills section',
    icon: '🎯',
    unlocked: false,
  },
  {
    id: 'contact_form',
    title: 'Communicator',
    description: 'Opened the contact form',
    icon: '📧',
    unlocked: false,
  },
  {
    id: 'theme_switch',
    title: 'Light Bringer',
    description: 'Toggled the theme',
    icon: '🌓',
    unlocked: false,
  },
  {
    id: 'explorer',
    title: 'Full Explorer',
    description: 'Visited all sections',
    icon: '🏆',
    unlocked: false,
  },
]

export function AchievementProvider({ children }: { children: ReactNode }) {
  const [achievements, setAchievements] = useState<Achievement[]>(defaultAchievements)
  const [showNotification, setShowNotification] = useState(false)
  const [currentAchievement, setCurrentAchievement] = useState<Achievement | null>(null)

  const unlockAchievement = useCallback((id: string) => {
    setAchievements(prev => {
      const achievement = prev.find(a => a.id === id)
      if (!achievement || achievement.unlocked) return prev

      const updated = prev.map(a =>
        a.id === id
          ? { ...a, unlocked: true, timestamp: Date.now() }
          : a
      )

      // Show notification
      const unlockedAchievement = updated.find(a => a.id === id)
      if (unlockedAchievement) {
        setCurrentAchievement(unlockedAchievement)
        setShowNotification(true)
        setTimeout(() => setShowNotification(false), 4000)
      }

      return updated
    })
  }, [])

  return (
    <AchievementContext.Provider
      value={{
        achievements,
        unlockAchievement,
        showNotification,
        currentAchievement,
      }}
    >
      {children}
      {showNotification && currentAchievement && (
        <div className="fixed bottom-8 right-8 z-50 animate-slide-up">
          <div className="gaming-card bg-gaming-card border-2 border-neon-cyan p-4 min-w-[300px]">
            <div className="flex items-center gap-4">
              <span className="text-4xl">{currentAchievement.icon}</span>
              <div>
                <h4 className="font-gaming text-neon-cyan font-bold">
                  Achievement Unlocked!
                </h4>
                <p className="text-sm font-semibold">{currentAchievement.title}</p>
                <p className="text-xs text-gray-400">{currentAchievement.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </AchievementContext.Provider>
  )
}

export function useAchievements() {
  const context = useContext(AchievementContext)
  if (context === undefined) {
    throw new Error('useAchievements must be used within an AchievementProvider')
  }
  return context
}
