const contactEmailTemplate = ({ name, email, service, message }) => {
  return `
  <!DOCTYPE html>
  <html>
    <body style="font-family: Arial, sans-serif; background:#f4f6fb; padding:20px;">
      <div style="max-width:600px; margin:auto; background:#fff; border-radius:12px;">
        <div style="background:linear-gradient(90deg,#4f46e5,#9333ea); padding:20px; color:white;">
          <h2>New Contact Form Submission</h2>
          <p>Altravionix Website</p>
        </div>

        <div style="padding:20px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <div style="background:#f9fafb; padding:12px; border-radius:6px;">
            ${message}
          </div>
        </div>

        <div style="text-align:center; padding:12px; font-size:12px; color:#777;">
          © ${new Date().getFullYear()} Altravionix
        </div>
      </div>
    </body>
  </html>
  `;
};

module.exports = contactEmailTemplate;
