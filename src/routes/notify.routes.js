const express = require("express");
const { notifyMe } = require("../controllers/notify.controller");

const router = express.Router();

router.post("/notify", notifyMe);

module.exports = router;
