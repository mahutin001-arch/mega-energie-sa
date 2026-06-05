// Vercel serverless function: sends the "Demander un devis" form via Hostinger SMTP.
// Required env vars (set in Vercel → Project → Settings → Environment Variables):
//   SMTP_USER  e.g. direction@megaenergiesa.com
//   SMTP_PASS  the mailbox password
// Optional (sensible defaults for Hostinger):
//   SMTP_HOST  default smtp.hostinger.com
//   SMTP_PORT  default 465
//   SMTP_SECURE default true
//   CONTACT_TO default = SMTP_USER
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'method_not_allowed' });
    return;
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const { name, company, email, commodity, message, _gotcha } = body;

    // honeypot — silently accept bots without sending
    if (_gotcha) { res.status(200).json({ ok: true }); return; }

    if (!name || !email) {
      res.status(400).json({ ok: false, error: 'missing_fields' });
      return;
    }
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      res.status(500).json({ ok: false, error: 'mailer_not_configured' });
      return;
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || 'true') === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const to = process.env.CONTACT_TO || process.env.SMTP_USER;
    const clean = (s) => String(s || '').replace(/[\r\n]+/g, ' ').slice(0, 200);

    await transporter.sendMail({
      from: `"MEGA ENERGIE SA — Site web" <${process.env.SMTP_USER}>`,
      to,
      replyTo: email,
      subject: `Demande de devis — ${clean(commodity) || 'Général'} — ${clean(name)}`,
      text:
        `Nouvelle demande depuis megaenergiesa.com\n\n` +
        `Nom        : ${clean(name)}\n` +
        `Société    : ${clean(company) || '—'}\n` +
        `E-mail     : ${clean(email)}\n` +
        `Produit    : ${clean(commodity) || '—'}\n\n` +
        `Message :\n${String(message || '—').slice(0, 5000)}\n`,
    });

    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, error: 'send_failed' });
  }
};
