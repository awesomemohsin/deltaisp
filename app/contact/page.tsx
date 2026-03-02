import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactPageContent } from '@/components/contact-page'

export const metadata: Metadata = {
  title: 'Contact',
}

export default function Contact() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ContactPageContent />
      <Footer />
    </main>
  )
}
