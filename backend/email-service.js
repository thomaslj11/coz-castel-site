// This is a logic preparation file for the Serverless backend (e.g., Vercel Functions or AWS Lambda)
// Dependencies: npm install resend

import { Resend } from 'resend';

// Use environment variable for API Key (never hardcode)
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message, honeypot } = req.body;

  // Security: Honeypot check
  if (honeypot) {
    // Silently fail for bots
    return res.status(200).json({ message: 'Sent' });
  }

  // Basic Validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  try {
    // Send to two recipients simultaneously
    const { data, error } = await resend.emails.send({
      from: 'Coz Castel Contact <contact@cozcastel.com>', // Verified domain required
      to: [
        process.env.RECIPIENT_EMAIL_1, // e.g., 'owner1@example.com'
        process.env.RECIPIENT_EMAIL_2  // e.g., 'owner2@example.com'
      ],
      reply_to: email, // Allow direct reply to user
      subject: `Nouveau message de ${name} - Coz Castel`,
      html: `
        <h1>Nouveau contact via le site web</h1>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 15px; border-left: 4px solid #23408F;">
          ${message.replace(/\n/g, '<br>')}
        </blockquote>
      `,
    });

    if (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error sending email' });
    }

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
}