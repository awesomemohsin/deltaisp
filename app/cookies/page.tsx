'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function CookiePage() {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
            <Navbar />

            <main className="flex-grow container mx-auto px-6 py-20 max-w-4xl">
                <header className="mb-12 border-b border-slate-100 pb-8">
                    <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900">Cookie Policy</h1>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 font-medium">
                        <p>Last Revised: February 14, 2026</p>
                    </div>
                </header>

                <div className="space-y-12 text-slate-600 leading-relaxed text-lg">
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">What Are Cookies?</h2>
                        <p>
                            Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">Types of Cookies We Use</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                <h3 className="text-slate-900 font-bold mb-2 uppercase text-sm tracking-widest">Essential Cookies</h3>
                                <p className="text-slate-600 text-sm">Required for core site functionality like session management and security.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                <h3 className="text-slate-900 font-bold mb-2 uppercase text-sm tracking-widest">Analytics Cookies</h3>
                                <p className="text-slate-600 text-sm">Help us understand how visitors interact with the site so we can improve it.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">Managing Cookies</h2>
                        <p>
                            You can control and manage cookies through your browser settings. Please note that disabling essential cookies may impact the functionality of our website.
                        </p>
                    </section>

                    <div className="pt-12 border-t border-slate-100 text-center lg:text-left">
                        <p className="text-slate-500 text-sm font-bold uppercase tracking-widest italic">
                            By continuing to use our site, you consent to our use of cookies.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

