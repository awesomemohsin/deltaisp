/**
 * Delta Homepage Content Data
 * Curated & Structured by AwesomeMohsin
 */
import { Wifi, Building2, Zap, Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export const banners = [
    '/images/banner1.webp',
    '/images/banner2.webp',
    '/images/banner3.webp',
    '/images/banner4.webp',
    '/images/banner5.webp',
    '/images/banner6.webp',
    '/images/banner7.webp',
    '/images/banner8.webp',
]

export const services = [
    {
        icon: Wifi,
        title: 'Home Internet',
        image: '/images/home.webp',
        description: 'Blazing-fast speeds perfect for streaming, gaming, and working from home with no data caps.',
        href: '/services#home-internet',
        color: 'from-[#0C58A4] to-[#0C58A4]/60',
        hotColor: '#0C58A4'
    },
    {
        icon: Building2,
        title: 'Corporate Internet',
        image: '/images/corporate.webp',
        description: 'Enterprise-grade connectivity with dedicated bandwidth and SLA guarantees for businesses.',
        href: '/services#corporate-internet',
        color: 'from-[#EA2630] to-[#EA2630]/60',
        hotColor: '#EA2630'
    },
    {
        icon: Zap,
        title: 'Dedicated Bandwidth',
        image: '/images/dedicated.webp',
        description: 'Guaranteed speeds with priority support. Perfect for bandwidth-heavy applications.',
        href: '/services#dedicated-bandwidth',
        color: 'from-[#000000] to-[#000000]/60',
        hotColor: '#000000'
    },
]

export const testimonials = [
    {
        quote: "Delta Internet has completely transformed our work-from-home experience. The speeds are incredible and the connection is rock solid.",
        author: 'Md. Mohsin',
        role: 'Software Engineer',
        initials: 'MM',
        image: '/images/review1.webp'
    },
    {
        quote: "We switched our business to Delta Internet and couldn't be happier. Their support team is responsive and the uptime guarantee gives us peace of mind.",
        author: 'Nahidul Islam',
        role: 'Manager',
        initials: 'NI',
        image: '/images/review2.webp'
    },
    {
        quote: "Finally, an ISP that delivers on its promises. No throttling, no hidden fees, just fast and reliable internet.",
        author: 'Konok Hossain',
        role: 'Graphics Designer',
        initials: 'KH',
        image: '/images/review3.webp'
    },
]

export const stats = [
    { value: '100k+', label: 'Happy Customers' },
    { value: '53', label: 'Districts Covered' },
    { value: '149', label: 'Upazilas Covered' },
    { value: '99.99%', label: 'Uptime Guarantee' },
]

export const ctaFeatures = [
    'Installation within 24-48 hours',
    'Free professional setup',
]

export const contactInfo = {
    phone: '+880 9611678064',
    phoneRaw: '+8809611678064',
    whatsapp: '8801777786560',
    whatsappLink: 'https://wa.me/8801777786560',
    email: 'info@deltasoftwareandcommunication.com',
    address: 'House: 35, Sonargaon Janapath Road, Uttara, Dhaka -1230, Bangladesh.',
}

export const socialLinks = [
    { Icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61568434629601', label: 'Facebook' },
    { Icon: Instagram, href: 'https://www.instagram.com/dscl_2024', label: 'Instagram' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/delta-software-and-communication-limited/', label: 'LinkedIn' },
]
