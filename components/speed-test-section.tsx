'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gauge, Activity, ArrowRight, X, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DESIGN_VERSION } from '@/lib/site-config'

function DigitalReadout({ value, label }: { value: string, label: string }) {
    return (
        <div className="relative group/readout">
            <div className={`text-3xl md:text-4xl font-mono font-black tracking-tighter transition-all duration-300 ${DESIGN_VERSION === 'hot' ? 'text-foreground group-hover/readout:text-[#EA2630]' : 'text-primary'}`}>
                {value}
            </div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-black mt-1 opacity-70 group-hover/readout:opacity-100 transition-opacity">
                {label}
            </div>
            {/* Glitch Effect Line */}
            <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#EA2630] group-hover/readout:w-full transition-all duration-500 shadow-[0_0_10px_#EA2630]" />
        </div>
    )
}

export function SpeedTestSection() {
    const [isTesting, setIsTesting] = useState(false)
    const [glitch, setGlitch] = useState(false)
    const sectionRef = React.useRef<HTMLElement>(null)

    const handleStartTest = () => {
        setIsTesting(true)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setGlitch(true)
            setTimeout(() => setGlitch(false), 150)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section ref={sectionRef} className="hidden md:block py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
            {/* Background Decorative Elements */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-[160px] -z-10 ${DESIGN_VERSION === 'hot' ? 'bg-[#0C58A4]/5' : 'bg-primary/5'}`} />

            <div className="max-w-7xl mx-auto">
                <div className={`relative group overflow-hidden transition-all duration-700 ${isTesting
                    ? 'p-0 bg-transparent border-none shadow-none'
                    : `p-6 md:p-10 ${DESIGN_VERSION === 'hot'
                        ? 'rounded-[2rem] border border-[#EA2630]/10 bg-card/40 backdrop-blur-xl shadow-lg'
                        : 'rounded-[1.5rem] border border-border bg-card/20 backdrop-blur-lg'}`
                    }`}>

                    {/* Background Texture & Gradients - Simplified */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0C58A4]/5 to-[#EA2630]/5 opacity-40" />

                    <div className={`absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 transition-all duration-1000 ${DESIGN_VERSION === 'hot' ? 'bg-[#0C58A4]/15' : 'bg-primary/10'}`} />

                    <div className={`relative z-10 grid grid-cols-1 ${isTesting ? 'place-items-center' : 'lg:grid-cols-2'} gap-6 items-center transition-all duration-500`}>
                        {/* Content Side */}
                        {!isTesting && (
                            <div className="space-y-10 text-center lg:text-left">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={`inline-flex items-center gap-3 px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-[0.3em] mb-8 shadow-inner ${DESIGN_VERSION === 'hot'
                                        ? 'bg-[#EA2630]/10 border border-[#EA2630]/30 text-[#EA2630] shadow-[#EA2630]/5'
                                        : 'bg-primary/10 border border-primary/20 text-primary'
                                        }`}>
                                        <Activity className="w-4 h-4 animate-pulse" />
                                        Diagnostic Protocol ACTIVE
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-balance leading-[0.9] uppercase italic group-hover:not-italic transition-all duration-500">
                                        Unleash <br />
                                        <span className={DESIGN_VERSION === 'hot' ? "text-[#EA2630] drop-shadow-[0_4px_15px_rgba(234,38,48,0.3)]" : "bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"}>Titan Speed</span>
                                    </h2>
                                    <p className="text-sm text-muted-foreground max-w-xl mx-auto lg:mx-0 text-balance leading-relaxed font-medium">
                                        Verify your real-time fiber performance. Experience the consistent, high-speed stability that defines Delta Internet.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="flex flex-wrap justify-center lg:justify-start gap-4"
                                >
                                    {!isTesting ? (
                                        <Button
                                            onClick={handleStartTest}
                                            size="lg"
                                            className={`h-14 px-8 rounded-xl transition-all font-black text-base group shadow-xl relative overflow-hidden ${DESIGN_VERSION === 'hot'
                                                ? 'bg-[#0C58A4] hover:bg-[#084175] text-white hover:shadow-[#0C58A4]/40'
                                                : 'bg-gradient-to-r from-primary to-secondary hover:shadow-primary/50'
                                                }`}
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                START SPEEDTEST
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                                            </span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                        </Button>
                                    ) : (
                                        <Button
                                            onClick={() => setIsTesting(false)}
                                            variant="outline"
                                            size="lg"
                                            className="h-16 px-10 rounded-2xl border-destructive/30 text-destructive hover:bg-destructive/10 bg-transparent font-black uppercase tracking-[0.2em] shadow-lg"
                                        >
                                            <X className="mr-2 w-5 h-5" />
                                            Abort Tool
                                        </Button>
                                    )}
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    viewport={{ once: true }}
                                    className="grid grid-cols-3 gap-8 pt-8 border-t border-black/5 dark:border-white/5 max-w-md mx-auto lg:mx-0"
                                >
                                    <DigitalReadout value="99.9%" label="Uptime" />
                                    <DigitalReadout value="<5ms" label="Latency" />
                                    <DigitalReadout value="MAX" label="Speed" />
                                </motion.div>
                            </div>
                        )}

                        {/* Interactive Gauge / Test Iframe Side */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className={`relative flex justify-center w-full min-h-[450px] ${isTesting ? 'col-span-full' : ''}`}
                        >
                            <AnimatePresence mode="wait">
                                {!isTesting ? (
                                    <motion.div
                                        key="gauge"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                                        className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center group/gauge"
                                    >
                                        {/* Outer Rotating Ring */}
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                            className={`absolute inset-0 rounded-full border border-dashed ${DESIGN_VERSION === 'hot' ? 'border-[#EA2630]/20' : 'border-primary/20'}`}
                                            style={{ willChange: "transform" }}
                                        />

                                        {/* Counter Rotating Ring */}
                                        <motion.div
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                            className={`absolute inset-8 rounded-full border border-dotted ${DESIGN_VERSION === 'hot' ? 'border-[#0C58A4]/20' : 'border-secondary/20'}`}
                                            style={{ willChange: "transform" }}
                                        />

                                        {/* Main Gauge SVG */}
                                        <svg viewBox="0 0 200 200" className="w-full h-full absolute inset-0 rotate-[90deg]">
                                            {/* Background Circle */}
                                            <circle cx="100" cy="100" r="80" fill="none" strokeWidth="2" stroke={DESIGN_VERSION === 'hot' ? '#EA2630' : 'currentColor'} className="opacity-10" />

                                            {/* Progress Arc */}
                                            <motion.circle
                                                cx="100"
                                                cy="100"
                                                r="80"
                                                fill="none"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                stroke={DESIGN_VERSION === 'hot' ? '#EA2630' : 'currentColor'}
                                                className={DESIGN_VERSION === 'hot' ? 'drop-shadow-[0_0_10px_rgba(234,38,48,0.5)]' : 'text-primary drop-shadow-[0_0_10px_rgba(var(--primary),0.5)]'}
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 0.75 }}
                                                transition={{ duration: 2, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
                                                style={{ willChange: "transform, stroke-dasharray, stroke-dashoffset" }}
                                            />
                                        </svg>

                                        {/* Center Content */}
                                        <div className="flex flex-col items-center justify-center relative z-10 p-10 rounded-full bg-background/50 backdrop-blur-md border border-white/10 shadow-2xl">
                                            <div className="flex items-baseline gap-1">
                                                <span className={`text-5xl font-black tracking-tighter ${DESIGN_VERSION === 'hot' ? 'text-[#EA2630]' : 'text-primary'}`}>
                                                    DELTA
                                                </span>
                                                <span className="text-sm font-bold opacity-70">
                                                    FIBER
                                                </span>
                                            </div>
                                            <div className="text-[10px] uppercase tracking-[0.2em] opacity-50 font-bold mt-1">
                                                Ready to Test
                                            </div>

                                            {/* Pulse Indicator */}
                                            <div className={`mt-4 w-2 h-2 rounded-full animate-pulse ${DESIGN_VERSION === 'hot' ? 'bg-[#0C58A4]' : 'bg-secondary'}`} />
                                        </div>

                                        {/* Floating Badge */}
                                        <motion.div
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            className={`absolute -bottom-4 bg-background/90 backdrop-blur border px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl flex items-center gap-2 ${DESIGN_VERSION === 'hot' ? 'border-[#EA2630]/30 text-[#EA2630]' : 'border-primary/30 text-primary'}`}
                                        >
                                            <RefreshCw className="w-3 h-3 animate-spin" />
                                            GRID ONLINE
                                        </motion.div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="test"
                                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                                        className="w-full max-w-6xl h-[550px] md:h-[650px] rounded-[3rem] overflow-hidden bg-white border-2 border-border flex flex-col relative z-10"
                                    >
                                        <div className="flex items-center justify-between p-6 border-b border-border bg-muted/30 backdrop-blur-xl rounded-t-[3rem] z-20 relative">
                                            <div className="flex items-center gap-4">
                                                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                                                <span className="text-xs font-mono font-bold uppercase tracking-[0.4em] text-muted-foreground/60">
                                                    Secure Terminal | v4.0.2
                                                </span>
                                            </div>
                                            <Button
                                                size="default"
                                                variant="destructive"
                                                onClick={() => setIsTesting(false)}
                                                className="rounded-full px-6 font-bold tracking-widest uppercase hover:bg-red-600 transition-colors shadow-lg"
                                            >
                                                Close <X className="w-4 h-4 ml-2" />
                                            </Button>
                                        </div>

                                        <div className="flex-grow relative group/frame bg-white overflow-hidden">
                                            {/* Masking Container */}
                                            <div className="absolute inset-0">
                                                <iframe
                                                    src="https://speedtest2.telecomclubbd.com/?theme=light"
                                                    className="w-full h-full border-none"
                                                    title="Delta Speedtest"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                />
                                            </div>

                                            {/* CRT Scanline Overlay - Lightened for Light Mode */}
                                            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(0,0,0,0.02),rgba(0,0,0,0.01),rgba(0,0,0,0.02))] bg-[length:100%_2px,3px_100%] opacity-10 z-10" />
                                            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(255,255,255,0.2)] z-10" />
                                        </div>

                                        {/* Explainer Footer */}
                                        <div className="p-4 bg-muted/30 backdrop-blur-xl border-t border-border text-center z-20 relative">
                                            <p className="text-[10px] md:text-xs text-muted-foreground font-mono tracking-wider uppercase">
                                                <span className="text-foreground font-bold">Download/Upload:</span> Bandwidth Capacity • <span className="text-foreground font-bold">Ping:</span> Server Latency • <span className="text-foreground font-bold">Jitter:</span> Signal Stability
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
