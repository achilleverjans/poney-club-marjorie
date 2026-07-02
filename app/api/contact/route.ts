import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { prenom, nom, email, sujet, message } = await req.json()

  if (!prenom || !nom || !email || !sujet || !message) {
    return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  await transporter.sendMail({
    from: `"Poney Club Marjorie - Site Web" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `[Contact Site] ${sujet} — ${prenom} ${nom}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3a5a40;">Nouveau message depuis le site</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: bold; color: #555;">Prénom</td><td style="padding: 8px;">${prenom}</td></tr>
          <tr style="background:#f9f5ec;"><td style="padding: 8px; font-weight: bold; color: #555;">Nom</td><td style="padding: 8px;">${nom}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #555;">Email</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr style="background:#f9f5ec;"><td style="padding: 8px; font-weight: bold; color: #555;">Sujet</td><td style="padding: 8px;">${sujet}</td></tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background: #f9f5ec; border-radius: 8px;">
          <p style="font-weight: bold; color: #555; margin: 0 0 8px;">Message :</p>
          <p style="margin: 0; white-space: pre-line; color: #333;">${message}</p>
        </div>
        <p style="margin-top: 20px; font-size: 12px; color: #999;">
          Répondre directement à cet email répondra à ${email}
        </p>
      </div>
    `,
  })

  return NextResponse.json({ success: true })
}
