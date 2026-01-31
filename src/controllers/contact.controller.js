const Contact = require("../models/contact.model");
const sendEmail = require("../utils/sendEmail");
const contactEmailTemplate = require("../utils/contactEmailTemplate");

exports.createContact = async (req, res) => {
  try {
    const { name, email, service, message } = req.body;

    if (!name || !email || !service || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    await Contact.create({ name, email, service, message });
    try {
      await sendEmail({
        subject: "📩 New Contact Form Submission - Altravionix",
        html: contactEmailTemplate({ name, email, service, message }),
      });
    } catch (emailError) {
      console.error("Email failed:", emailError.message);
    }

    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

