'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function AccessibilityPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
            <Navbar />

            <main className="flex-grow container mx-auto px-6 py-20 max-w-4xl">
                <header className="mb-12 border-b border-slate-100 pb-8">
                    <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900">Accessibility Statement</h1>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 font-medium">
                        <p>Delta ISP for Everyone</p>
                    </div>
                </header>

                <div className="space-y-12 text-slate-600 leading-relaxed text-lg">
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">1. Our Commitment</h2>
                        <p>
                            Delta Software & Communication Ltd is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability. We are actively working to increase the accessibility and usability of our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">2. Standards</h2>
                        <p>
                            We endeavor to conform to level Double-A of the World Wide Web Consortium (W3C) Web Content Accessibility Guidelines 2.1. These guidelines explain how to make web content more accessible for people with disabilities.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">3. Feedback</h2>
                        <p>
                            We welcome your feedback on the accessibility of our website. If you encounter accessibility barriers, please let us know so we can address them promptly.
                        </p>
                    </section>

                    <div className="pt-12 border-t border-slate-100 text-center lg:text-left">
                        <p className="text-slate-500 text-sm font-bold uppercase tracking-widest italic">
                            Email accessibility issues to access@deltasoftwareandcommunication.com
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

