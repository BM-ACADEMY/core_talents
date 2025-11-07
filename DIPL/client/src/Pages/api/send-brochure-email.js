// pages/api/send-brochure-email.js
import { sendEmail } from '../../utils/email'; // Adjust path if needed

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, purpose } = req.body;

  if (!name || !email || !purpose) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const subject = "New Brochure Download Request";
  const text = `Name: ${name}\nEmail: ${email}\nPurpose: ${purpose}`;
  const html = `
    <h2>New Brochure Request</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Purpose:</strong> ${purpose}</p>
    <p><strong>Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
  `;

  try {
    const success = await sendEmail(
      "admin@abmgroups.org,ceo@abmgroups.org",
      subject,
      text,
      html
    );

    if (success) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ error: 'Failed to send email' });
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}