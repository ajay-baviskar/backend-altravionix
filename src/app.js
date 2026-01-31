const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contact.routes");
const notifyRoutes = require("./routes/notify.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", contactRoutes);
app.use("/api", notifyRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Altravionix API running");
});

module.exports = app;
