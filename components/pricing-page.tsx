'use client'

import Link from 'next/link'
import { Check, X, ArrowRight, Download, Upload, Info, Zap, Shield, Headset, Clock, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState, useEffect } from 'react'
import { DESIGN_VERSION } from '@/lib/site-config'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const plans = [
  {
    name: 'Delta Student',
    speed: '20 Mbps',
    price: 525,
    period: '/month',
    description: 'Perfect for basic studies and light browsing',
    currency: '৳',
    features: [
      { name: '20 Mbps Speed', included: true },
      { name: '24/7 Support', included: true },
      { name: 'Fiber Optic', included: true },
      { name: 'Real IP (+৳300/mo)', included: false },
      { name: 'BDIX Connected', included: true },
      { name: '4k Streaming', included: false },
    ],
    cta: 'Get Started',
  },
  {
    name: 'Delta Bachelor',
    speed: '30 Mbps',
    price: 630,
    period: '/month',
    description: 'Great for single users and HD streaming',
    currency: '৳',
    features: [
      { name: '30 Mbps Speed', included: true },
      { name: '24/7 Support', included: true },
      { name: 'Fiber Optic', included: true },
      { name: 'Real IP (+৳300/mo)', included: false },
      { name: 'BDIX Connected', included: true },
      { name: '4k Streaming', included: false },
    ],
    cta: 'Get Started',
  },
  {
    name: 'Delta Couple',
    speed: '40 Mbps',
    price: 735,
    period: '/month',
    description: 'Ideal for small families and multiple devices',
    currency: '৳',
    features: [
      { name: '40 Mbps Speed', included: true },
      { name: '24/7 Support', included: true },
      { name: 'Fiber Optic', included: true },
      { name: 'Real IP (+৳300/mo)', included: true },
      { name: 'BDIX Connected', included: true },
      { name: '4k Streaming', included: false },
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Delta Family',
    speed: '50 Mbps',
    price: 840,
    period: '/month',
    description: 'Heavy usage and 4K streaming for homes',
    currency: '৳',
    features: [
      { name: '50 Mbps Speed', included: true },
      { name: '24/7 Support', included: true },
      { name: 'Fiber Optic', included: true },
      { name: 'Real IP (+৳300/mo)', included: true },
      { name: 'BDIX Connected', included: true },
      { name: '4k Streaming', included: true },
    ],
    cta: 'Get Started',
    popular: true,
    badgeText: "Best Seller",
    badgeColor: "#eb262f",
  },
  {
    name: 'Delta Joint Family',
    speed: '60 Mbps',
    price: 1050,
    period: '/month',
    description: 'Ultimate speed for large households',
    currency: '৳',
    features: [
      { name: '60 Mbps Speed', included: true },
      { name: '24/7 Support', included: true },
      { name: 'Fiber Optic', included: true },
      { name: 'Real IP (+৳300/mo)', included: true },
      { name: 'BDIX Connected', included: true },
      { name: '4k Streaming', included: true },
    ],
    cta: 'Get Started',
  },
  {
    name: 'Delta Grand Family',
    speed: '80 Mbps',
    price: 1260,
    period: '/month',
    description: 'Premium performance for elite connectivity',
    currency: '৳',
    features: [
      { name: '80 Mbps Speed', included: true },
      { name: '24/7 Support', included: true },
      { name: 'Fiber Optic', included: true },
      { name: 'Real IP (+৳300/mo)', included: true },
      { name: 'BDIX Connected', included: true },
      { name: '4k Streaming', included: true },
    ],
    cta: 'Get Started',
    popular: true,
    badgeText: "Gamers Choice",
    badgeColor: "#0C58A4",
  },
  {
    name: 'Delta Enterprise',
    speed: 'Custom',
    price: 0,
    period: '',
    description: 'Dedicated bandwidth for business needs',
    currency: '৳',
    features: [
      { name: 'Custom Speed', included: true },
      { name: 'Priority Support', included: true },
      { name: 'SLA Guarantee', included: true },
      { name: 'Dedicated Manager', included: true },
      { name: 'Real IP', included: true },
      { name: 'Redundant Link', included: true },
      { name: '24/7 Monitoring', included: true },
    ],
    cta: 'Contact Sales',
    isEnterprise: true,
    badgeText: "For Business",
    badgeColor: "#0C58A4",
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

export function PricingPage() {
  // Logic & Rates maintained by AwesomeMohsin
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center p-8">
          <div className="max-w-7xl w-full">
            <div className="h-20 bg-muted animate-pulse rounded-2xl mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-[500px] bg-muted animate-pulse rounded-[3rem]" />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Internet Packages
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
            Choose the perfect plan for your needs. All plans include 99.99% uptime guarantee and 24-hour customer support.
          </p>

          {/* Billing Toggle */}
          <Tabs value={billingPeriod} onValueChange={(v) => setBillingPeriod(v as 'monthly' | 'yearly')} className="w-fit mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">
                Yearly
                <Badge variant="secondary" className="ml-2">Save 10%</Badge>
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <p className="mt-4 text-xs font-semibold text-muted-foreground/60 tracking-wide animate-in fade-in slide-in-from-top-1 duration-1000 uppercase">
            Inclusive of 5% VAT on all plans
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-12"
        >
          {plans.filter(p => !p.isEnterprise).map((plan) => {
            const displayPrice = billingPeriod === 'yearly'
              ? Math.floor(plan.price * 12 * 0.9)
              : plan.price

            return (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                whileHover={DESIGN_VERSION === 'hot' ? { y: -8, scale: 1.03 } : { y: -8 }}
                className={`relative h-full transition-all duration-300 flex flex-col ${DESIGN_VERSION === 'hot'
                  ? `rounded-[2rem] border-t-4 backdrop-blur-md ${plan.popular
                    ? 'border-t-[#EA2630] border-x border-b border-[#EA2630]/20 bg-card/80 shadow-[0_20px_40px_-15px_rgba(234,38,48,0.15)] md:scale-105'
                    : 'border-t-[#0C58A4] border-x border-b border-border bg-card/60 hover:shadow-[0_20px_40px_-15px_rgba(12,88,164,0.15)]'
                  }`
                  : `rounded-2xl border ${plan.popular
                    ? 'border-primary bg-gradient-to-b from-primary/10 to-background shadow-lg shadow-primary/20 md:scale-105'
                    : 'border-border bg-card hover:border-primary/50'
                  }`
                  }`}
              >
                {/* Badge */}
                {(plan.popular || plan.badgeText) && (
                  <div className={`absolute left-1/2 transform -translate-x-1/2 z-10 ${DESIGN_VERSION === 'hot' ? '-top-3' : '-top-4'}`}>
                    <Badge
                      className={DESIGN_VERSION === 'hot' ? "px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-lg" : (plan.badgeColor ? "" : "bg-gradient-to-r from-primary to-secondary")}
                      style={DESIGN_VERSION === 'hot'
                        ? { backgroundColor: plan.popular ? '#EA2630' : '#0C58A4', color: '#FFFFFF' }
                        : (plan.badgeColor ? { backgroundColor: plan.badgeColor } : {})}
                    >
                      {plan.badgeText || (plan.popular ? 'Most Popular' : 'Best Value')}
                    </Badge>
                  </div>
                )}

                <div className="p-8 flex flex-col h-full">
                  {/* Plan Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-primary font-bold mb-2 text-xl md:text-2xl">{plan.speed}</div>
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{plan.description}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black flex items-baseline gap-[-0.1em]">
                        <span className="text-4xl md:text-5xl tracking-tight">৳</span>
                        {displayPrice}
                      </span>
                      <span className="text-muted-foreground text-sm">{billingPeriod === 'yearly' ? '/year' : '/month'}</span>
                    </div>
                    {billingPeriod === 'yearly' && (
                      <p className="text-xs text-secondary mt-2 flex items-center gap-1.5 font-medium">
                        <span className="line-through opacity-50">৳{plan.price}</span>
                        <span className="text-secondary font-bold">৳{Math.floor(displayPrice / 12)}/month</span>
                        <span className="opacity-70">billed annually</span>
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button
                    asChild
                    className={`w-full mb-8 h-12 rounded-xl text-sm font-bold transition-all duration-300 ${DESIGN_VERSION === 'hot'
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
                    <Link href="/contact">
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  {/* Features */}
                  <div className="flex-grow">
                    {DESIGN_VERSION === 'hot' && <div className="text-xs font-bold text-[#999A9B] uppercase tracking-widest mb-4">Included Features</div>}
                    <ul className="space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature.name} className="flex items-start gap-3 text-sm group/item">
                          <div className={DESIGN_VERSION === 'hot' ? `p-1 rounded-full ${plan.popular ? 'bg-[#EA2630]/10' : 'bg-[#0C58A4]/10'}` : ""}>
                            {feature.included ? (
                              <Check
                                className={DESIGN_VERSION === 'hot' ? "w-3 h-3" : "w-5 h-5 text-secondary flex-shrink-0 mt-0.5"}
                                style={DESIGN_VERSION === 'hot' ? { color: plan.popular ? '#EA2630' : '#0C58A4' } : {}}
                              />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground/30 flex-shrink-0 mt-0.5" />
                            )}
                          </div>
                          <span className={`${feature.included ? 'text-foreground dark:text-gray-200 font-medium' : 'text-muted-foreground/50'} line-clamp-1 group-hover/item:translate-x-1 transition-transform ${DESIGN_VERSION === 'hot' ? '' : 'text-muted-foreground'}`} style={DESIGN_VERSION === 'hot' ? {} : { color: feature.included && DESIGN_VERSION === 'cold' ? '#999A9B' : undefined }}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Enterprise Horizontal Plan */}
        {plans.find(p => p.isEnterprise) && (() => {
          const plan = plans.find(p => p.isEnterprise)!
          return (
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`relative overflow-hidden transition-all duration-500 mb-16 ${DESIGN_VERSION === 'hot'
                ? 'rounded-[2.5rem] border border-[#0C58A4]/20 bg-card/60 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(12,88,164,0.1)]'
                : 'rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/5 via-background to-secondary/5'
                }`}
            >
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

              <div className="relative p-8 md:p-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                {/* Left side: Branding & Title */}
                <div className="w-full lg:w-1/3 text-center lg:text-left">
                  <Badge
                    className="mb-6 px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#0C58A4] text-white shadow-lg"
                  >
                    {plan.badgeText || 'For Business'}
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-black mb-3 text-balance capitalize tracking-tight">
                    {plan.name}
                  </h3>
                  <div className="text-primary font-black mb-4 text-2xl tracking-tight uppercase">Dedicated Solutions</div>
                  <p className="text-muted-foreground font-medium text-balance max-w-sm mx-auto lg:mx-0">
                    {plan.description}
                  </p>
                </div>

                {/* Middle: Features Grid */}
                <div className="w-full lg:w-2/5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {plan.features.map((feature, i) => (
                    <motion.div
                      key={feature.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 group/item"
                    >
                      <div className={`p-1.5 rounded-full ${DESIGN_VERSION === 'hot' ? 'bg-[#0C58A4]/10' : 'bg-primary/10'}`}>
                        <Check className={`w-3.5 h-3.5 ${DESIGN_VERSION === 'hot' ? 'text-[#0C58A4]' : 'text-primary'}`} />
                      </div>
                      <span className="text-sm font-bold text-foreground/80 group-hover/item:text-primary transition-colors">
                        {feature.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Right side: CTA */}
                <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-end gap-4">
                  <div className="text-center lg:text-right">
                    <div className="text-3xl md:text-4xl font-black tracking-tighter mb-1 uppercase">Custom Pricing</div>
                    <p className="text-xs font-black uppercase tracking-widest text-muted-foreground opacity-60">SLA Guaranteed</p>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className={`w-full sm:w-auto px-10 h-14 rounded-2xl text-base font-black transition-all duration-300 shadow-xl ${DESIGN_VERSION === 'hot'
                      ? 'bg-[#0C58A4] hover:bg-[#EA2630] text-white hover:shadow-[#EA2630]/30'
                      : 'bg-gradient-to-r from-primary to-secondary hover:shadow-primary/40'
                      }`}
                  >
                    <Link href="/contact">
                      {plan.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )
        })()}

        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Detailed Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold min-w-[200px]">Feature</th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="text-center py-4 px-4 font-semibold min-w-[140px]">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Internet', icon: <Download className="w-4 h-4 text-primary" />, values: ['20 Mbps', '30 Mbps', '40 Mbps', '50 Mbps', '60 Mbps', '80 Mbps', 'Custom'] },
                  { label: 'Facebook', values: ['Bufferless Video', 'Bufferless Video', 'Bufferless Video', 'Bufferless Video & Streaming', 'Bufferless Video & Streaming', 'Bufferless Video & Streaming', 'Bufferless Video & 4K Streaming'] },
                  { label: 'Youtube', values: ['Bufferless HD Video', 'Bufferless HD Video', 'Bufferless HD Video', 'Bufferless 4K Video', 'Bufferless 4K Video', 'Bufferless 4K Video', 'Bufferless 8K Video'] },
                  { label: 'BDIX Speed', values: ['50 Mbps', '50 Mbps', '100 Mbps', '100 Mbps', '100 Mbps', '100 Mbps', '10 Gbps'] },
                  { label: 'Tiktok', values: ['Bufferless Video', 'Bufferless Video', 'Bufferless Video', 'Bufferless HD Video', 'Bufferless HD Video', 'Bufferless HD Video', 'Bufferless 4K Video'] },
                  { label: '24/7 Online Support', values: [true, true, true, true, true, true, '24/7 & First Restore'] },
                  { label: 'Real IP 300MRC', values: [false, false, 'IPv6', 'IPv6', 'IPv6', 'IPv6', 'IPv4 & IPv6'] },
                  { label: 'Installation', values: ['৳1000', '৳1000', '৳500', '৳500', '৳500', '৳500', 'Custom'] },
                  { label: 'Gaming Ping', values: ['Standard', 'Standard', 'Better', 'Good', 'Best', 'Best', 'Ultra Low'] },
                ].map((row, idx) => (
                  <tr key={row.label} className={`border-b border-border ${idx % 2 === 0 ? 'bg-card/30' : ''}`}>
                    <td className="py-4 px-4 font-medium text-sm">
                      <div className="flex items-center gap-2">
                        {row.icon}
                        {row.label}
                      </div>
                    </td>
                    {row.values.map((value, i) => (
                      <td key={`${row.label}-${i}`} className="py-4 px-4 text-center text-sm">
                        {typeof value === 'boolean' ? (
                          value ? (
                            <Check className="w-5 h-5 text-secondary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                          )
                        ) : (
                          value
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-card rounded-xl p-8 border border-border"
        >
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: 'Do you offer any discounts for annual billing?',
                a: 'Yes! Save 10% when you choose annual billing. You\'ll see the savings reflected when you select the yearly option above.',
              },
              {
                q: 'Can I change my plan at any time?',
                a: 'Absolutely. You can upgrade or downgrade your plan anytime. Changes take effect at the start of your next billing cycle.',
              },
              {
                q: 'What\'s included in installation?',
                a: 'Our technicians will install your modem, router, and run all necessary cables. Setup time depends on area.',
              },
            ].map((faq) => (
              <div key={faq.q}>
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? Contact our sales team.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all">
              Talk to Sales
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
