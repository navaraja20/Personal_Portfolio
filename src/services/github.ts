import axios from 'axios'

const GITHUB_API = 'https://api.github.com'
const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'navaraja20'
const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN

const githubClient = axios.create({
  baseURL: GITHUB_API,
  headers: token ? {
    Authorization: `Bearer ${token}`,
  } : {},
})

export interface Repository {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  languages_url: string
  topics: string[]
  created_at: string
  updated_at: string
  pushed_at: string
  size: number
  open_issues_count: number
}

export interface UserProfile {
  login: string
  name: string
  avatar_url: string
  bio: string | null
  location: string | null
  email: string | null
  blog: string | null
  twitter_username: string | null
  public_repos: number
  followers: number
  following: number
  created_at: string
}

export interface Contribution {
  total: number
  weeks: Array<{
    w: number
    a: number
    d: number
    c: number
  }>
}

export interface LanguageStats {
  [language: string]: number
}

export async function getUserProfile(): Promise<UserProfile> {
  try {
    const { data } = await githubClient.get(`/users/${username}`)
    return data
  } catch (error) {
    console.error('Error fetching user profile:', error)
    throw error
  }
}

export async function getRepositories(): Promise<Repository[]> {
  try {
    const { data } = await githubClient.get(`/users/${username}/repos`, {
      params: {
        sort: 'updated',
        per_page: 100,
      },
    })
    
    // Filter out forks and sort by stars
    return data
      .filter((repo: Repository) => !repo.fork)
      .sort((a: Repository, b: Repository) => b.stargazers_count - a.stargazers_count)
  } catch (error) {
    console.error('Error fetching repositories:', error)
    throw error
  }
}

export async function getRepositoryLanguages(languagesUrl: string): Promise<LanguageStats> {
  try {
    const { data } = await axios.get(languagesUrl, {
      headers: token ? {
        Authorization: `Bearer ${token}`,
      } : {},
    })
    return data
  } catch (error) {
    console.error('Error fetching repository languages:', error)
    return {}
  }
}

export async function getAllLanguages(repos: Repository[]): Promise<LanguageStats> {
  const allLanguages: LanguageStats = {}
  
  for (const repo of repos) {
    const languages = await getRepositoryLanguages(repo.languages_url)
    
    for (const [lang, bytes] of Object.entries(languages)) {
      allLanguages[lang] = (allLanguages[lang] || 0) + bytes
    }
  }
  
  return allLanguages
}

export async function getContributions(): Promise<number> {
  try {
    // Note: GitHub GraphQL API is needed for accurate contribution data
    // This is a simplified version using the stats API
    const { data } = await githubClient.get(`/users/${username}/events/public`, {
      params: {
        per_page: 100,
      },
    })
    
    return data.length
  } catch (error) {
    console.error('Error fetching contributions:', error)
    return 0
  }
}

export async function getTechStack(): Promise<string[]> {
  try {
    const repos = await getRepositories()
    const languages = await getAllLanguages(repos)
    
    // Get all unique topics from repositories
    const topics = new Set<string>()
    repos.forEach(repo => {
      repo.topics?.forEach(topic => topics.add(topic))
    })
    
    // Combine languages and topics
    const techStack = [
      ...Object.keys(languages),
      ...Array.from(topics),
    ]
    
    return Array.from(new Set(techStack))
  } catch (error) {
    console.error('Error fetching tech stack:', error)
    return []
  }
}

export function getTopLanguages(languages: LanguageStats, limit: number = 10): Array<{name: string, percentage: number}> {
  const total = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0)
  
  return Object.entries(languages)
    .map(([name, bytes]) => ({
      name,
      percentage: (bytes / total) * 100,
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, limit)
}
