import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { AchievementProvider } from '@/context/AchievementContext'
import ParticleOrbitEffect from '@/components/effects/ParticleOrbitEffect'
import Galaxy from '@/components/effects/Galaxy'

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
            {/* Galaxy Background */}
            <div className="fixed inset-0 w-full h-full -z-10">
              <Galaxy
                mouseRepulsion={true}
                mouseInteraction={true}
                density={1.2}
                glowIntensity={0.6}
                saturation={0.7}
                hueShift={200}
                twinkleIntensity={0.4}
                rotationSpeed={0.02}
                speed={0.8}
                transparent={false}
              />
            </div>
            
            {/* Particle Cursor Effect */}
            <ParticleOrbitEffect 
              particleCount={30}
              radius={80}
              particleSpeed={0.02}
              radiusScale={2}
              intensity={1.2}
              fadeOpacity={0.08}
              colorRange={[180, 280]}
              autoColors={true}
              particleSize={3}
            />
            
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
