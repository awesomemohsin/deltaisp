
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, Target, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { DESIGN_VERSION } from '@/lib/site-config'

const HEADLINE_PHRASES = [
  "Your Gateway to a Faster Bangladesh",
  "Zero Lag. Zero Buffering. Pure Speed.",
  "Connecting Bangladesh at the Speed of Innovation"
]

const DESCRIPTION_PHRASES = [
  "Reliable, high-speed internet solutions delivering uninterrupted connectivity across Bangladesh for homes, businesses, and enterprises.",
  "From Dhaka to the farthest districts, unleash the true power of the internet with our ultra-low latency fiber network.",
  "Experience stable bandwidth, low latency, and professional support—backed by nationwide infrastructure."
]

/**
 * TypewriterText Component
 * Animates text character by character for a typewriter effect.
 */
function TypewriterText({ text }: { text: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      key={text}
      className="inline-block"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: index * 0.03,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

function FloatingDot({ className, delay = 0 }: { className?: string, delay?: number }) {
  return (
    <motion.div
      animate={{
        y: [0, -30, 0],
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.2, 1]
      }}
      transition={{ duration: 5, repeat: Infinity, delay, ease: "easeInOut" }}
      className={`absolute w-3 h-3 rounded-full blur-sm ${className}`}
    />
  )
}

export function HeroSection() {
  const [index, setIndex] = useState(0)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (!hasMounted) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HEADLINE_PHRASES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [hasMounted])

  if (!hasMounted) {
    return (
      <section className="relative min-h-[75vh] flex items-center overflow-hidden py-10 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-7xl mx-auto w-full text-center space-y-8">
          <div className="h-10 w-64 bg-muted animate-pulse mx-auto rounded-2xl" />
          <div className="h-20 w-full bg-muted animate-pulse rounded-2xl" />
          <div className="h-16 w-full bg-muted animate-pulse rounded-2xl" />
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden py-10 px-4 sm:px-6 lg:px-8">
      {/* Mesh Gradient Background */}
      {DESIGN_VERSION === 'hot' && (
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-transparent" />
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[10%] -left-[10%] w-[800px] h-[800px] rounded-full blur-[140px] bg-[#0C58A4]/10"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 100, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[20%] -right-[10%] w-[900px] h-[900px] rounded-full blur-[160px] bg-[#EA2630]/10"
          />
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        </div>
      )}

      {/* Floating Accent Dots */}
      <FloatingDot className="bg-[#EA2630] top-1/4 left-1/4" delay={0} />
      <FloatingDot className="bg-[#0C58A4] bottom-1/4 right-1/4" delay={2} />
      <FloatingDot className="bg-primary top-1/3 right-1/3" delay={4} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={`inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl text-xs font-black uppercase tracking-[0.3em] shadow-inner ${DESIGN_VERSION === 'hot'
              ? 'bg-[#EA2630]/10 border border-[#EA2630]/30 text-[#EA2630]'
              : 'bg-secondary/20 border border-secondary/50 text-secondary'
              }`}
          >
            <Zap size={16} className="animate-pulse" />
            <span>Built for Speed. Powered by Trust.</span>
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl font-black tracking-[-0.06em] text-balance flex flex-col items-center gap-0.5 uppercase leading-[0.9]"
            >
              <span className={DESIGN_VERSION === 'hot'
                ? "bg-gradient-to-br from-[#0C58A4] via-[#0C58A4] to-black bg-clip-text text-transparent drop-shadow-sm"
                : "bg-gradient-to-r from-primary via-blue-400 to-secondary bg-clip-text text-transparent"}>
                Delta Software
              </span>
              <span className={DESIGN_VERSION === 'hot' ? "text-black" : "text-foreground"}>
                & Communication Ltd
              </span>
            </motion.h1>

            <div className="h-[2em] md:h-[1.5em] flex items-center justify-center pt-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -20 }}
                  transition={{ duration: 0.6, ease: "circOut" }}
                  className={`text-xl md:text-4xl lg:text-5xl font-black tracking-tight italic ${DESIGN_VERSION === 'hot' ? 'text-[#EA2630] drop-shadow-[0_0_15px_rgba(234,38,48,0.3)]' : 'text-foreground'
                    }`}
                >
                  <TypewriterText text={HEADLINE_PHRASES[index]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Subheading / Description Carousel */}
          <div className="h-[3.5rem] md:h-[2.5rem] flex flex-col items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="text-sm md:text-base text-muted-foreground/80 max-w-xl mx-auto text-balance leading-normal font-medium"
              >
                {DESCRIPTION_PHRASES[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col md:flex-row justify-center gap-3 pt-4"
          >
            <Link href="/contact" className="w-full md:w-auto">
              <Button className={`h-14 px-8 rounded-xl font-black text-base transition-all shadow-xl group w-full ${DESIGN_VERSION === 'hot'
                ? 'bg-[#EA2630] hover:bg-[#B21C24] text-white hover:shadow-[#EA2630]/40'
                : 'bg-gradient-to-r from-primary to-secondary hover:shadow-primary/50'
                }`}>
                GET CONNECTED
                <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-3 transition-transform duration-500" />
              </Button>
            </Link>
            <Link href="/services" className="w-full md:w-auto">
              <Button variant="outline" className={`h-14 px-8 rounded-xl font-black text-base transition-all shadow-lg bg-transparent w-full ${DESIGN_VERSION === 'hot'
                ? 'border-2 border-[#0C58A4] text-[#0C58A4] hover:bg-[#0C58A4] hover:text-white'
                : 'border-primary/50 hover:bg-primary/10'
                }`}>
                OUR SOLUTIONS
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="pt-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/60"
          >
            <div className="flex items-center gap-3 group">
              <div className={`w-3 h-3 rounded-full transition-transform group-hover:scale-150 ${DESIGN_VERSION === 'hot' ? 'bg-[#EA2630] shadow-[0_0_8px_#EA2630]' : 'bg-secondary'}`} />
              <span>Nationwide Fiber Network</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className={`w-3 h-3 rounded-full transition-transform group-hover:scale-150 ${DESIGN_VERSION === 'hot' ? 'bg-[#0C58A4] shadow-[0_0_8px_#0C58A4]' : 'bg-secondary'}`} />
              <span>Zero Jitter Technology</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className={`w-3 h-3 rounded-full transition-transform group-hover:scale-150 ${DESIGN_VERSION === 'hot' ? 'bg-black shadow-[0_0_8px_rgba(0,0,0,0.2)]' : 'bg-secondary'}`} />
              <span>24/7 Elite Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
