'use client'

import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { contactInfo } from '@/lib/homepage-data'
import { cn } from '@/lib/utils'

export function GetConnectedDialog({ className }: { className?: string }) {
    const contactOptions = [
        {
            icon: Phone,
            title: 'Call Now',
            description: '+880 9611678064',
            href: 'tel:+8809611678064',
            color: 'text-blue-500',
            bgColor: 'bg-blue-500/10',
        },
        {
            icon: MessageCircle,
            title: 'WhatsApp',
            description: 'Chat with us',
            href: contactInfo.whatsappLink,
            color: 'text-green-500',
            bgColor: 'bg-green-500/10',
        },
        {
            icon: MessageCircle, // Using MessageCircle as generic chat icon, colored blue for Messenger
            title: 'Messenger',
            description: 'Send us a message',
            href: 'https://m.me/61568434629601',
            color: 'text-blue-600',
            bgColor: 'bg-blue-600/10',
        },
        {
            icon: Mail,
            title: 'Email Us',
            description: 'info@deltasoftwareandcommunication.com',
            href: 'mailto:info@deltasoftwareandcommunication.com',
            color: 'text-orange-500',
            bgColor: 'bg-orange-500/10',
        },
        {
            icon: MapPin,
            title: 'Visit Office',
            description: 'Uttara, Dhaka',
            href: 'https://www.google.com/maps/search/?api=1&query=Delta+Software+and+Communication+Building+House+35+Sonargaon+Janapath+Road',
            color: 'text-purple-500',
            bgColor: 'bg-purple-500/10',
        },
    ]

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className={cn(
                        "bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all font-semibold",
                        className
                    )}
                >
                    Get Connected
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-center">Get Connected</DialogTitle>
                    <DialogDescription className="text-center">
                        Choose how you'd like to reach us. We're here to 24/7!
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 gap-3 py-4">
                    {contactOptions.map((option) => (
                        <Link
                            key={option.title}
                            href={option.href}
                            target={option.href.startsWith('http') ? '_blank' : undefined}
                            className="flex items-center gap-4 p-4 rounded-xl border border-border hover:bg-muted/50 hover:scale-[1.02] transition-all duration-200 group bg-card"
                        >
                            <div className={`p-3 rounded-full ${option.bgColor} ${option.color} group-hover:scale-110 transition-transform duration-200`}>
                                <option.icon className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-base group-hover:text-primary transition-colors">
                                    {option.title}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-1">
                                    {option.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    )
}
