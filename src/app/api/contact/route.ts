import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

interface ContactFormData {
  name: string
  email: string
  company?: string
  stage?: string
  challenge: string
  source?: string
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, '').trim()
}

export async function POST(request: NextRequest) {
  if (!resend) {
    return NextResponse.json(
      { error: 'Email service not configured yet. Please email ckchandan928@gmail.com directly.' },
      { status: 503 }
    )
  }

  try {
    const body: ContactFormData = await request.json()

    // Server-side validation
    if (!body.name || body.name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters' },
        { status: 400 }
      )
    }

    if (!body.email || !validateEmail(body.email)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    if (!body.challenge || body.challenge.trim().length < 20) {
      return NextResponse.json(
        { error: 'Please describe your challenge in more detail' },
        { status: 400 }
      )
    }

    // Sanitize all inputs
    const name = sanitize(body.name)
    const email = sanitize(body.email)
    const company = body.company ? sanitize(body.company) : 'Not provided'
    const stage = body.stage ? sanitize(body.stage) : 'Not provided'
    const challenge = sanitize(body.challenge)
    const source = body.source ? sanitize(body.source) : 'Not provided'

    // Send notification to Chandan
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'ckchandan928@gmail.com',
      replyTo: email,
      subject: `New inquiry from ${name} — ${company}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0F0F1A; color: #E8E8F0; border-radius: 12px;">
          <div style="margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid #2A2A4A;">
            <h1 style="color: #6C63FF; font-size: 24px; margin: 0 0 8px;">New Contact Form Submission</h1>
            <p style="color: #A0A0B8; margin: 0; font-size: 14px;">chandanchaudhary.com</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #2A2A4A;">
              <td style="padding: 12px 0; color: #7070A0; font-size: 13px; width: 140px;">Name</td>
              <td style="padding: 12px 0; color: #E8E8F0; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #2A2A4A;">
              <td style="padding: 12px 0; color: #7070A0; font-size: 13px;">Email</td>
              <td style="padding: 12px 0; color: #6C63FF; font-size: 14px;"><a href="mailto:${email}" style="color: #6C63FF;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #2A2A4A;">
              <td style="padding: 12px 0; color: #7070A0; font-size: 13px;">Company</td>
              <td style="padding: 12px 0; color: #E8E8F0; font-size: 14px;">${company}</td>
            </tr>
            <tr style="border-bottom: 1px solid #2A2A4A;">
              <td style="padding: 12px 0; color: #7070A0; font-size: 13px;">SaaS Stage</td>
              <td style="padding: 12px 0; color: #E8E8F0; font-size: 14px;">${stage}</td>
            </tr>
            <tr style="border-bottom: 1px solid #2A2A4A;">
              <td style="padding: 12px 0; color: #7070A0; font-size: 13px; vertical-align: top;">Challenge</td>
              <td style="padding: 12px 0; color: #E8E8F0; font-size: 14px; line-height: 1.6;">${challenge}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #7070A0; font-size: 13px;">Found via</td>
              <td style="padding: 12px 0; color: #E8E8F0; font-size: 14px;">${source}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 16px; background: #1A1A2E; border-radius: 8px; border-left: 3px solid #6C63FF;">
            <p style="margin: 0; color: #A0A0B8; font-size: 13px;">
              Reply directly to this email to respond to ${name} at ${email}
            </p>
          </div>
        </div>
      `,
    })

    // Send confirmation to the person who submitted
    await resend.emails.send({
      from: 'Chandan Chaudhary <onboarding@resend.dev>',
      to: email,
      subject: 'Got your message — talk soon',
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0F0F1A; color: #E8E8F0; border-radius: 12px;">
          <div style="margin-bottom: 24px;">
            <h1 style="color: #E8E8F0; font-size: 24px; margin: 0 0 8px;">Hi ${name},</h1>
            <p style="color: #A0A0B8; margin: 0; font-size: 16px; line-height: 1.6;">
              Thanks for reaching out. I've received your message and will get back to you within 24 hours on business days.
            </p>
          </div>

          <div style="padding: 20px; background: #1A1A2E; border-radius: 8px; border-left: 3px solid #6C63FF; margin-bottom: 24px;">
            <p style="margin: 0 0 8px; color: #7070A0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">Your message</p>
            <p style="margin: 0; color: #A0A0B8; font-size: 14px; line-height: 1.6; font-style: italic;">${challenge}</p>
          </div>

          <p style="color: #A0A0B8; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
            While you wait, feel free to explore my work and thinking:
          </p>

          <div style="margin-bottom: 32px;">
            <a href="https://chandanchaudhary.com/blog" style="color: #6C63FF; font-size: 14px; text-decoration: none; display: block; margin-bottom: 8px;">→ Read my SEO insights</a>
            <a href="https://chandanchaudhary.com/services" style="color: #6C63FF; font-size: 14px; text-decoration: none; display: block;">→ View my services</a>
          </div>

          <div style="padding-top: 24px; border-top: 1px solid #2A2A4A;">
            <p style="margin: 0; color: #E8E8F0; font-size: 14px; font-weight: 600;">Chandan Chaudhary</p>
            <p style="margin: 4px 0 0; color: #7070A0; font-size: 13px;">SEO Consultant · Hyderabad, India</p>
            <a href="https://chandanchaudhary.com" style="color: #6C63FF; font-size: 13px;">chandanchaudhary.com</a>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or email directly.' },
      { status: 500 }
    )
  }
}
