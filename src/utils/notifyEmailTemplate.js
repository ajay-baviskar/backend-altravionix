const notifyEmailTemplate = (email) => {
  return `
  <html>
    <body style="font-family:Arial;background:#f4f6fb;padding:20px;">
      <div style="max-width:500px;margin:auto;background:#fff;border-radius:12px;padding:20px;">
        <h2 style="color:#4f46e5;">🚀 New Early Access Request</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>Someone just requested early access to your AI platform.</p>
        <p style="font-size:12px;color:#777;">Altravionix</p>
      </div>
    </body>
  </html>
  `;
};

module.exports = notifyEmailTemplate;
