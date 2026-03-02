'use client'

import React, { useCallback, useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import useEmblaCarousel from 'embla-carousel-react'
import { motion, AnimatePresence } from 'framer-motion'

import { banners } from '@/lib/homepage-data'
import { DESIGN_VERSION } from '@/lib/site-config'

export function BannerSlider() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [hasMounted, setHasMounted] = useState(false)
    const intervalRef = useRef<NodeJS.Timeout>(null)

    useEffect(() => {
        setHasMounted(true)
    }, [])

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        duration: 40,
    })

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    const resetAutoplay = useCallback(() => {
        if (!emblaApi) return
        if (intervalRef.current) clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
            emblaApi.scrollNext()
        }, 6000)
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        onSelect()
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)

        resetAutoplay()

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
            emblaApi.off('select', onSelect)
        }
    }, [emblaApi, onSelect, resetAutoplay])

    const scrollPrev = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollPrev()
            resetAutoplay()
        }
    }, [emblaApi, resetAutoplay])

    const scrollNext = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext()
            resetAutoplay()
        }
    }, [emblaApi, resetAutoplay])

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) {
            emblaApi.scrollTo(index)
            resetAutoplay()
        }
    }, [emblaApi, resetAutoplay])

    if (!hasMounted) {
        return (
            <section className="relative w-full overflow-hidden bg-transparent py-2 md:py-4">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="aspect-[21/9] md:aspect-video rounded-2xl bg-muted animate-pulse" />
                </div>
            </section>
        )
    }

    return (
        <section className="relative w-full overflow-hidden bg-transparent py-2 md:py-4">
            <div className="max-w-7xl mx-auto px-4 relative group z-10">
                <div className={`embla overflow-hidden transition-all duration-700 ${DESIGN_VERSION === 'hot' ? 'rounded-[2.5rem] border-2 border-[#EA2630]/20' : 'rounded-2xl border border-border'}`} ref={emblaRef}>
                    <div className="embla__container flex">
                        {banners.map((src, index) => (
                            <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 relative aspect-[21/9] md:aspect-video overflow-hidden">
                                <motion.div
                                    initial={{ scale: 1 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={src}
                                        alt={`Banner ${index + 1}`}
                                        fill
                                        priority={index === 0}
                                        className="object-cover"
                                    />
                                </motion.div>
                                {DESIGN_VERSION === 'hot' && (
                                    <>
                                        <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="absolute inset-y-0 -left-6 -right-6 md:-left-12 md:-right-12 flex items-center justify-between pointer-events-none z-20">
                    <Button
                        variant="ghost"
                        size="icon"
                        className={`w-14 h-14 rounded-full backdrop-blur-xl pointer-events-auto transition-all duration-300 hover:scale-110 shadow-2xl hidden md:flex ${DESIGN_VERSION === 'hot'
                            ? 'bg-white/10 border border-white/20 text-black dark:text-white hover:bg-[#EA2630] hover:border-[#EA2630] hover:text-white hover:shadow-[#EA2630]/40'
                            : 'bg-background/80 border border-primary/20 hover:bg-primary hover:text-white'
                            }`}
                        onClick={scrollPrev}
                    >
                        <ChevronLeft className="h-8 w-8" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className={`w-14 h-14 rounded-full backdrop-blur-xl pointer-events-auto transition-all duration-300 hover:scale-110 shadow-2xl hidden md:flex ${DESIGN_VERSION === 'hot'
                            ? 'bg-white/10 border border-white/20 text-black dark:text-white hover:bg-[#EA2630] hover:border-[#EA2630] hover:text-white hover:shadow-[#EA2630]/40'
                            : 'bg-background/80 border border-primary/20 hover:bg-primary hover:text-white'
                            }`}
                        onClick={scrollNext}
                    >
                        <ChevronRight className="h-8 w-8" />
                    </Button>
                </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-4 mt-8">
                {banners.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`group relative h-3 transition-all duration-500 rounded-full overflow-hidden ${selectedIndex === index
                            ? "w-12 bg-transparent"
                            : "w-3 bg-[#0C58A4]/20 hover:bg-[#0C58A4]/40"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        {selectedIndex === index && (
                            <motion.div
                                layoutId="activeDot"
                                className={`absolute inset-0 rounded-full ${DESIGN_VERSION === 'hot' ? 'bg-[#EA2630]' : 'bg-primary'}`}
                                initial={false}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                <div className="absolute inset-0 bg-white/20 animate-pulse" />
                            </motion.div>
                        )}
                    </button>
                ))}
            </div>
        </section>
    )
}
