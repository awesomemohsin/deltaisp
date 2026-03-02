'use client'

import Link from 'next/link'
import Image from 'next/image'
import { DESIGN_VERSION } from '@/lib/site-config'
import { stats } from '@/lib/homepage-data'
import { ArrowRight, Award, Users, Globe, Zap, Target, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState, useMemo } from 'react'

function SupportTeamRotator() {
  const [index, setIndex] = useState(0)
  const images = ['/images/team-support1.webp', '/images/team-support2.webp']

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="absolute inset-0 w-full h-full">
      {images.map((img, i) => (
        <motion.div
          key={img}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === i ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={img}
            alt="Support Team"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-1000"
          />
        </motion.div>
      ))}
    </div>
  )
}



const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our service, from network infrastructure to customer support.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We believe in giving back to the communities we serve and supporting local initiatives.',
  },
  {
    icon: Globe,
    title: 'Innovation',
    description: 'We continuously invest in cutting-edge technology to bring the best connectivity solutions.',
  },
  {
    icon: Zap,
    title: 'Reliability',
    description: 'Our mission is to provide fast, reliable internet that our customers can count on 24/7.',
  },
]


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

function StatCard({ value, label, index }: { value: string, label: string, index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayValue, setDisplayValue] = useState("0")

  useEffect(() => {
    if (isInView) {
      const numericPart = value.replace(/[^0-9.]/g, '')
      const suffix = value.replace(/[0-9.]/g, '')
      const target = parseFloat(numericPart)

      if (!isNaN(target)) {
        const controls = animate(0, target, {
          duration: 2,
          ease: "easeOut",
          delay: index * 0.1,
          onUpdate(value) {
            setDisplayValue(
              target % 1 === 0
                ? Math.floor(value).toString() + suffix
                : value.toFixed(2) + suffix
            )
          },
        })
        return () => controls.stop()
      } else {
        setDisplayValue(value)
      }
    }
  }, [isInView, value, index])

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      whileHover={{ y: -10, scale: 1.05 }}
      className={`p-8 md:p-10 lg:p-12 transition-all duration-700 text-center flex flex-col items-center justify-center relative overflow-hidden group ${DESIGN_VERSION === 'hot'
        ? 'rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-2xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(12,88,164,0.1)] hover:border-[#0C58A4]/30'
        : 'rounded-2xl border border-border bg-card'
        }`}
    >
      {/* Background glow on hover */}
      {DESIGN_VERSION === 'hot' && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C58A4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      )}

      <div className={`text-4xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4 tracking-tighter transition-all duration-500 group-hover:scale-110 ${DESIGN_VERSION === 'hot' ? 'text-[#0C58A4] group-hover:text-[#EA2630]' : 'text-primary'
        }`}>
        {displayValue}
      </div>
      <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.3em] font-black group-hover:text-foreground transition-all duration-500 text-balance">
        {label}
      </div>
    </motion.div>
  )
}


