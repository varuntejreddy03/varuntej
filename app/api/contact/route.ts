// Brevo-backed contact route validates input, rate-limits by IP, and emails the portfolio owner.
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { owner } from '@/lib/content';
import { limitContactByIp } from '@/lib/rate-limit';
import { escapeHtml, formatTimestamp, getIpFromHeaders } from '@/lib/utils';

export const runtime = 'nodejs';

type ContactPayload = {
  fullName?: string;
  company?: string;
  email?: string;
  projectType?: string;
  budget?: string;
  message?: string;
  website?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!payload) {
    return NextResponse.json({ success: false, message: 'Invalid request body.' }, { status: 400 });
  }

  if (payload.website) {
    return NextResponse.json({ success: true, message: 'Ignored.' });
  }

  const fullName = payload.fullName?.trim() ?? '';
  const company = payload.company?.trim() ?? '';
  const email = payload.email?.trim() ?? '';
  const projectType = payload.projectType?.trim() ?? 'Website';
  const budget = payload.budget?.trim() ?? 'Not provided';
  const message = payload.message?.trim() ?? '';

  if (!fullName || !company || !email || !message) {
    return NextResponse.json(
      { success: false, message: 'Full name, company, email, and message are required.' },
      { status: 400 },
    );
  }

  const ip = getIpFromHeaders(request.headers);
  const rateLimit = await limitContactByIp(ip);
  if (!rateLimit.success) {
    return NextResponse.json(
      { success: false, message: 'Rate limit reached. Try again in about an hour.' },
      { status: 429 },
    );
  }

  const smtpHost = process.env.BREVO_SMTP_HOST;
  const smtpPort = Number(process.env.BREVO_SMTP_PORT || '587');
  const smtpLogin = process.env.BREVO_SMTP_LOGIN;
  const smtpPassword = process.env.BREVO_SMTP_PASSWORD;
  const apiKey = process.env.BREVO_API_KEY;

  if ((!smtpHost || !smtpLogin || !smtpPassword) && !apiKey) {
    return NextResponse.json(
      { success: false, message: 'Brevo credentials are not configured.' },
      { status: 500 },
    );
  }

  const timestamp = formatTimestamp(new Date());
  const htmlContent = `
    <div style="font-family: General Sans, Inter, Arial, sans-serif; background:#0d0f14; color:#e2e8f0; padding:32px;">
      <div style="max-width:680px; margin:0 auto; background:#101723; border:1px solid rgba(148,163,184,0.18); border-radius:24px; overflow:hidden;">
        <div style="padding:18px 24px; border-bottom:1px solid rgba(148,163,184,0.12); background:#0f1523;">
          <div style="font-size:11px; letter-spacing:0.28em; text-transform:uppercase; color:#60a5fa; font-weight:800;">Portfolio Contact</div>
        </div>
        <div style="padding:24px;">
          <h1 style="margin:0 0 18px; font-size:22px; color:#fff;">New inquiry received</h1>
          <table style="width:100%; border-collapse:collapse;">
            <tr><td style="padding:10px 0; color:#94a3b8; font-weight:700;">Sender</td><td style="padding:10px 0; color:#fff;">${escapeHtml(fullName)}</td></tr>
            <tr><td style="padding:10px 0; color:#94a3b8; font-weight:700;">Company</td><td style="padding:10px 0; color:#fff;">${escapeHtml(company)}</td></tr>
            <tr><td style="padding:10px 0; color:#94a3b8; font-weight:700;">Email</td><td style="padding:10px 0; color:#fff;">${escapeHtml(email)}</td></tr>
            <tr><td style="padding:10px 0; color:#94a3b8; font-weight:700;">Project Type</td><td style="padding:10px 0; color:#fff;">${escapeHtml(projectType)}</td></tr>
            <tr><td style="padding:10px 0; color:#94a3b8; font-weight:700;">Budget</td><td style="padding:10px 0; color:#fff;">${escapeHtml(budget)}</td></tr>
            <tr><td style="padding:10px 0; color:#94a3b8; font-weight:700;">Timestamp</td><td style="padding:10px 0; color:#fff;">${escapeHtml(timestamp)}</td></tr>
          </table>
          <div style="margin-top:24px; padding:18px; border-radius:18px; background:#0b1220; border:1px solid rgba(148,163,184,0.12);">
            <div style="font-size:11px; letter-spacing:0.22em; text-transform:uppercase; color:#94a3b8; font-weight:800; margin-bottom:10px;">Message</div>
            <div style="white-space:pre-wrap; line-height:1.7; color:#e2e8f0;">${escapeHtml(message)}</div>
          </div>
        </div>
      </div>
    </div>
  `;

  if (smtpHost && smtpLogin && smtpPassword) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpLogin,
          pass: smtpPassword,
        },
      });

      await transporter.sendMail({
        from: `"${owner.name}" <${owner.email}>`,
        to: owner.email,
        replyTo: `"${fullName}" <${email}>`,
        subject: `Portfolio inquiry • ${projectType} • ${company}`,
        html: htmlContent,
      });

      return NextResponse.json({ success: true, message: 'Message transmitted.' });
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          message:
            error instanceof Error ? `Brevo SMTP relay failed: ${error.message}` : 'Brevo SMTP relay failed.',
        },
        { status: 502 },
      );
    }
  }

  const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': apiKey!,
    },
    body: JSON.stringify({
      sender: {
        email: owner.email,
        name: owner.name,
      },
      to: [
        {
          email: owner.email,
          name: owner.name,
        },
      ],
      replyTo: {
        email,
        name: fullName,
      },
      subject: `Portfolio inquiry • ${projectType} • ${company}`,
      htmlContent,
    }),
  });

  if (!brevoResponse.ok) {
    const errorText = await brevoResponse.text();
    return NextResponse.json(
      {
        success: false,
        message: `Brevo API relay failed: ${errorText.slice(0, 160)}`,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true, message: 'Message transmitted.' });
}
