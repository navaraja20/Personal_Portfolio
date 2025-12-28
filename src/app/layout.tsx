import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { AchievementProvider } from '@/context/AchievementContext'
import Hyperspeed from '@/components/effects/Hyperspeed'
import CursorCanvas from '@/components/CursorCanvas'

export const metadata: Metadata = {
  title: 'Navaraja - ML Engineer | Data Engineer | Data Scientist',
  description: 'Portfolio of Navaraja - Master\'s student in Computer Science at EPITA, France. Seeking ML Engineer, Data Engineer, and Data Scientist internship opportunities.',
  keywords: ['ML Engineer', 'Data Engineer', 'Data Scientist', 'Machine Learning', 'EPITA', 'France', 'Portfolio', 'Navaraja'],
  authors: [{ name: 'Navaraja' }],
  openGraph: {
    title: 'Navaraja - ML Engineer | Data Engineer | Data Scientist',
    description: 'Portfolio showcasing projects and expertise in Machine Learning, Data Engineering, and Data Science',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Navaraja - ML Engineer | Data Engineer | Data Scientist',
    description: 'Portfolio showcasing projects and expertise in Machine Learning, Data Engineering, and Data Science',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AchievementProvider>
            <CursorCanvas />
            <div className="fixed inset-0 -z-10">
              <Hyperspeed
                effectOptions={{
                  distortion: 'turbulentDistortion',
                  length: 400,
                  roadWidth: 10,
                  islandWidth: 2,
                  lanesPerRoad: 3,
                  fov: 90,
                  fovSpeedUp: 150,
                  speedUp: 2,
                  carLightsFade: 0.4,
                  totalSideLightSticks: 50,
                  lightPairsPerRoadWay: 50,
                  colors: {
                    roadColor: 0x080808,
                    islandColor: 0x0a0a0a,
                    background: 0x000000,
                    shoulderLines: 0x131318,
                    brokenLines: 0x131318,
                    leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                    rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                    sticks: 0x03b3c3
                  }
                }}
              />
            </div>
            <Navigation />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </AchievementProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
