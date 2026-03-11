const express = require("express");
const router = express.Router();

const { generateEmail } = require("../controllers/aiController");

router.post("/generate-email", generateEmail);

module.exports = router;
