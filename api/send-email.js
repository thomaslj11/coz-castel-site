import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, message, honeypot } = JSON.parse(req.body);

        // Server-side Honeypot Check
        if (honeypot) {
            console.warn('Bot detected via honeypot');
            return res.status(200).json({ message: 'Message sent' }); // Silent fail
        }

        if (!email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Get configuration from environment variables
        const recipients = process.env.CONTACT_EMAIL_TO
            ? process.env.CONTACT_EMAIL_TO.split(',').map(e => e.trim())
            : ['owner@cozcastel.com']; // Fallback

        const sender = process.env.CONTACT_EMAIL_FROM || 'contact@cozcastel.com';

        const { data, error } = await resend.emails.send({
            from: `Coz Castel Website <${sender}>`,
            to: recipients,
            reply_to: email,
            subject: `Nouveau message de ${name}`,
            html: `
        <h1>Nouveau message du site web</h1>
        <p><strong>De:</strong> ${name} (${email})</p>
        <hr />
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return res.status(400).json({ error });
        }

        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
