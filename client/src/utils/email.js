const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  secure: true,
  port: 465,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASS,
  },
});

const sendEmail = async (to, subject, text, html) => {
  try {
    const mailOptions = {
      from: process.env.USER_EMAIL,
      to,
      subject,
      text,
      html,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);
    return true;
  } catch (error) {
    console.error("Error sending email: ", error);
    return false;
  }
};

module.exports = { sendEmail };