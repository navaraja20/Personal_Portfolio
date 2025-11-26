import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function calculateDuration(startDate: string, endDate?: string): string {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()
  
  const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                 (end.getMonth() - start.getMonth())
  
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12
  
  if (years > 0) {
    return remainingMonths > 0 
      ? `${years} yr${years > 1 ? 's' : ''} ${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`
      : `${years} yr${years > 1 ? 's' : ''}`
  }
  
  return `${months} mo${months > 1 ? 's' : ''}`
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }
    
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export function calculateXP(projects: number, contributions: number, skills: number): number {
  return (projects * 50) + (contributions * 2) + (skills * 10)
}

export function getXPLevel(xp: number): { level: number; progress: number } {
  const level = Math.floor(xp / 100) + 1
  const progress = (xp % 100)
  
  return { level, progress }
}
