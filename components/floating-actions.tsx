
'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { contactInfo } from '@/lib/homepage-data'

/**
 * Configuration and Types
 */

const SCROLL_THRESHOLD = 300 // Visibility threshold for scroll-to-top button

interface FloatingAction {
    id: string
    icon: React.ReactNode
    label: string
    href: string
    color: string
}

const ACTIONS_CONFIG: FloatingAction[] = [
    {
        id: 'messenger',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.453 5.518 3.733 7.226V22l3.355-1.84a11.08 11.08 0 002.912.388c5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.192 12.213l-2.557-2.73-4.99 2.73 5.49-5.83 2.617 2.73 4.93-2.73-5.49 5.83z" />
            </svg>
        ),
        label: 'Send us message on Messenger',
        href: 'https://m.me/61568434629601',
        color: 'bg-[#0084FF] hover:bg-[#0070DA]',
    },
    {
        id: 'whatsapp',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.442-9.89 9.892-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.444 9.89-9.884 9.89m8.411-18.305A11.945 11.945 0 0012.051 0C5.414 0 0 5.414 0 12.05c0 2.12.553 4.184 1.59 6.037L0 24l6.105-1.604a12.004 12.004 0 005.946 1.554h.005c6.635 0 12.05-5.414 12.05-12.051 0-3.218-1.253-6.241-3.535-8.52z" />
            </svg>
        ),
        label: 'Contact us through Whatsapp',
        href: contactInfo.whatsappLink,
        color: 'bg-[#25D366] hover:bg-[#20bd5a]',
    },
]

/**
 * FloatingActions Component
 * A reusable container for floating interaction buttons.
 */
export function FloatingActions() {
    const [isScrollVisible, setIsScrollVisible] = useState(false)

    const toggleVisibility = useCallback(() => {
        setIsScrollVisible(window.pageYOffset > SCROLL_THRESHOLD)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [toggleVisibility])

    return (
        <div
            className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4 items-end pointer-events-none"
        >
            <AnimatePresence>
                {/* Brand Contact Buttons */}
                {ACTIONS_CONFIG.map((action, index) => (
                    <motion.div
                        key={action.id}
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="relative group flex items-center justify-end pointer-events-auto"
                    >
                        {/* Animated Label */}
                        <motion.span
                            className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-background/80 backdrop-blur-md border border-border text-xs font-bold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 -translate-x-2 group-hover:translate-x-0 shadow-xl"
                        >
                            {action.label}
                        </motion.span>

                        <a
                            href={action.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={action.label}
                            className="block"
                        >
                            <Button
                                size="icon"
                                className={cn(
                                    "w-14 h-14 rounded-full shadow-lg text-white transition-all hover:scale-110",
                                    action.color
                                )}
                            >
                                {action.icon}
                            </Button>
                        </a>
                    </motion.div>
                ))}

                {/* Scroll to Top Functional Button */}
                {isScrollVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="relative group flex items-center justify-end pointer-events-auto"
                    >
                        {/* Animated Label */}
                        <span className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-background/80 backdrop-blur-md border border-border text-xs font-bold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 -translate-x-2 group-hover:translate-x-0 shadow-xl">
                            Scroll to top
                        </span>

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={scrollToTop}
                            className="w-14 h-14 rounded-full shadow-lg border-primary/20 bg-background/80 backdrop-blur-md hover:bg-primary/10 text-primary transition-all hover:scale-110"
                            aria-label="Scroll to top"
                        >
                            <ChevronUp className="w-8 h-8" />
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
