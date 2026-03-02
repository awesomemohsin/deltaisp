'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Search, Filter } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { blogPosts, blogCategories } from '@/lib/blog-data'
import { DESIGN_VERSION } from '@/lib/site-config'

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [activeCategory, setActiveCategory] = useState('All')

    const filteredPosts = useMemo(() => {
        return blogPosts.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesCategory = activeCategory === 'All' || post.category === activeCategory
            return matchesSearch && matchesCategory
        })
    }, [searchQuery, activeCategory])

    return (
        <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
            <Navbar />

            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#EA2630]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 pt-20 pb-20 px-4 sm:px-6 lg:px-8 flex-grow w-full">
                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em]"
                    >
                        Our Journal
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none"
                    >
                        Blog & <span className={DESIGN_VERSION === 'hot' ? 'text-[#EA2630]' : 'text-primary'}>Updates</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium"
                    >
                        Stay updated with the latest in technology, company news, and connectivity guides from Delta ISP.
                    </motion.p>
                </div>

                {/* Search & Filter Bar */}
                <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between bg-card/40 backdrop-blur-md p-6 rounded-[2rem] border border-border/50 sticky top-24 z-30 shadow-xl shadow-primary/5">
                    <div className="relative w-full md:max-w-md group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
                        <Input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-12 h-12 bg-background/50 border-border/50 rounded-xl focus:ring-primary/20"
                        />
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
                        <Filter size={18} className="text-muted-foreground mr-2 shrink-0" />
                        {blogCategories.map(cat => (
                            <Button
                                key={cat}
                                variant={activeCategory === cat ? 'default' : 'ghost'}
                                onClick={() => setActiveCategory(cat)}
                                className={`rounded-full px-5 py-1.5 h-auto text-[10px] font-black uppercase tracking-widest ${activeCategory === cat ? 'shadow-lg shadow-primary/20' : 'text-muted-foreground'
                                    }`}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Blog Grid */}
                <motion.div
                    key={activeCategory + searchQuery}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post, idx) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-card/40 border border-border/50 rounded-[2.5rem] overflow-hidden hover:bg-card hover:border-primary/20 transition-all duration-500 flex flex-col shadow-xl hover:shadow-primary/5"
                            >
                                {/* Image Container */}
                                <div className="relative h-60 w-full overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow space-y-4">
                                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={12} className="text-primary" /> {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User size={12} className="text-primary" /> {post.author}
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-black tracking-tight leading-snug group-hover:text-primary transition-colors line-clamp-2 uppercase">
                                        {post.title}
                                    </h2>

                                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 font-medium">
                                        {post.excerpt}
                                    </p>

                                    <div className="pt-4 mt-auto">
                                        <Link href={`/blog/${post.id}`}>
                                            <Button variant="ghost" className="p-0 hover:bg-transparent text-primary font-black uppercase tracking-widest text-[10px] group/btn">
                                                Read More <ArrowRight size={14} className="ml-2 transition-transform group-hover/btn:translate-x-2" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center bg-card/20 rounded-[3rem] border border-dashed border-border/50">
                            <Search size={48} className="mx-auto text-muted-foreground/30 mb-4" />
                            <h3 className="text-xl font-bold uppercase tracking-tight">No articles found</h3>
                            <p className="text-muted-foreground font-medium">Try broadening your search or switching categories.</p>
                        </div>
                    )}
                </motion.div>
            </div>

            <Footer />
        </div>
    )
}
