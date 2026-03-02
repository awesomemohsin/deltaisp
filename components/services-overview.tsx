'use client'

import React, { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { services } from '@/lib/homepage-data'
import { DESIGN_VERSION } from '@/lib/site-config'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const Icon = service.icon
  const spotlightX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"])
  const spotlightY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"])

  return (
    <motion.div
      variants={itemVariants}
      className="group flex perspective-1000 w-full md:w-[calc(50%-1rem)] lg:w-[320px]"
    >
      <Link href={service.href} className="flex flex-col flex-1 w-full">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            ...(DESIGN_VERSION === 'hot' ? {
              borderTopColor: service.hotColor,
              boxShadow: `0 20px 40px -20px ${service.hotColor}20`
            } : {})
          } as any}
          className={`flex-1 p-5 transition-all duration-500 relative flex flex-col overflow-hidden ${DESIGN_VERSION === 'hot'
            ? `rounded-[1.5rem] border-t-4 backdrop-blur-md bg-card/60 shadow-xl hover:shadow-2xl`
            : 'rounded-xl border border-border bg-card'
            }`}
        >
          {/* Spotlight Effect */}
          {DESIGN_VERSION === 'hot' && (
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(600px circle at var(--x) var(--y), ${service.hotColor}15, transparent 40%)`,
                '--x': spotlightX,
                '--y': spotlightY,
              } as any}
            />
          )}

          {/* Icon Background */}
          <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mb-6 group-hover:rotate-6 transition-transform duration-500 shadow-lg`}>
              <div className="w-full h-full rounded-[14px] bg-card flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white to-transparent" />
                <Icon className="w-8 h-8 relative z-10" style={{ color: DESIGN_VERSION === 'hot' ? service.hotColor : undefined }} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex-grow flex flex-col" style={{ transform: "translateZ(30px)" }}>
            <h3 className="text-lg font-bold mb-2 tracking-tight group-hover:text-[#0C58A4] transition-colors">{service.title}</h3>
            <p className="text-xs text-muted-foreground mb-6 flex-grow leading-relaxed">{service.description}</p>
          </div>

          {/* Link */}
          <div className={`relative z-10 flex items-center text-sm font-black uppercase tracking-widest transition-all group-hover:gap-3 ${DESIGN_VERSION === 'hot' && service.hotColor === '#000000' ? "text-foreground" : ""}`}
            style={{
              color: DESIGN_VERSION === 'hot'
                ? (service.hotColor === '#000000' ? undefined : service.hotColor)
                : undefined,
              transform: "translateZ(20px)"
            }}
          >
            Explore
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export function ServicesOverview() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C58A4]/10 border border-[#0C58A4]/20 text-[#0C58A4] text-xs font-black uppercase tracking-widest mb-6">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-balance">
            Our <span className={DESIGN_VERSION === 'hot' ? "text-[#EA2630] drop-shadow-[0_2px_10px_rgba(234,38,48,0.2)]" : "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"}>Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Experience the future of connectivity with our cutting-edge internet services tailored for every digital lifestyle.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 items-stretch"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className={`h-12 px-8 rounded-xl font-black uppercase tracking-widest transition-all text-xs ${DESIGN_VERSION === 'hot'
              ? "border-2 border-[#0C58A4] text-[#0C58A4] hover:bg-[#0C58A4] hover:text-white shadow-xl hover:shadow-[#0C58A4]/20 hover:-translate-y-1"
              : "border-primary/50 hover:bg-primary/10 bg-transparent"
              }`}
          >
            <Link href="/services">
              Discover All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
