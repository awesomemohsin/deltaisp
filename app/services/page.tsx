import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ServicesPageContent } from '@/components/services-page'

export const metadata: Metadata = {
  title: 'Services',
}

export default function Services() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServicesPageContent />
      <Footer />
    </main>
  )
}
