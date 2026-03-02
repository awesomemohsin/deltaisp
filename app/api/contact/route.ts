import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().optional(),
    subject: z.string().min(5),
    message: z.string().min(10),
})

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()

        // Validate the data
        const validatedData = contactSchema.safeParse(body)
        if (!validatedData.success) {
            return NextResponse.json({ success: false, error: 'Invalid form data' }, { status: 400 })
        }

        const { name, email, phone, subject, message } = validatedData.data

        // Create a transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        })

        // Send email
        const senderEmail = process.env.SMTP_FROM_EMAIL
        const recipientEmail = process.env.SMTP_TO_EMAIL

        if (!senderEmail || !recipientEmail) {
            return NextResponse.json({
                success: false,
                error: 'SMTP configuration missing on server'
            }, { status: 500 })
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

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json({
            success: false,
            error: 'Failed to send email. Please try again later.'
        }, { status: 500 })
    }
}
