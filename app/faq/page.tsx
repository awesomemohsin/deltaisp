'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Search,
    ChevronDown,
    HelpCircle,
    ArrowRight,
    MessageCircle,
    PhoneCall,
    Facebook,
    MapPin
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { faqData, FAQItem } from '@/lib/faq-data'
import { contactInfo } from '@/lib/homepage-data'
import { DESIGN_VERSION } from '@/lib/site-config'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
}

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem, isOpen: boolean, onToggle: () => void }) {
    return (
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'bg-card shadow-lg border-primary/20 scale-[1.01]' : 'bg-card/40 border-border/50'
            } border rounded-2xl mb-4 group`}>
            <button
                onClick={onToggle}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
            >
                <span className={`font-bold transition-colors ${isOpen ? 'text-primary' : 'text-foreground/80 group-hover:text-foreground'}`}>
                    {item.question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                        }`}
                >
                    <ChevronDown size={18} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                            {Array.isArray(item.answer) ? (
                                <ul className="space-y-2 list-disc list-inside">
                                    {item.answer.map((line, i) => (
                                        <li key={i}>{line}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{item.answer}</p>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({})
    const [activeCategory, setActiveCategory] = useState<string>('all')
    const [hasMounted, setHasMounted] = React.useState(false)

    const toggleItem = (categoryId: string, index: number) => {
        const key = `${categoryId}-${index}`
        setOpenItems(prev => ({
            ...prev,
            [key]: !prev[key]
        }))
    }

    React.useEffect(() => {
        setHasMounted(true)
    }, [])

    const filteredData = useMemo(() => {
        // Deep clone-like mapping to ensure no mutations and fresh rendering identities
        return faqData
            .map(category => ({
                ...category,
                items: category.items.filter(item => {
                    const searchLower = searchQuery.toLowerCase().trim()
                    if (!searchLower) return true

                    const questionMatch = item.question.toLowerCase().includes(searchLower)
                    const answerMatch = Array.isArray(item.answer)
                        ? item.answer.some(line => line.toLowerCase().includes(searchLower))
                        : item.answer.toLowerCase().includes(searchLower)

                    return questionMatch || answerMatch
                })
            }))
            .filter(category => {
                const hasItems = category.items.length > 0
                const matchesCategory = activeCategory === 'all' || category.id === activeCategory
                return hasItems && matchesCategory
            })
    }, [searchQuery, activeCategory])

    if (!hasMounted) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Navbar />
                <div className="flex-grow flex items-center justify-center">
                    <div className="animate-pulse text-muted-foreground flex items-center gap-2">
                        <HelpCircle className="animate-spin" />
                        Initializing Knowledge Base...
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
            <Navbar />

            {/* Decorative background blurs */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-[#0C58A4]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#EA2630]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-20 pt-20 pb-20 px-4 sm:px-6 lg:px-8 flex-grow w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16 space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                        <HelpCircle size={14} /> Knowledge Base
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                        Frequently Asked <br />
                        <span className={DESIGN_VERSION === 'hot' ? 'text-[#EA2630]' : 'text-primary'}>Questions</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
                        Find quick answers to your questions about our services, setup, billing, and technical support.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                            <Search size={20} />
                        </div>
                        <Input
                            type="text"
                            placeholder="Search for answers (e.g., speed, billing, router)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-12 h-14 rounded-2xl bg-card border-border/50 focus:border-primary/50 focus:ring-primary/20 text-lg shadow-xl shadow-primary/5"
                        />
                    </div>
                </motion.div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12 relative z-30">
                    <Button
                        variant={activeCategory === 'all' ? 'default' : 'outline'}
                        onClick={() => setActiveCategory('all')}
                        className={`rounded-full px-6 font-bold uppercase tracking-widest text-[10px] transition-all hover:scale-105 active:scale-95 ${activeCategory === 'all'
                            ? 'shadow-lg shadow-primary/20 scale-105'
                            : 'hover:bg-primary/5 hover:border-primary/50 dark:hover:bg-primary/10'
                            }`}
                    >
                        All Categories
                    </Button>
                    {faqData.map(cat => (
                        <Button
                            key={cat.id}
                            variant={activeCategory === cat.id ? 'default' : 'outline'}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`rounded-full px-6 font-bold uppercase tracking-widest text-[10px] transition-all hover:scale-105 active:scale-95 ${activeCategory === cat.id
                                ? 'shadow-lg shadow-primary/20 scale-105'
                                : 'hover:bg-primary/5 hover:border-primary/50 dark:hover:bg-primary/10'
                                }`}
                        >
                            {cat.title}
                        </Button>
                    ))}
                </div>

                {/* FAQ Content */}
                <motion.div
                    key={activeCategory + searchQuery} // Force re-animation on filter change
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-16 relative z-20"
                >
                    {filteredData.length > 0 ? (
                        filteredData.map((category) => (
                            <motion.div key={category.id} variants={itemVariants} className="space-y-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="h-1.5 w-12 bg-primary rounded-full" />
                                    <h2 className="text-2xl font-black uppercase tracking-tight">
                                        {category.title}
                                    </h2>
                                </div>
                                <div className="grid grid-cols-1 gap-4">
                                    {category.items.map((item, index) => (
                                        <FAQAccordion
                                            key={`${category.id}-${index}`}
                                            item={item}
                                            isOpen={!!openItems[`${category.id}-${index}`]}
                                            onToggle={() => toggleItem(category.id, index)}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-card/40 rounded-[3rem] border border-dashed border-border">
                            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="text-muted-foreground" size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">No results found</h3>
                            <p className="text-muted-foreground">Try searching with different keywords or browse categories.</p>
                        </div>
                    )}
                </motion.div>

                {/* Support Section - Redesigned & Dynamic */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 relative group"
                >
                    {/* Dynamic Background with Mesh-like Gradients */}
                    <div className="absolute inset-0 rounded-[4rem] overflow-hidden">
                        <motion.div
                            animate={{
                                x: [0, 50, 0],
                                y: [0, -30, 0],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-[20%] -right-[10%] w-[120%] h-[120%] bg-gradient-to-br from-[#0C58A4] via-[#0C58A4] to-[#EA2630]/30 -z-10"
                        />
                        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    <div className="relative z-10 p-8 md:p-16 flex flex-col items-center text-center space-y-12">
                        {/* Title & Description */}
                        <div className="max-w-3xl space-y-6">
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.4em]"
                            >
                                <span className="w-2 h-2 rounded-full bg-[#EA2630] animate-pulse" />
                                Support Grid ONLINE
                            </motion.div>

                            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8] text-white">
                                Still have <br />
                                <span className="text-[#EA2630] drop-shadow-[0_0_30px_rgba(234,38,48,0.4)] contrast-125 italic">Questions?</span>
                            </h2>

                            <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                                Our elite support squad is on standby 24/7. Whether it&apos;s a complex technical challenge or a simple query, we&apos;re here to solve it.
                            </p>
                        </div>

                        {/* Contact Interaction Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-full max-w-5xl mx-auto">
                            {[
                                {
                                    icon: MessageCircle,
                                    label: 'WhatsApp',
                                    sub: 'Live Chat',
                                    href: contactInfo.whatsappLink,
                                    color: 'bg-green-500/20 text-green-400 group-hover:bg-green-500 group-hover:text-white',
                                    glow: 'group-hover:shadow-green-500/50'
                                },
                                {
                                    icon: PhoneCall,
                                    label: 'Hotline',
                                    sub: 'Voice Link',
                                    href: `tel:${contactInfo.phoneRaw}`,
                                    color: 'bg-[#EA2630]/20 text-[#EA2630] group-hover:bg-[#EA2630] group-hover:text-white',
                                    glow: 'group-hover:shadow-[#EA2630]/50'
                                },
                                {
                                    icon: Facebook,
                                    label: 'Updates',
                                    sub: 'Delta Feed',
                                    href: 'https://www.facebook.com/profile.php?id=61568434629601',
                                    color: 'bg-[#0C58A4]/20 text-[#0C58A4] group-hover:bg-[#0C58A4] group-hover:text-white',
                                    glow: 'group-hover:shadow-[#0C58A4]/50'
                                }
                            ].map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.href}
                                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                                    rel="noopener noreferrer"
                                    className="group/card relative"
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="p-8 rounded-[3rem] bg-white/5 backdrop-blur-xl border border-white/10 group-hover/card:bg-white/15 transition-all duration-500 h-full flex flex-col items-center gap-4 text-center">
                                        <div className={`p-5 rounded-2xl transition-all duration-500 ${item.color} shadow-lg ${item.glow}`}>
                                            <item.icon size={28} />
                                        </div>
                                        <div className="space-y-1">
                                            <div className="font-extrabold uppercase tracking-tight text-white text-lg">{item.label}</div>
                                            <div className="text-[10px] uppercase font-black tracking-widest text-[#EA2630] opacity-80 group-hover/card:opacity-100">{item.sub}</div>
                                        </div>
                                    </div>
                                    {/* Subtle Ambient Glow */}
                                    <div className={`absolute inset-0 -z-10 rounded-[3rem] blur-2xl opacity-0 group-hover/card:opacity-20 transition-opacity duration-700 ${item.color.split(' ')[0]}`} />
                                </motion.a>
                            ))}
                        </div>

                        {/* Direct Support Button */}
                        <div className="pt-8">
                            <Link href="/contact">
                                <Button className="h-16 px-12 rounded-full bg-white text-[#0C58A4] hover:bg-[#EA2630] hover:text-white font-black uppercase tracking-[0.3em] text-[11px] shadow-[0_20px_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[#EA2630]/40 transition-all active:scale-95 group/btn">
                                    Initialize Direct Access
                                    <ArrowRight className="ml-3 h-5 w-5 group-hover/btn:translate-x-3 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    )
}
