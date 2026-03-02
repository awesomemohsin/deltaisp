'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Gauge, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { SpeedTestSection } from '@/components/speed-test-section'
import { DESIGN_VERSION } from '@/lib/site-config'

export default function SpeedTestPage() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
            <Navbar />

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
            <div className={`absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[120px] -z-10 ${DESIGN_VERSION === 'hot' ? 'bg-[#EA2630]/5' : 'bg-primary/5'}`} />

            <div className="max-w-7xl mx-auto relative z-10 pt-20 pb-20 px-4 sm:px-6 lg:px-8 flex-grow w-full">
                {/* Header */}
                <div className="text-center mb-16 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em]"
                    >
                        <Gauge size={14} /> Network Diagnostic
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-black tracking-tighter leading-none uppercase"
                    >
                        Precision <span className={DESIGN_VERSION === 'hot' ? 'text-[#EA2630]' : 'text-primary'}>Speed Test</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium"
                    >
                        Measure your connection performance with our official diagnostic tool. Optimized for Delta Fiber customers.
                    </motion.p>
                </div>

                {/* Main Speedtest Section */}
                <div className="bg-card/20 backdrop-blur-md rounded-[3rem] border border-border/50 overflow-hidden">
                    {/* Note: Reusing the component, but we'll show it prominently */}
                    <div className="md:block scale-100 py-12">
                        <SpeedTestSection />
                    </div>

                    {/* Mobile Warning */}
                    <div className="md:hidden p-12 text-center space-y-4">
                        <div className="text-[#EA2630] font-black uppercase tracking-tighter text-2xl">Desktop mode required</div>
                        <p className="text-muted-foreground text-sm font-medium">
                            For precise results and advanced diagnostic data, please access this speed test from a desktop browser.
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/">
                        <Button variant="ghost" className="rounded-full px-8 py-6 font-black uppercase tracking-widest text-[10px] h-auto">
                            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
                        </Button>
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    )
}
