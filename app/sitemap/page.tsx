'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
    Network,
    Home,
    Info,
    Wrench,
    Package,
    ShieldCheck,
    BookOpen,
    HelpCircle,
    Map,
    ArrowUpRight
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { contactInfo } from '@/lib/homepage-data'
import { DESIGN_VERSION } from '@/lib/site-config'

const sitemapData = [
    {
        title: 'Core Pages',
        icon: Home,
        links: [
            { label: 'Homepage', href: '/' },
            { label: 'About Us', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Packages', href: '/packages' },
            { label: 'Contact', href: '/contact' },
        ]
    },
    {
        title: 'Resources',
        icon: BookOpen,
        links: [
            { label: 'Blog & Updates', href: '/blog' },
            { label: 'Help Center', href: '/support' },
            { label: 'FAQ', href: '/faq' },
            { label: 'Speed Test', href: '/speedtest' },
            { label: 'BTRC Tariff', href: '/files/BTRC_Tariff_Delta.pdf' },
        ]
    },
    {
        title: 'Support',
        icon: HelpCircle,
        links: [
            { label: 'Technical Guides', href: '/support' },
            { label: 'Billing Support', href: '/faq#billing' },
            { label: 'Connection Support', href: '/faq#support' },
            { label: 'Live Chat', href: contactInfo.whatsappLink },
        ]
    },
    {
        title: 'Legal & Policies',
        icon: ShieldCheck,
        links: [
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Cookie Policy', href: '/cookies' },
            { label: 'Accessibility', href: '/accessibility' },
        ]
    }
]

export default function SitemapPage() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden flex flex-col uppercase">
            <Navbar />

            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 pt-20 pb-20 px-4 sm:px-6 lg:px-8 flex-grow w-full">
                {/* Header */}
                <div className="text-center mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-[0.3em]"
                    >
                        <Map size={14} /> Navigation Map
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-black tracking-tighter leading-none"
                    >
                        Site <span className={DESIGN_VERSION === 'hot' ? 'text-[#EA2630]' : 'text-primary'}>Structure</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium"
                    >
                        A comprehensive overview of all pages and directories within the Delta Software & Communication Ltd website.
                    </motion.p>
                </div>

                {/* Sitemap Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {sitemapData.map((section, idx) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                                    <section.icon size={20} />
                                </div>
                                <h2 className="text-xl font-black tracking-tight uppercase">{section.title}</h2>
                            </div>

                            <ul className="space-y-4">
                                {section.links.map((link, lIdx) => (
                                    <motion.li
                                        key={lIdx}
                                        whileHover={{ x: 10 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="group flex items-center justify-between p-4 rounded-2xl bg-card/40 border border-border/50 hover:bg-card hover:border-primary/20 transition-all shadow-xl hover:shadow-primary/5"
                                        >
                                            <span className="font-bold text-sm text-foreground/80 group-hover:text-primary transition-colors">
                                                {link.label}
                                            </span>
                                            <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Visualization / Integration Section */}
                <div className="mt-32 p-10 md:p-16 rounded-[4rem] bg-card/20 border border-border/50 backdrop-blur-md relative overflow-hidden text-center">
                    <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                        <Network size={64} className="mx-auto text-primary animate-pulse" />
                        <h2 className="text-4xl font-black tracking-tighter uppercase leading-none">Can&apos;t find what you&apos;re looking for?</h2>
                        <p className="text-muted-foreground text-lg font-medium normal-case">
                            If you are lost or looking for specific information not listed here, our search engine and help center are always available.
                        </p>
                        <div className="pt-4">
                            <Link href="/support">
                                <Button className="rounded-full px-8 py-6 font-black uppercase tracking-widest text-[10px] h-auto shadow-xl shadow-primary/20">
                                    Go to Support Center
                                </Button>
                            </Link>
                        </div>
                    </div>
                    {/* Abstract Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>
            </div>

            <Footer />
        </div>
    )
}
