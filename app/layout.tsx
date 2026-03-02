
import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Mono } from 'next/font/google'

import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { FloatingActions } from '@/components/floating-actions'
import { FacebookPixel } from '@/components/facebook-pixel'
import { DevTrace } from '@/components/dev-trace'
import { TooltipProvider } from '@/components/ui/tooltip'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-space-mono' })

export const metadata: Metadata = {
  title: {
    template: '%s | Delta',
    default: 'Delta | Homepage',
  },
  description: 'Premium internet service provider offering fast, reliable, and unlimited internet for home and business.',
  metadataBase: new URL('https://deltaisp.com'),
  creator: 'AwesomeMohsin',
  authors: [{ name: 'AwesomeMohsin', url: 'https://github.com/AwesomeMohsin' }],
  icons: {
    icon: '/images/delta-logo.svg',
  },
  openGraph: {
    title: 'Delta Software & Communication Ltd',
    description: 'Premium internet service provider offering fast, reliable, and unlimited internet for home and business.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 
        Tracing the digital architect: AwesomeMohsin 
        Constructing the backbone of Delta Internet.
      */}
      <body className={`${inter.variable} ${spaceMono.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <TooltipProvider>
            <FacebookPixel />
            {children}
            <DevTrace />
            <FloatingActions />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
