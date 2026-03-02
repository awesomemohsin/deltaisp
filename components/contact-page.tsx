'use client'

import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { toast } from 'sonner'
import { DESIGN_VERSION } from '@/lib/site-config'
import { sendContactEmail } from '@/app/actions/contact'
import { contactInfo as centralizedContactInfo } from '@/lib/homepage-data'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const contactCards = [
  {
    icon: Phone,
    title: 'Call Us',
    content: centralizedContactInfo.phone,
    desc: 'Available 24/7 for support',
    href: `tel:${centralizedContactInfo.phoneRaw}`,
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: centralizedContactInfo.email,
    desc: 'Response within 2 hours',
    href: `mailto:${centralizedContactInfo.email}`,
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: centralizedContactInfo.address.split(',')[0],
    desc: centralizedContactInfo.address.split(',').slice(1).join(','),
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: '24/7 Support',
    desc: 'Office: Sat - Thu (10 AM - 7 PM)',
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

export function ContactPageContent() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      const result = await sendContactEmail(data)

      if (result.success) {
        setIsSubmitted(true)
        form.reset()
        toast.success('Message sent successfully!')
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        toast.error(result.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('[v0] Form submission error:', error)
      toast.error('An unexpected error occurred. Please try again.')
    }
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Whether you need a new connection or support for your existing one, our team is ready to assist you nationwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {contactCards.map((info) => {
              const Icon = info.icon
              const CardContent = (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary p-0.5 flex-shrink-0">
                    <div className="w-full h-full rounded-md bg-background flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <p className="font-medium text-primary text-sm mb-1">{info.content}</p>
                    <p className="text-xs text-muted-foreground">{info.desc}</p>
                  </div>
                </div>
              )

              return (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="p-6 rounded-xl border border-border bg-card hover:bg-card/80 transition-all"
                >
                  {info.href ? (
                    <a href={info.href} className="block hover:opacity-80 transition-opacity">
                      {CardContent}
                    </a>
                  ) : (
                    CardContent
                  )}
                </motion.div>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="p-8 rounded-2xl border border-border bg-card">
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-lg bg-secondary/10 border border-secondary/30"
                >
                  <p className="text-sm font-medium text-secondary">
                    ✓ Thank you! We've received your message and will get back to you soon.
                  </p>
                </motion.div>
              )}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="+880 1XXX XXXXXX" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="How can we help?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us more about your inquiry..."
                            className="min-h-[150px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className={`w-full transition-all ${DESIGN_VERSION === 'hot'
                      ? 'h-14 rounded-2xl bg-[#EA2630] hover:bg-[#EA2630]/90 shadow-lg shadow-[#EA2630]/20 text-white border-none'
                      : 'bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50'
                      }`}
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-96 rounded-2xl border border-border bg-card overflow-hidden"
        >
          <iframe
            title="Delta Software & Communication Ltd Location"
            src={DESIGN_VERSION === 'hot'
              ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.435!2d90.395!3d23.874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4280b396791%3A0xf639a04a5840ca84!2sDelta%20Software%20And%20Communication!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
              : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.435!2d90.395!3d23.874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c428178149ef%3A0xa97b98f244588e7b!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
            }
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-card rounded-2xl border border-border p-12"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Common Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: 'How quickly will I get a response?',
                a: 'Our support team typically responds to inquiries within 2 hours during business hours. For urgent connectivity issues, call our 24/7 hotline.',
              },
              {
                q: 'Do you provide services outside Dhaka?',
                a: 'Yes! We offer nationwide internet solutions for enterprises and businesses across Bangladesh.',
              },
              {
                q: 'How can I pay my bill?',
                a: 'You can pay your bill online through our Pay Bill page or via various mobile banking services like bKash/Nagad.',
              },
              {
                q: 'What should I do if my internet is slow?',
                a: 'Try restarting your router first. If the issue persists, contact our support team with your Account ID for immediate assistance.',
              },
            ].map((faq) => (
              <div key={faq.q}>
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
