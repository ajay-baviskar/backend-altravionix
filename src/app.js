const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contact.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", contactRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("🚀 API running successfully");
});

module.exports = app;
