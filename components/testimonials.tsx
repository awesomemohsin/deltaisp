'use client'

import React from 'react'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { testimonials } from '@/lib/homepage-data'
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

export function Testimonials() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-balance">
            Voices of <span className={DESIGN_VERSION === 'hot' ? "text-[#EA2630]" : "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"}>Trust</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Join thousands of satisfied users who experience the exceptional reliability and speed of Delta Internet every day.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={itemVariants}
              whileHover={DESIGN_VERSION === 'hot' ? { y: -8 } : { y: -4 }}
              className={`p-6 transition-all duration-500 relative flex flex-col group/testi overflow-hidden ${DESIGN_VERSION === 'hot'
                ? 'rounded-[2rem] border border-[#0C58A4]/10 backdrop-blur-xl bg-card/40 shadow-lg'
                : 'rounded-xl border border-border bg-card'
                }`}
            >
              {/* Hot Theme Glow */}
              {DESIGN_VERSION === 'hot' && (
                <div className="absolute -top-[20%] -right-[20%] w-64 h-64 rounded-full blur-[80px] bg-[#EA2630]/5 group-hover/testi:bg-[#EA2630]/15 transition-colors duration-700" />
              )}

              {/* Decorative Quote Mark */}
              <div className="absolute top-8 right-12 text-8xl font-serif text-primary/5 select-none font-black italic group-hover/testi:scale-110 transition-transform duration-700">
                &rdquo;
              </div>

              {/* Stars */}
              <div className="flex gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={DESIGN_VERSION === 'hot' ? "fill-[#EA2630] text-[#EA2630] drop-shadow-[0_0_8px_rgba(234,38,48,0.4)]" : "fill-secondary text-secondary"} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-balance leading-relaxed mb-6 flex-grow italic font-medium relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border/40 relative z-10">
                <Avatar className={`w-12 h-12 shadow-2xl p-0.5 ${DESIGN_VERSION === 'hot' ? 'bg-gradient-to-br from-[#0C58A4] via-black to-[#EA2630]' : 'bg-gradient-to-br from-primary to-secondary'}`}>
                  {testimonial.image && (
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="object-cover rounded-full"
                    />
                  )}
                  <AvatarFallback className="text-white font-black text-lg bg-card rounded-full">{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-black text-base tracking-tight uppercase italic">{testimonial.author}</p>
                  <p className="text-[10px] text-muted-foreground/60 font-medium uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
