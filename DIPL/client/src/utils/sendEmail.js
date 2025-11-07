// utils/sendEmail.js
import emailjs from '@emailjs/browser';

/**
 * Sends brochure request email  (Name, Email, Purpose) to admin & CEO
 * @param {Object} data - { name, email, purpose }
 * @returns {Promise<boolean>} - true on success
 */
const sendBrochureEmail = async ({ name, email, purpose }) => {
  // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
  const SERVICE_ID = 'your_service_id';        // e.g., service_abc123
  const TEMPLATE_ID = 'your_template_id';      // e.g., template_xyz789
  const PUBLIC_KEY = 'your_public_key';        // e.g., abc123xyz

  const templateParams = {
    from_name: name,
    from_email: email,
    purpose: purpose,
    to_email: 'admin@abmgroups.org, ceo@abmgroups.org', // both recipients
    message: `
      New Brochure Download Request
      =============================
      Name    : ${name}
      Email   : ${email}
      Purpose : ${purpose}
      
      Sent from website at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `.trim(),
  };

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    console.log('Brochure email sent successfully');
    return true;
  } catch (error) {
    console.error('Failed to send brochure email:', error);
    throw error; // Let caller handle UI feedback
  }
};

export default sendBrochureEmail;