export function AboutPageContent() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      {/* 
        This digital craft is forged by AwesomeMohsin 
        github.com/AwesomeMohsin
      */}
      <div className="max-w-7xl mx-auto">
        {/* Modern Split Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-32 relative">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full max-w-lg h-[120%] bg-gradient-to-r from-[#0C58A4]/5 via-[#EA2630]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#EA2630]/5 border border-[#EA2630]/10 text-[#EA2630] text-[11px] font-black uppercase tracking-[0.3em] mb-8 shadow-sm">
              <Zap size={14} /> Our Journey
            </div>

            <h1 className="flex flex-col gap-2 mb-8 uppercase text-balance">
              <span className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter opacity-80 text-foreground">
                About
              </span>
              <span className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] ${DESIGN_VERSION === 'hot'
                ? "text-[#0C58A4] drop-shadow-sm"
                : "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                }`}>
                Delta Software & Communication <br className="hidden lg:block" />
                Limited
              </span>
            </h1>

            <div className={`w-20 h-1.5 rounded-full mb-8 ${DESIGN_VERSION === 'hot' ? 'bg-gradient-to-r from-[#EA2630] to-transparent' : 'bg-primary'}`} />

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-medium leading-relaxed opacity-90 max-w-xl">
              Pioneering the next generation of connectivity with innovative solutions and an unwavering commitment to reliability across Bangladesh.
            </p>
          </motion.div>

          {/* Right Column: Straight Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6 relative"
          >
            {stats.map((stat, index) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Detailed Brand Story Section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
          >
            <div className="lg:col-span-5 space-y-8 sticky top-32">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none uppercase">
                  Our <br />
                  <span className={DESIGN_VERSION === 'hot' ? 'text-[#EA2630]' : 'text-primary'}>Legacy</span>
                </h2>
              </div>
              <div className="relative p-8 rounded-[3rem] bg-gradient-to-br from-[#0C58A4]/5 to-transparent border border-[#0C58A4]/10 shadow-sm overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#0C58A4]/5 rounded-full blur-3xl" />
                <p className="text-lg md:text-xl font-medium text-foreground/80 leading-relaxed italic relative z-10">
                  &quot;Driving digital transformation and empowering connectivity for a smarter, more connected Bangladesh.&quot;
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-medium">
                  <span className="italic font-bold text-foreground">Delta Software and Communication Ltd.</span> is a leading nationwide Internet Service Provider (ISP) in Bangladesh...
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-medium">
                  We are deeply committed to our <span className="italic text-foreground font-bold">customers, vendors, and partners</span>, ensuring transparency, reliability, and long-term collaboration in every aspect of our service. Our operations are <span className="text-[#EA2630] font-black bg-[#EA2630]/5 px-2 rounded-md">fully domestic</span>, enabling us to maintain strong control over service quality, compliance, and customer experience across the country.
                </p>
              </div>

              <div className="p-1 rounded-[3.5rem] bg-gradient-to-tr from-[#0C58A4]/20 via-transparent to-[#EA2630]/20">
                <div className="p-8 md:p-12 rounded-[3.5rem] bg-card/60 backdrop-blur-3xl space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-[#0C58A4] flex items-center justify-center text-white shadow-xl shadow-[#0C58A4]/30 rotate-3">
                      <Globe size={32} />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight">Infrastructure Core</h3>
                  </div>
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-medium">
                    <p>
                      Supported by Bangladesh&apos;s best <span className="italic text-foreground font-bold">NTTN, IIG</span>, and an experienced <span className="font-bold text-[#0C58A4]">technology team</span>, we ensure high performance, stable connectivity, and dependable network support.
                    </p>
                    <p>
                      Delta Software & Communication Ltd. always prioritizes and prefers <span className="text-foreground font-bold underline decoration-[#0C58A4] decoration-4 underline-offset-8">our own infrastructure</span>...
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex flex-wrap gap-4">
                {['Reliability', 'Transparency', 'Domestic Control', 'Innovation'].map((tag) => (
                  <span key={tag} className="px-6 py-2 rounded-full border border-border bg-muted/30 text-[10px] uppercase font-black tracking-widest opacity-60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>


        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0C58A4]/5 to-background border border-[#0C58A4]/20 dark:border-white/10 hover:border-[#0C58A4]/40 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Target size={120} />
            </div>
            <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-[#0C58A4] flex items-center justify-center text-white text-base shadow-lg shadow-[#0C58A4]/20">
                <Target size={20} />
              </span>
              Mission
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors relative z-10">
              To deliver reliable and high-quality internet and communication services to residential and corporate clients through our own infrastructure and advanced technologies; ensuring stable performance with expert technical support; and building long-term, trust-based relationships with customers, vendors, and partners.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#EA2630]/5 to-background border border-[#EA2630]/20 dark:border-white/10 hover:border-[#EA2630]/40 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Eye size={120} />
            </div>
            <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-[#EA2630] flex items-center justify-center text-white text-base shadow-lg shadow-[#EA2630]/20">
                <Eye size={20} />
              </span>
              🌟 Vision
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors relative z-10">
              To be a leading, trusted, and technology-driven infrastructure company delivering fast, secure, and uninterrupted connectivity nationwide.
            </p>
          </div>
        </motion.div>



        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black mb-3">Core Values</h2>
            <div className={`h-1 w-20 mx-auto rounded-full ${DESIGN_VERSION === 'hot' ? 'bg-[#EA2630]' : 'bg-primary'}`} />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {values.map((value) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-8 rounded-3xl border border-border dark:border-white/10 bg-card/30 hover:bg-card hover:border-[#0C58A4]/40 transition-all group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${DESIGN_VERSION === 'hot' ? 'bg-[#0C58A4]/10 text-[#0C58A4]' : 'bg-primary/10 text-primary'} flex items-center justify-center mb-6 shadow-xl transition-all group-hover:rotate-12 group-hover:bg-[#0C58A4]/20`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-black text-lg mb-3 uppercase tracking-tight">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">{value.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Top Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-4">Leadership</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-medium">Guiding Delta Internet towards a connected future with vision and dedication.</p>
          </div>

          <div className="flex flex-col gap-16 lg:gap-24 max-w-6xl mx-auto">
            {/* Chairman section hidden as requested */}
            <div className={`group relative flex flex-col md:flex-row items-stretch transition-all duration-700 ${DESIGN_VERSION === 'hot'
              ? 'rounded-[3rem] bg-gradient-to-br from-[#0C58A4]/5 via-transparent to-transparent border border-[#0C58A4]/20 hover:border-[#0C58A4]/40 hover:bg-[#0C58A4]/5'
              : 'rounded-3xl bg-card border border-border'
              }`}>
              <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[600px] overflow-hidden rounded-t-[3rem] md:rounded-l-[3rem] md:rounded-tr-none">
                <Image src="/images/chairman.webp" alt="Samrat Shahjahan - Chairman" fill className="object-cover object-top transition-transform duration-1000" />
              </div>

              <div className="w-full md:w-1/2 p-10 md:p-14 lg:p-20 flex flex-col justify-center relative">
                <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 group-hover:rotate-12 transition-all duration-700">
                  <Award size={100} className="text-[#0C58A4]" />
                </div>

                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 tracking-tighter group-hover:text-[#0C58A4] transition-colors duration-500">Samrat Shahjahan</h3>
                <p className="text-sm md:text-base font-black uppercase tracking-[0.4em] text-[#EA2630] mb-8">Chairman</p>
                <div className="w-16 h-1.5 bg-gradient-to-r from-[#0C58A4] to-transparent rounded-full mb-8 group-hover:w-full transition-all duration-700 ease-in-out opacity-70 group-hover:opacity-100" />
                <p className="text-muted-foreground leading-relaxed font-medium text-lg md:text-xl relative z-10 opacity-90 group-hover:opacity-100 transition-opacity">
                  A visionary leader committed to revolutionizing Bangladesh&apos;s digital landscape. Under his guidance, Delta Software & Communication Limited has emerged as a powerhouse of connectivity, driven by the mission to bridge the digital divide with world-class internet solutions.
                </p>
              </div>
            </div>

            {/* Managing Director */}
            <div className={`group relative flex flex-col md:flex-row-reverse items-stretch transition-all duration-700 ${DESIGN_VERSION === 'hot'
              ? 'rounded-[3rem] bg-gradient-to-bl from-[#EA2630]/5 via-transparent to-transparent border border-[#EA2630]/20 hover:border-[#EA2630]/40 hover:bg-[#EA2630]/5'
              : 'rounded-3xl bg-card border border-border'
              }`}>
              {/* Image Right */}
              <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[600px] overflow-hidden rounded-t-[3rem] md:rounded-r-[3rem] md:rounded-tl-none">
                <Image src="/images/md.webp" alt="Managing Director" fill className="object-cover object-top transition-transform duration-1000" />
              </div>

              {/* Content Left */}
              <div className="w-full md:w-1/2 p-10 md:p-14 lg:p-20 flex flex-col justify-center text-left md:text-right relative">
                {/* Decorative Element */}
                <div className="absolute top-10 left-10 md:right-10 md:left-auto opacity-5 group-hover:opacity-10 group-hover:-rotate-12 transition-all duration-700">
                  <Award size={100} className="text-[#EA2630]" />
                </div>

                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 tracking-tighter group-hover:text-[#EA2630] transition-colors duration-500 text-balance">Md Benzir Rashed Khan</h3>
                <p className="text-sm md:text-base font-black uppercase tracking-[0.4em] text-[#0C58A4] mb-8">Managing Director</p>
                <div className="w-16 h-1.5 bg-gradient-to-l from-[#EA2630] to-transparent rounded-full mb-8 md:ml-auto group-hover:w-full transition-all duration-700 ease-in-out opacity-70 group-hover:opacity-100" />
                <p className="text-muted-foreground leading-relaxed font-medium text-lg md:text-xl relative z-10 opacity-90 group-hover:opacity-100 transition-opacity text-balance">
                  Driving operational excellence and executing strategies to ensure Delta remains the most reliable ISP in Bangladesh. Focused on innovation, customer satisfaction, and building a robust national infrastructure.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Departments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-4">Our Teams</h2>
            <div className={`h-1 w-20 mx-auto rounded-full mb-6 ${DESIGN_VERSION === 'hot' ? 'bg-[#0C58A4]' : 'bg-primary'}`} />
            <p className="text-muted-foreground max-w-2xl mx-auto font-medium">The dedicated professionals working tirelessly behind the scenes.</p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:gap-16">
            {[
              { name: 'Sales Team', desc: 'Connecting customers with the right broadband solutions.', img: '/images/team-sales.webp' },
              { name: 'Marketing Team', desc: 'Spreading the word and building the Delta brand.', img: '/images/team-marketing.webp' },
              { name: 'Support Team', desc: '24/7 network monitoring and dedicated customer assistance.', img: '/images/team-support1.webp', isSupport: true },
              // HR & Admin and Fiber sections hidden as requested
            ].map((dept, i) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`group relative h-[400px] md:h-[600px] xl:h-[800px] w-full overflow-hidden ${DESIGN_VERSION === 'hot' ? 'rounded-[3rem]' : 'rounded-3xl border border-border bg-card'}`}
              >
                <div className="absolute inset-0 w-full h-full bg-transparent">
                  {dept.isSupport ? (
                    <SupportTeamRotator />
                  ) : (
                    <Image src={dept.img} alt={dept.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  )}
                </div>
                {/* Subtle Gradient Overlay for text legibility at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end h-full">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{dept.name}</h3>
                  <div className="h-1 w-12 bg-white/30 rounded-full mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
                  <p className="text-white/90 font-medium text-sm translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150 leading-relaxed">{dept.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center py-10"
        >
          <h2 className="text-xl md:text-2xl font-black mb-4">Ready to Connect?</h2>
          <Button asChild className={`transition-all px-10 py-6 font-black uppercase tracking-widest text-xs h-auto ${DESIGN_VERSION === 'hot'
            ? 'rounded-full bg-[#0C58A4] hover:bg-[#EA2630] shadow-xl hover:shadow-[#EA2630]/20'
            : 'rounded-xl bg-primary hover:bg-secondary'
            }`}>
            <Link href="/contact">
              Get Delta Internet Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div >
  )
}
