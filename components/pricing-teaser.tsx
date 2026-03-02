'use client'

import React, { useCallback, useEffect } from 'react'
import Link from 'next/link'
import { Check, ArrowRight, ChevronLeft, ChevronRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import useEmblaCarousel from 'embla-carousel-react'
import { plans } from '@/components/pricing-page'
import { DESIGN_VERSION } from '@/lib/site-config'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function PricingTeaser() {
  const [hasMounted, setHasMounted] = React.useState(false)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  })

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const intervalRef = React.useRef<NodeJS.Timeout>(null)

  const resetAutoplay = useCallback(() => {
    if (!emblaApi) return
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    resetAutoplay()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [emblaApi, resetAutoplay])

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

  if (!hasMounted) {
    return (
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="h-10 bg-muted animate-pulse rounded-2xl w-64 mx-auto mb-8" />
          <div className="flex gap-4 overflow-hidden">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-[0_0_100%] md:flex-[0_0_33.333%] h-[400px] bg-muted animate-pulse rounded-[2.5rem]" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-balance">
            Simple, <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Transparent</span> Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Choose the perfect plan for your needs. Explore our high-speed fiber internet packages.
          </p>
        </motion.div>

        {/* Slider Controls */}
        <div className="absolute top-[60%] -left-2 -right-2 md:-left-16 md:-right-16 z-30 flex justify-between pointer-events-none">
          <Button
            variant="outline"
            size="icon"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur-sm border-primary/20 pointer-events-auto hover:bg-primary/10 transition-colors shadow-lg"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur-sm border-primary/20 pointer-events-auto hover:bg-primary/10 transition-colors shadow-lg"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </Button>
        </div>

        {/* Carousel Container */}
        <div className="embla overflow-hidden py-12 px-2" ref={emblaRef}>
          <div className="embla__container flex">
            {plans.map((plan, index) => (
              <div key={plan.name} className="embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] p-4">
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={DESIGN_VERSION === 'hot' ? { y: -12, scale: 1.02 } : { y: -8 }}
                  className={`relative transition-all duration-500 flex flex-col h-full group/card ${DESIGN_VERSION === 'hot'
                    ? `rounded-[2.5rem] backdrop-blur-3xl border border-black/10 dark:border-white/10 ${plan.popular
                      ? 'shadow-[0_20px_50px_-20px_rgba(234,38,48,0.3)]'
                      : 'hover:shadow-[0_20px_50px_-20px_rgba(12,88,164,0.15)]'
                    }`
                    : `rounded-2xl border ${plan.popular
                      ? 'border-primary bg-gradient-to-b from-primary/10 to-background shadow-lg shadow-primary/20'
                      : 'border-border bg-card hover:border-primary/50'
                    }`
                    }`}
                >
                  {/* Badge */}
                  {(plan.popular || plan.badgeText) && (
                    <div className={`absolute left-1/2 transform -translate-x-1/2 z-[30] ${DESIGN_VERSION === 'hot' ? '-top-3' : '-top-4'}`}>
                      <Badge
                        className={DESIGN_VERSION === 'hot' ? "px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl border-none whitespace-nowrap" : (plan.badgeColor ? "" : "bg-gradient-to-r from-primary to-secondary")}
                        style={DESIGN_VERSION === 'hot'
                          ? { backgroundColor: plan.popular ? '#EA2630' : '#0C58A4', color: '#FFFFFF' }
                          : (plan.badgeColor ? { backgroundColor: plan.badgeColor } : {})}
                      >
                        {plan.badgeText || (plan.popular ? 'Most Popular' : 'Best Value')}
                      </Badge>
                    </div>
                  )}

                  {/* Speed Beam Animation */}
                  {DESIGN_VERSION === 'hot' && (
                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none z-0">
                      <div className={`absolute -inset-[400%] animate-[spin_3s_linear_infinite] opacity-100`}
                        style={{
                          background: `conic-gradient(from 0deg, transparent 0deg, transparent 320deg, ${plan.popular ? '#EA2630' : '#0C58A4'} 360deg)`
                        }}
                      />
                      {/* Inner Mask to create the border look */}
                      <div className="absolute inset-[1.5px] rounded-[2.5rem] bg-background z-10" />
                    </div>
                  )}

                  <div className="p-8 flex flex-col h-full relative z-20">
                    {/* Plan Header */}
                    <div className={DESIGN_VERSION === 'hot' ? "mb-6" : "mb-6"}>
                      <h3 className={DESIGN_VERSION === 'hot' ? "text-xs font-black tracking-[0.3em] uppercase mb-3 opacity-70" : "text-2xl font-bold mb-2 text-foreground"} style={DESIGN_VERSION === 'hot' ? { color: plan.popular ? '#EA2630' : '#0C58A4' } : {}}>
                        {plan.name}
                      </h3>
                      <div className="flex items-center gap-3 mb-4 relative">
                        {DESIGN_VERSION === 'hot' && <Zap className={`w-6 h-6 ${plan.popular ? 'text-[#EA2630]' : 'text-[#0C58A4]'} fill-current`} />}
                        <div
                          className={DESIGN_VERSION === 'hot' ? "text-5xl md:text-6xl font-black italic tracking-tighter" : "text-primary font-bold text-xl md:text-2xl"}
                          style={DESIGN_VERSION === 'hot' ? { color: plan.popular ? '#EA2630' : '#0C58A4' } : {}}
                        >
                          {plan.speed}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{plan.description}</p>

                      <div className={DESIGN_VERSION === 'hot' ? "flex items-baseline gap-1 bg-black/5 dark:bg-white/5 p-4 rounded-2xl border border-white/10" : "flex items-baseline gap-1"}>
                        {plan.isEnterprise ? (
                          <span className={DESIGN_VERSION === 'hot' ? "text-2xl font-black text-foreground italic uppercase tracking-tighter" : "text-3xl font-bold text-foreground"}>Talk to us</span>
                        ) : (
                          <>
                            <div className="flex items-baseline gap-0.5">
                              <span className="text-3xl font-black">৳</span>
                              <span className="text-3xl font-black tracking-tighter">{plan.price}</span>
                              <span className="text-[10px] text-muted-foreground ml-1 font-bold uppercase tracking-widest">{plan.period}</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="mb-8 flex-grow">
                      {DESIGN_VERSION === 'hot' && <div className="text-[10px] font-black text-[#999A9B] uppercase tracking-[0.2em] mb-4 border-b border-border/50 pb-2">Premium Perks</div>}
                      <ul className="space-y-3">
                        {plan.features.slice(0, 4).map((feature) => (
                          <li key={feature.name} className="flex items-center gap-3 text-sm group/item">
                            <div className={DESIGN_VERSION === 'hot' ? `p-1 rounded-full ${plan.popular ? 'bg-[#EA2630]/10' : 'bg-[#0C58A4]/10'}` : ""}>
                              <Check
                                className={DESIGN_VERSION === 'hot' ? "w-2.5 h-2.5" : "w-4 h-4 text-secondary flex-shrink-0 mt-0.5"}
                                style={DESIGN_VERSION === 'hot' ? { color: plan.popular ? '#EA2630' : '#0C58A4' } : {}}
                              />
                            </div>
                            <span className={`font-bold tracking-tight transition-transform group-hover/item:translate-x-1 ${DESIGN_VERSION === 'hot' ? 'text-foreground/80' : 'text-muted-foreground'}`}>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Button
                      asChild
                      className={`w-full h-12 rounded-lg text-xs font-black uppercase tracking-widest transition-all duration-300 relative overflow-hidden group/btn ${DESIGN_VERSION === 'hot'
                        ? ""
                        : plan.popular
                          ? 'bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 text-white'
                          : 'border border-primary/50 text-primary hover:bg-primary/10'
                        }`}
                      style={DESIGN_VERSION === 'hot' ? {
                        background: plan.popular
                          ? 'linear-gradient(135deg, #EA2630 0%, #B21C24 100%)'
                          : 'transparent',
                        border: plan.popular ? 'none' : '2px solid #0C58A4',
                        color: plan.popular ? '#FFFFFF' : '#0C58A4',
                        boxShadow: plan.popular ? '0 10px 20px -5px rgba(234,38,48,0.4)' : 'none'
                      } : {}}
                    >
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        <span className="relative z-10">{plan.cta}</span>
                        <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform relative z-10" />
                        {plan.popular && (
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                        )}
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex justify-center gap-4 mt-8 md:hidden">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-primary/20 hover:bg-primary/10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-5 w-5 text-primary" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-primary/20 hover:bg-primary/10"
            onClick={scrollNext}
          >
            <ChevronRight className="h-5 w-5 text-primary" />
          </Button>
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/packages">
            <Button variant="link" size="lg" className="text-primary hover:gap-3 transition-all">
              View All Packages and Features
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
