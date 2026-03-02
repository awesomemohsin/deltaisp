'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowLeft, Share2, MessageCircle } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { blogPosts } from '@/lib/blog-data'
import { DESIGN_VERSION } from '@/lib/site-config'

export default function BlogDetailPage() {
    const params = useParams()
    const post = blogPosts.find(p => p.id === params.id)

    if (!post) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Navbar />
                <div className="flex-grow flex flex-col items-center justify-center space-y-6">
                    <h1 className="text-4xl font-black uppercase tracking-tighter">Article Not Found</h1>
                    <Link href="/blog">
                        <Button className="rounded-full px-8 py-6 font-black uppercase tracking-widest text-[10px] h-auto">
                            Back to Blog
                        </Button>
                    </Link>
                </div>
                <Footer />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
            <Navbar />

            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10 pt-20 pb-20 px-4 sm:px-6 lg:px-8 flex-grow w-full">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link href="/blog">
                        <Button variant="ghost" className="p-0 hover:bg-transparent text-primary font-black uppercase tracking-widest text-[10px] group">
                            <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-2" /> Back to All Articles
                        </Button>
                    </Link>
                </motion.div>

                {/* Hero / Header */}
                <div className="space-y-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em]"
                    >
                        {post.category}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight"
                    >
                        {post.title}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap items-center gap-8 text-[10px] font-black uppercase tracking-widest text-muted-foreground border-y border-border/50 py-6"
                    >
                        <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-primary" /> {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={14} className="text-primary" /> By {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                            <MessageCircle size={14} className="text-primary" /> 0 Comments
                        </div>
                    </motion.div>
                </div>

                {/* Cover Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative h-[300px] md:h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl mb-16"
                >
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* Article Content */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="prose prose-invert prose-primary max-w-none text-muted-foreground font-medium leading-relaxed text-lg"
                >
                    <p className="text-xl text-foreground font-bold italic border-l-4 border-primary pl-6 py-2 mb-10 normal-case">
                        {post.excerpt}
                    </p>

                    <div className="space-y-8 normal-case">
                        <p>
                            In an era where connectivity is no longer a luxury but a fundamental necessity, Delta Software & Communication Ltd is pushing the boundaries of what is possible in the Bangladeshi internet landscape.
                        </p>

                        <h2 className="text-2xl font-black text-foreground uppercase tracking-tight">The Fiber-Optic Revolution</h2>
                        <p>
                            We have invested heavily in local infrastructure, ensuring that our fiber-to-the-home (FTTH) connections provide the lowest latency possible. By eliminating copper bottlenecks, we ensure that every byte of data travels at the speed of light from our core routers directly to your doorstep.
                        </p>

                        <div className="bg-card/40 border border-border/50 rounded-3xl p-8 my-12">
                            <h3 className="text-primary font-black uppercase tracking-widest text-sm mb-4">Key Takeaways</h3>
                            <ul className="space-y-4">
                                <li>• Direct FTTH connections for maximum stability.</li>
                                <li>• Redundant data center uplinks to prevent downtime.</li>
                                <li>• 24/7 proactive monitoring through our Network Operations Center.</li>
                            </ul>
                        </div>

                        <p>
                            Our commitment goes beyond just speed. We are building a community of empowered users who have the tools and resources they need to thrive in the digital age. From the latest firmware updates for your ONT to strategic peering with global content providers (CDN), Delta ISP is your partner in digital growth.
                        </p>
                    </div>
                </motion.article>

                {/* Share Section */}
                <div className="mt-20 pt-12 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                        <Share2 size={16} className="text-primary" /> Share this article
                    </div>
                    <div className="flex gap-4">
                        {['Facebook', 'Twitter', 'LinkedIn', 'Copy Link'].map((platform) => (
                            <Button key={platform} variant="outline" className="rounded-full px-6 py-4 h-auto text-[10px] font-black uppercase tracking-widest hover:bg-primary/5 transition-all">
                                {platform}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Related Posts Link */}
                <div className="mt-32 text-center bg-primary/5 rounded-[4rem] p-12 md:p-20 border border-primary/10">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6 leading-none">
                        Hungry for <br /> <span className="text-primary">More Updates?</span>
                    </h2>
                    <p className="text-muted-foreground mb-8 font-medium">
                        Explore our full journal for more guides, news, and technical deep-dives.
                    </p>
                    <Link href="/blog">
                        <Button className="rounded-full px-12 py-8 font-black uppercase tracking-widest text-xs h-auto shadow-xl shadow-primary/20">
                            Explore All Articles
                        </Button>
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    )
}
