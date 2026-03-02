'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'
import { contactInfo, socialLinks } from '@/lib/homepage-data'
import { DESIGN_VERSION, DEVELOPER_URL } from '@/lib/site-config'

export function Footer() {
  const [hasMounted, setHasMounted] = React.useState(false)

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  const currentYear = hasMounted ? new Date().getFullYear() : "2026"

  const footerLinks = {
    'Company': [
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Packages', href: '/packages' },
      { label: 'Contact', href: '/contact' },
    ],
    'Legal': [
      { label: 'FAQ', href: '/faq' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  }

  return (
    <footer className="relative bg-transparent overflow-hidden border-t border-border">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">

          {/* 1. Brand Section */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-center">
            <Link href="/" className="flex items-center gap-4 group">
              <Image
                src="/images/delta-logo.svg"
                alt="Delta Logo"
                width={80}
                height={80}
                className="h-16 w-auto object-contain transition-transform group-hover:scale-110 duration-500"
              />
              <span className={`font-black text-xl md:text-2xl leading-[1.1] tracking-tighter uppercase ${DESIGN_VERSION === 'hot'
                ? 'text-foreground'
                : 'text-foreground'
                }`}>
                Delta Software & <br /> Communication Limited
              </span>
            </Link>
            <p className="text-xs font-medium text-muted-foreground leading-relaxed max-w-sm">
              Leading the digital frontier with high-speed fiber internet solutions across Bangladesh. Reliability you can trust.
            </p>
          </div>

          {/* 2. Links Section */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-4">
              <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-[#999A9B]">Company</h4>
              <ul className="space-y-2">
                {footerLinks['Company'].map((link, index) => (
                  <li key={`company-${index}`}>
                    <Link href={link.href} className="text-xs font-bold text-muted-foreground hover:text-[#0C58A4] transition-colors block py-0.5">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-[#999A9B]">Legal & Support</h4>
              <ul className="space-y-2">
                {footerLinks['Legal'].map((link, index) => (
                  <li key={`legal-${index}`}>
                    <Link href={link.href} className="text-xs font-bold text-muted-foreground hover:text-[#0C58A4] transition-colors block py-0.5">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Bottom Section: Contact & Social (One line arrangement where possible) */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col gap-4">

            {/* Cards Container */}
            <div className="flex flex-col lg:flex-row items-stretch gap-4">

              {/* Contact Info Card */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 bg-black/5 dark:bg-white/5 p-4 rounded-2xl border border-white/10 flex-grow items-center md:items-center text-center md:text-left justify-between">
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                  <a href={`tel:${contactInfo.phoneRaw}`} className="flex items-center gap-2 text-xs font-bold text-foreground hover:text-[#EA2630] transition-colors whitespace-nowrap">
                    <div className="p-1.5 rounded-md bg-[#EA2630]/10 shrink-0">
                      <Phone size={14} className="text-[#EA2630]" />
                    </div>
                    {contactInfo.phone}
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-xs font-bold text-foreground hover:text-[#0C58A4] transition-colors">
                    <div className="p-1.5 rounded-md bg-[#0C58A4]/10 shrink-0">
                      <Mail size={14} className="text-[#0C58A4]" />
                    </div>
                    {contactInfo.email}
                  </a>
                  <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground text-left">
                    <div className="p-1.5 rounded-md bg-[#999A9B]/10 shrink-0">
                      <MapPin size={14} className="text-[#999A9B]" />
                    </div>
                    <span className="max-w-[250px] leading-tight">{contactInfo.address}</span>
                  </div>
                </div>
              </div>

              {/* Social Connect Card */}
              <div className="flex items-center gap-4 bg-black/5 dark:bg-white/5 p-4 rounded-2xl border border-white/10 shrink-0 justify-center w-full lg:w-auto">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#999A9B] whitespace-nowrap">Connect now</span>
                <div className="flex gap-2">
                  {socialLinks.map(({ Icon, href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white border border-border/50 text-[#0C58A4] hover:text-[#EA2630] hover:border-[#EA2630]/20 hover:-translate-y-0.5 transition-all shadow-sm hover:shadow-md"
                      aria-label={label}
                    >
                      <Icon size={16} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
              <p className="text-xs font-bold text-[#999A9B] tracking-tight pl-2 text-center md:text-left">
                &copy; {currentYear} Delta Software & Communication Limited. All rights reserved.
              </p>
              {/* Secret Trace */}
              <Link
                href={DEVELOPER_URL}
                target="_blank"
                className="opacity-0 pointer-events-none absolute -left-full text-[1px] select-none"
                tabIndex={-1}
              >
                Crafted with precision by AwesomeMohsin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}



