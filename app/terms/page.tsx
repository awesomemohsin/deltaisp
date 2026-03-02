'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
            <Navbar />

            <main className="flex-grow container mx-auto px-6 py-20 max-w-4xl">
                <header className="mb-12 border-b border-slate-100 pb-8">
                    <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900">Terms of Service</h1>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 font-medium">
                        <p>Effective Date: February 14, 2026</p>
                    </div>
                </header>

                <div className="space-y-12 text-slate-600 leading-relaxed text-lg">
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">1. Agreement to Terms</h2>
                        <p>
                            By accessing or using the services provided by Delta Software & Communication Ltd, you agree to be bound by these Terms of Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">2. Service Provision</h2>
                        <p>
                            We provide broadband internet services subject to availability and technical feasibility. We reserve the right to modify or discontinue services with reasonable notice to active subscribers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">3. Responsible Use</h2>
                        <p>
                            Users agree not to use the service for any illegal activities, including but not limited to unauthorized access to networks, distribution of malware, or activities that compromise network integrity for other users.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">4. Billing & Cancellation</h2>
                        <p>
                            Subscriptions are billed in advance. Cancellation requests must be submitted at least 30 days prior to the desired termination date. Unpaid dues may result in service suspension.
                        </p>
                    </section>

                    <div className="pt-12 border-t border-slate-100 text-center lg:text-left">
                        <p className="text-slate-500 text-sm font-bold uppercase tracking-widest italic">
                            Failure to comply with terms may result in immediate termination of service.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

