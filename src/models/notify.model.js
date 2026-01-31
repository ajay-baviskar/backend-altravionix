const mongoose = require("mongoose");

const notifySchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    source: {
      type: String,
      default: "coming-soon",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notify", notifySchema);
