import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { AchievementProvider } from '@/context/AchievementContext'

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
