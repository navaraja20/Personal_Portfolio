// LinkedIn API integration
// Note: LinkedIn's API requires OAuth 2.0 authentication
// For a personal portfolio, you might want to manually curate this data
// or use a different approach (scraping, manual JSON file, etc.)

export interface LinkedInExperience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate?: string
  description: string
  achievements: string[]
  current: boolean
}

export interface LinkedInEducation {
  id: string
  school: string
  degree: string
  field: string
  startDate: string
  endDate?: string
  grade?: string
  activities?: string[]
  description?: string
}

export interface LinkedInCertification {
  id: string
  name: string
  issuer: string
  issueDate: string
  expirationDate?: string
  credentialId?: string
  credentialUrl?: string
}

// Mock data - Replace with actual API calls or manual data
export const experienceData: LinkedInExperience[] = [
  {
    id: '1',
    title: 'Machine Learning Intern',
    company: 'iNeuron Intelligence Pvt Ltd',
    location: 'Remote',
    startDate: '2024-05',
    endDate: '2024-11',
    current: false,
    description: 'Worked on machine learning projects focused on credit risk analysis and customer behavior prediction',
    achievements: [
      'Developed Credit Card Defaulter Prediction model with high accuracy',
      'Implemented end-to-end ML pipeline for data preprocessing and model deployment',
      'Collaborated with team on feature engineering and model optimization',
    ],
  },
  {
    id: '2',
    title: 'Cloud Computing Intern',
    company: 'Amazon Web Services (AWS)',
    location: 'Remote',
    startDate: '2023-11',
    endDate: '2024-05',
    current: false,
    description: 'Worked on cloud infrastructure and CI/CD pipeline development using AWS services',
    achievements: [
      'Developed Containerized Jenkins Pipeline on AWS Cloud',
      'Implemented automated deployment workflows using Docker and AWS services',
      'Optimized cloud resource utilization and deployment efficiency',
    ],
  },
  {
    id: '3',
    title: 'Process Associate',
    company: 'HCLTech',
    location: 'India',
    startDate: '2023-12',
    endDate: '2024-05',
    current: false,
    description: 'Worked as a Process Analyst in Google Ads operations',
    achievements: [
      'Solved customer queries by troubleshooting issues and generating possible solutions',
      'Analyzed process workflows to improve efficiency and customer satisfaction',
      'Received frequent supervision and assistance while developing expertise in Google Ads platform',
    ],
  },
]

export const educationData: LinkedInEducation[] = [
  {
    id: '1',
    school: 'EPITA',
    degree: 'Master of Science',
    field: 'Computer Science',
    startDate: '2023-09',
    endDate: '2025-06',
    description: 'Specializing in Machine Learning and Data Engineering',
    activities: ['AI Research Club', 'Hackathon Organizer'],
  },
  // Add more education
]

export const certificationData: LinkedInCertification[] = [
  {
    id: '1',
    name: 'Machine Learning Internship Certificate',
    issuer: 'iNeuron Intelligence Pvt Ltd',
    issueDate: '2024-11',
    credentialUrl: 'https://github.com/navaraja20/Credit_Card_Defaulter_main',
  },
  {
    id: '2',
    name: 'Cloud Computing Internship Certificate',
    issuer: 'Amazon Web Services (AWS)',
    issueDate: '2024-05',
  },
]

export async function getExperience(): Promise<LinkedInExperience[]> {
  // In a production app, this would make an API call
  // For now, return mock data
  return new Promise((resolve) => {
    setTimeout(() => resolve(experienceData), 500)
  })
}

export async function getEducation(): Promise<LinkedInEducation[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(educationData), 500)
  })
}

export async function getCertifications(): Promise<LinkedInCertification[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(certificationData), 500)
  })
}
