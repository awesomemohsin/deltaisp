import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AboutPageContent } from '@/components/about-page'

export const metadata: Metadata = {
  title: 'About',
}

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <AboutPageContent />
      <Footer />
    </main>
  )
}
