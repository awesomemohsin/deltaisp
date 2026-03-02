'use server'

import nodemailer from 'nodemailer'
import { z } from 'zod'

const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().optional(),
    subject: z.string().min(5),
    message: z.string().min(10),
})

type ContactFormData = z.infer<typeof contactSchema>

export async function sendContactEmail(data: ContactFormData) {
    // Validate the data
    const validatedData = contactSchema.safeParse(data)
    if (!validatedData.success) {
        return { success: false, error: 'Invalid form data' }
    }

    const { name, email, phone, subject, message } = validatedData.data

    // Create a transporter
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
    })

    try {
        // Send email
        const senderEmail = process.env.SMTP_FROM_EMAIL
        const recipientEmail = process.env.SMTP_TO_EMAIL

        if (!senderEmail || !recipientEmail) {
            throw new Error('SMTP_FROM_EMAIL or SMTP_TO_EMAIL is not configured in environment variables')
        }

        await transporter.sendMail({
            from: `"Contact Form" <${senderEmail}>`,
            replyTo: email,
            to: recipientEmail,
            subject: `Delta Website contact: ${subject} (from ${name})`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Subject: ${subject}

Message:
${message}
      `,
            html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone || 'N/A'}</p>
<p><strong>Subject:</strong> ${subject}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br/>')}</p>
      `,
        })

        return { success: true }
    } catch (error) {
        console.error('Error sending email:', error)
        return { success: false, error: 'Failed to send email. Please try again later.' }
    }
}
