
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Wifi, Building2, Zap, Shield, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DESIGN_VERSION } from '@/lib/site-config'
import { motion } from 'framer-motion'

const servicesDetail = [
  {
    icon: Wifi,
    title: 'Home Internet',
    image: '/images/home.webp',
    shortDesc: 'Blazing-fast speeds perfect for streaming, gaming, and working from home',
    fullDesc: 'Experience the ultimate home internet experience with our fiber-optic network delivering Maximum Download speeds. No peak speed hours, just pure unlimited connectivity.',
    features: [
      'Maximum Download speeds',
      'Unlimited data usage',
      'WiFi 6 compatible equipment',
      'No Peak Speed hours',
      'Works with smart home devices',
      'Free 24/7 support',
    ],
    color: 'from-blue-400 to-primary',
  },
  {
    icon: Building2,
    title: 'Corporate Internet',
    image: '/images/corporate.webp',
    shortDesc: 'Enterprise-grade connectivity with dedicated bandwidth and SLA guarantees',
    fullDesc: 'Built for modern businesses. Get dedicated bandwidth, redundant connections, and Service Level Agreement guarantees to keep your operations running 24/7.',
    features: [
      'Dedicated bandwidth',
      'Redundant fiber connections',
      '99.99% uptime SLA',
      'Static IP addresses',
      'Priority support',
      'Managed security services',
    ],
    color: 'from-primary to-blue-500',
  },
  {
    icon: Zap,
    title: 'Dedicated Bandwidth',
    image: '/images/dedicated.webp',
    shortDesc: 'Guaranteed speeds with priority support. Perfect for bandwidth-heavy applications',
    fullDesc: 'For businesses and power users who need consistent, guaranteed performance. Our dedicated bandwidth service ensures your connection is always prioritized.',
    features: [
      'Maximum stable connectivity',
      'Priority traffic routing',
      'Consistent speeds 24/7',
      'No congestion periods',
      'Performance monitoring included',
      'Real-time analytics dashboard',
    ],
    color: 'from-secondary to-cyan-400',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export function ServicesPageContent() {
  /** 
   * Service architecture designed by AwesomeMohsin 
   * github.com/AwesomeMohsin
   */
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Comprehensive internet solutions designed to meet every need, from residential to enterprise-level requirements.
          </p>
        </motion.div>

        {/* Services Detail Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {servicesDetail.map((service, idx) => {
            const Icon = service.icon
            const isEven = idx % 2 === 0

            return (
              <motion.div
                key={service.title}
                id={service.title.toLowerCase().replace(/\s+/g, '-')}
                variants={itemVariants}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-20 -mt-20 ${isEven ? '' : 'md:grid-flow-dense'}`}
              >
                {/* Content */}
                <div className={isEven ? 'md:col-span-1' : 'md:col-span-1 md:order-2'}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {/* Restored Icon Block */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-0.5 mb-6 shadow-lg`}>
                      <div className="w-full h-full rounded-lg bg-background flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{service.fullDesc}</p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      className={`transition-all ${DESIGN_VERSION === 'hot'
                        ? 'h-14 px-8 rounded-2xl bg-[#0C58A4] hover:bg-[#0C58A4]/90 shadow-lg shadow-[#0C58A4]/20'
                        : 'bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50'
                        }`}
                    >
                      <Link href={idx < 2 ? "/packages" : "/contact"}>
                        {idx < 2 ? "Explore Packages" : "Learn More & Contact"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>

                {/* Visual Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={isEven ? 'md:col-span-1 md:order-2' : 'md:col-span-1 md:order-1'}
                >
                  <div className={`aspect-video w-full rounded-2xl border border-border relative overflow-hidden group shadow-2xl`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-1000 scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="font-bold text-2xl mb-2">{service.title}</h3>
                        <p className="text-sm text-white/80 max-w-xs">{service.shortDesc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-card/50 backdrop-blur-md rounded-[2.5rem] border border-border p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />

          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Premium Add-ons</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Real IP',
                desc: 'Dedicated Real IP for hosting, gaming, or remote access.',
                price: '৳300/month per IP',
                icon: <Building2 className="w-5 h-5 text-primary" />,
              },
              {
                title: 'Mesh Wi-Fi System',
                desc: 'Professional mesh router setup for full home coverage.',
                price: 'Starts at ৳2500',
                icon: <Wifi className="w-5 h-5 text-primary" />,
              },
              {
                title: 'OTT Premium Access',
                desc: 'Get access to Bioscope, Hoichoi, and Bongo with your connection.',
                price: 'Upcoming',
                icon: <Zap className="w-5 h-5 text-primary" />,
              },
              {
                title: 'Safe Internet',
                desc: 'Parental controls and malicious site blocking for your family.',
                price: 'Upcoming',
                icon: <Shield className="w-5 h-5 text-primary" />,
              },
            ].map((addon) => (
              <motion.div
                key={addon.title}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-8 rounded-2xl border border-border bg-background/40 hover:bg-card hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors text-primary font-bold">
                  {addon.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{addon.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{addon.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-black text-primary text-lg">{addon.price}</span>
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 text-secondary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8">
            Contact our sales team to find the perfect service solution for your needs.
          </p>
          <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all px-8 py-6">
            <Link href="/contact">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
