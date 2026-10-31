/* global process */
// Vercel serverless function behind the contact form. Sends the message to
// Kanyisola through Resend (https://resend.com). See .env.example for setup.
// Without RESEND_API_KEY it answers 503, and the form shows her email instead.

const LIMITS = { name: 100, email: 200, subject: 150, message: 5000 }
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const clean = (value, max) => String(value ?? '').trim().slice(0, max)

export const validate = (body) => {
  const fields = {
    name: clean(body.name, LIMITS.name),
    email: clean(body.email, LIMITS.email),
    subject: clean(body.subject, LIMITS.subject).replace(/[\r\n]+/g, ' '),
    message: clean(body.message, LIMITS.message),
  }
  const valid = fields.name && EMAIL.test(fields.email) && fields.subject && fields.message.length >= 10
  return valid ? fields : null
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = typeof req.body === 'object' && req.body ? req.body : {}

  // The hidden field: people leave it empty, bots fill it in. Answer as if
  // the message was sent so a bot learns nothing.
  if (body.website) return res.status(200).json({ ok: true })

  const fields = validate(body)
  if (!fields) return res.status(400).json({ error: 'Check the form and try again' })

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    return res.status(503).json({ error: 'Email is not configured' })
  }

  try {
    const sent = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>',
        to: [CONTACT_TO_EMAIL],
        reply_to: fields.email,
        subject: `Portfolio: ${fields.subject}`,
        text: `From: ${fields.name} <${fields.email}>\n\n${fields.message}`,
      }),
    })
    if (!sent.ok) {
      console.error('Resend responded', sent.status)
      return res.status(502).json({ error: 'Email could not be sent' })
    }
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Resend request failed', err)
    return res.status(502).json({ error: 'Email could not be sent' })
  }
}
