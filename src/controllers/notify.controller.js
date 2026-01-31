const Notify = require("../models/notify.model");
const sendEmail = require("../utils/sendEmail");
const notifyEmailTemplate = require("../utils/notifyEmailTemplate");

exports.notifyMe = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // Save email (prevent duplicates)
    const saved = await Notify.findOneAndUpdate(
      { email },
      { email },
      { upsert: true, new: true }
    );

    // Send admin email (non-blocking)
    try {
      await sendEmail({
        subject: "🚀 New Early Access Signup - Altravionix",
        html: notifyEmailTemplate(email),
      });
    } catch (e) {
      console.error("Notify email failed:", e.message);
    }

    res.status(201).json({
      success: true,
      message: "You will be notified when we launch!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
