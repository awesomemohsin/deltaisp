'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
    LifeBuoy,
    Settings,
    Wifi,
    CreditCard,
    Zap,
    MessageSquare,
    PhoneCall,
    FileText,
    ChevronRight,
    Search
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { contactInfo } from '@/lib/homepage-data'
import { DESIGN_VERSION } from '@/lib/site-config'

const supportTopics = [
    {
        icon: Wifi,
        title: 'Connection Issues',
        description: 'Troubleshoot slow speeds, frequent drops, or no internet access.',
        href: '/faq#support',
        color: 'bg-blue-500/10 text-blue-500'
    },
    {
        icon: CreditCard,
        title: 'Billing & Payments',
        description: 'Manage your invoices, update payment methods, and check billing history.',
        href: '/faq#billing',
        color: 'bg-emerald-500/10 text-emerald-500'
    },
    {
        icon: Settings,
        title: 'Account Settings',
        description: 'Update your profile, change passwords, and manage notification preferences.',
        href: '/faq#policy',
        color: 'bg-orange-500/10 text-orange-500'
    },
    {
        icon: Zap,
        title: 'Technical Setup',
        description: 'Guides on setting up your router, ONT, and home networking equipment.',
        href: '/faq#installation',
        color: 'bg-purple-500/10 text-purple-500'
    }
]

const quickActions = [
    { icon: MessageSquare, label: 'Chat on WhatsApp', sub: 'Instant Response', href: contactInfo.whatsappLink },
    { icon: PhoneCall, label: 'Call Hotline', sub: '+880 9611678064', href: `tel:${contactInfo.phoneRaw}` },
    { icon: FileText, label: 'Documentation', sub: 'PDF Guides', href: '/sitemap' }
]

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden flex flex-col uppercase">
            <Navbar />

            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 pt-20 pb-20 px-4 sm:px-6 lg:px-8 flex-grow w-full">
                {/* Hero Section */}
                <div className="text-center mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-[0.3em]"
                    >
                        <LifeBuoy size={14} /> Help Center
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-black tracking-tighter leading-none"
                    >
                        How can we <br />
                        <span className={DESIGN_VERSION === 'hot' ? 'text-[#EA2630]' : 'text-primary'}>help you today?</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-xl mx-auto relative group mt-8"
                    >
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={24} />
                        <Input
                            placeholder="Search for articles, guides, or solutions..."
                            className="h-16 pl-14 pr-6 rounded-2xl bg-card border-border/50 text-lg shadow-2xl shadow-primary/5 focus:ring-primary/20 transition-all"
                        />
                    </motion.div>
                </div>

                {/* Support Topics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {supportTopics.map((topic, idx) => (
                        <motion.div
                            key={topic.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Link href={topic.href} className="block h-full group">
                                <div className="h-full bg-card/40 backdrop-blur-md border border-border/50 p-8 rounded-[2.5rem] hover:bg-card hover:border-primary/20 transition-all duration-500 shadow-xl hover:shadow-primary/5">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6 ${topic.color}`}>
                                        <topic.icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-black tracking-tight mb-3 group-hover:text-primary transition-colors">
                                        {topic.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm font-medium leading-relaxed normal-case">
                                        {topic.description}
                                    </p>
                                    <div className="mt-6 flex items-center text-primary text-[10px] font-black tracking-widest gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        Learn More <ChevronRight size={14} />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Quick Actions / Contact Section */}
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-[4rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-primary/20 mb-24">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[80px] -translate-y-1/3 translate-x-1/3" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="max-w-md space-y-6 text-center lg:text-left">
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">
                                Need Immediate <br /> Support?
                            </h2>
                            <p className="text-white/80 font-medium normal-case">
                                Our support engineers are working around the clock to ensure you stay connected. Choose your preferred contact method.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:w-auto">
                            {quickActions.map((action, idx) => (
                                <a
                                    key={idx}
                                    href={action.href}
                                    target={action.href.startsWith('http') ? '_blank' : '_self'}
                                    className="group"
                                >
                                    <div className="p-8 rounded-[2.5rem] bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all text-center h-full flex flex-col items-center">
                                        <action.icon size={36} className="mb-4 text-[#EA2630] transition-transform group-hover:scale-110" />
                                        <div className="font-black tracking-tight text-white mb-1 whitespace-nowrap">{action.label}</div>
                                        <div className="text-[10px] font-black opacity-60 tracking-[0.2em]">{action.sub}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Troubleshooting Quick Tips */}
                <div className="space-y-10">
                    <div className="flex items-center gap-4">
                        <div className="h-2 w-16 bg-primary rounded-full" />
                        <h2 className="text-3xl font-black tracking-tighter uppercase">Quick Self-Help Tips</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                q: "Internet is slow or intermittent?",
                                a: "Try restarting your router by unplugging it for 30 seconds. Also, check if too many devices are connected simultaneously."
                            },
                            {
                                q: "Red light on your ONT / Media Converter?",
                                a: "A red LOS light usually means a fiber break. Check the yellow fiber cable for sharp bends or damage and contact support."
                            },
                            {
                                q: "Can't access a specific website?",
                                a: "Clear your browser cache or try a different browser. If the issue persists, it might be a server-side problem with the website."
                            },
                            {
                                q: "Forgotten your Wi-Fi password?",
                                a: "You can find it on the sticker at the bottom of your router, or log in to the router settings (usually 192.168.0.1)."
                            }
                        ].map((tip, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-[2rem] bg-card/20 border border-border/50 flex flex-col space-y-4"
                            >
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-black text-primary">
                                    {idx + 1}
                                </div>
                                <h3 className="text-lg font-black tracking-tight uppercase leading-tight">{tip.q}</h3>
                                <p className="text-muted-foreground text-sm font-medium normal-case leading-relaxed">
                                    {tip.a}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
