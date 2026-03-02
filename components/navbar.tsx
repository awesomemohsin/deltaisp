'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { GetConnectedDialog } from '@/components/get-connected-dialog'
import { DESIGN_VERSION, DEVELOPER_URL } from '@/lib/site-config'
import { usePathname } from 'next/navigation'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

// Professional Navbar implementation with responsive design
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Dev Trace: [AwesomeMohsin] - Architect of Connectivity

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/packages', label: 'Packages' },
    { href: '/pay-bill', label: 'Pay Bill' },
    { href: '/btrc-tariff', label: 'BTRC Tarrif', external: true },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: 'https://radius.yetfix.com/customer_login', label: 'Self Care', external: true },
  ]

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${DESIGN_VERSION === 'hot'
      ? 'bg-background/95 backdrop-blur-md border-b border-[#EA2630]/20 shadow-lg'
      : 'bg-background/80 backdrop-blur-md border-b border-border'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 md:h-14">
          {/* Logo */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/" className="flex items-center group">
                <Image
                  src="/images/delta-logo.svg"
                  alt="Delta Internet"
                  width={320}
                  height={64}
                  className={`h-10 md:h-16 w-auto object-contain transition-transform duration-500 ${DESIGN_VERSION === 'hot' ? 'group-hover:scale-105' : 'group-hover:scale-105'}`}
                  priority
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="text-xs font-black p-3 bg-background border-primary/20 shadow-xl">
              <div className="flex flex-col gap-1">
                <span className="text-foreground uppercase tracking-tight text-sm">
                  Delta Software & Communication Limited
                </span>
                <span className="text-muted-foreground font-medium text-[10px] italic border-t border-border/50 pt-1">
                  - Reliable Connectivity. Proven Performance.
                </span>
              </div>
            </TooltipContent>
          </Tooltip>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4">
            {links.map((link) => {
              const isActive = pathname === link.href
              const isExternal = link.external || link.href.startsWith('http') || link.href.endsWith('.pdf')
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={`text-[12px] font-black uppercase tracking-widest transition-all relative group py-1 ${DESIGN_VERSION === 'hot'
                    ? isActive
                      ? 'text-[#EA2630]'
                      : 'text-foreground/80 hover:text-[#EA2630]'
                    : 'text-foreground/80 hover:text-foreground'
                    }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 transition-all duration-300 ${DESIGN_VERSION === 'hot'
                    ? isActive
                      ? 'w-full h-[2px] bg-[#EA2630]'
                      : 'w-0 h-[2px] bg-[#EA2630] group-hover:w-full'
                    : 'h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full'
                    }`} />
                </Link>
              )
            })}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-3">
            <ModeToggle />
            {DESIGN_VERSION === 'hot' ? (
              <GetConnectedDialog className="scale-90" />
            ) : (
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-primary to-secondary text-white font-medium px-5 py-1.5 rounded-full hover:shadow-lg transition-all h-10">
                  Connect Now
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`md:hidden pb-6 pt-2 space-y-2 animate-in slide-in-from-top-4 duration-300 ${DESIGN_VERSION === 'hot' ? 'border-t border-[#EA2630]/10' : ''
            }`}>
            {links.map((link) => {
              const isActive = pathname === link.href
              const isExternal = link.external || link.href.startsWith('http') || link.href.endsWith('.pdf')
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={`block px-4 py-3 text-sm font-bold tracking-tight rounded-xl transition-all ${DESIGN_VERSION === 'hot'
                    ? isActive
                      ? 'bg-[#0C58A4]/10 text-[#0C58A4] border-l-4 border-[#EA2630]'
                      : 'text-foreground hover:bg-[#0C58A4]/5 hover:text-[#0C58A4]'
                    : 'font-medium text-foreground/80 hover:text-foreground hover:bg-secondary/10'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
            {DESIGN_VERSION === 'hot' ? (
              <GetConnectedDialog className="w-full mt-4" />
            ) : (
              <Link href="/contact" className="block w-full mt-4" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white">
                  Connect Now
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
