const Contact = require("../models/contact.model");
const sendEmail = require("../utils/sendEmail");
const contactEmailTemplate = require("../utils/contactEmailTemplate");

exports.createContact = async (req, res) => {
  try {
    const { name, email, service, message } = req.body;

    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Save to DB
    const contact = await Contact.create({
      name,
      email,
      service,
      message,
    });

    // Send Email
    await sendEmail({
      subject: "📩 New Contact Form Submission - Altravionix",
      html: contactEmailTemplate({ name, email, service, message }),
    });

    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
    });
  } catch (error) {
    console.error("Email Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
