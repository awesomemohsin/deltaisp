'use client'

import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

/**
 * BACKUP HERO SECTION
 * This file is kept as a reference and is not used in the main application.
 */
export function HeroSectionBackup() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden grayscale opacity-50 pointer-events-none">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-8"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/50"
                    >
                        <Zap size={16} className="text-secondary" />
                        <span className="text-sm font-medium text-secondary">Lightning-Fast Internet</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance"
                    >
                        <span className="bg-gradient-to-r from-primary via-blue-400 to-secondary bg-clip-text text-transparent">
                            Fast. Reliable. Unlimited.
                        </span>
                        <br />
                        <span className="text-foreground">Internet for Your Home & Business</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance"
                    >
                        Experience enterprise-grade connectivity with 99.99% uptime guarantee. Stream, work, and play without limits.
                    </motion.p>

                    <motion.div
                        className="flex flex-col md:flex-row justify-center gap-4 pt-4"
                    >
                        <Button disabled>Get Connected</Button>
                        <Button variant="outline" disabled>View Plans</Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
