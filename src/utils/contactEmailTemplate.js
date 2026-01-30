const contactEmailTemplate = ({ name, email, service, message }) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        background-color: #f4f6fb;
        font-family: Arial, sans-serif;
        padding: 20px;
      }
      .container {
        max-width: 600px;
        margin: auto;
        background: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
      }
      .header {
        background: linear-gradient(90deg, #4f46e5, #9333ea);
        color: white;
        padding: 24px;
        text-align: center;
      }
      .header h1 {
        margin: 0;
        font-size: 24px;
      }
      .content {
        padding: 24px;
        color: #333;
      }
      .field {
        margin-bottom: 16px;
      }
      .label {
        font-weight: bold;
        color: #555;
      }
      .value {
        margin-top: 4px;
        padding: 12px;
        background: #f9fafb;
        border-radius: 8px;
      }
      .footer {
        text-align: center;
        padding: 16px;
        font-size: 12px;
        color: #777;
        background: #f4f6fb;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div class="header">
        <h1>New Contact Form Submission</h1>
        <p>Altravionix</p>
      </div>

      <div class="content">
        <div class="field">
          <div class="label">Full Name</div>
          <div class="value">${name}</div>
        </div>

        <div class="field">
          <div class="label">Email Address</div>
          <div class="value">${email}</div>
        </div>

        <div class="field">
          <div class="label">Service Interested In</div>
          <div class="value">${service}</div>
        </div>

        <div class="field">
          <div class="label">Message</div>
          <div class="value">${message}</div>
        </div>
      </div>

      <div class="footer">
        © ${new Date().getFullYear()} Altravionix • All rights reserved
      </div>
    </div>
  </body>
  </html>
  `;
};

module.exports = contactEmailTemplate;
