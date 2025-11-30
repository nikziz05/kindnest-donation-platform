const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  try {
    
    console.log('To:', options.email);
    console.log('Subject:', options.subject);
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_HOST:', process.env.EMAIL_HOST);
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      },
      debug: true, // Enable debug logs
      logger: true  // Enable logger
    });

    // Verify transporter configuration
    await transporter.verify();
    console.log('SMTP connection verified');

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: options.email,
      subject: options.subject,
      html: options.html,
      messageId: `<${Date.now()}.${Math.random().toString(36).substring(2)}@kindnest.com>`,
      headers: {
        'X-Entity-Ref-ID': Date.now().toString()
      }
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
    console.log('=== EMAIL SEND SUCCESS ===');
    return info;
  } catch (error) {
    console.error('=== EMAIL SEND FAILED ===');
    console.error('Error type:', error.name);
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Full error:', error);
    console.error('=========================');
    throw new Error(`Email could not be sent: ${error.message}`);
  }
};

module.exports = sendEmail;