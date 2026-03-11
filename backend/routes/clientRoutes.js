const express = require("express");
const router = express.Router();
const { createClient, getClients } = require("../controllers/clientController");
const protect = require("../middleware/authMiddleware"); // optional, if you want only logged-in users

// Routes
router.post("/clients", protect, createClient); // only logged-in users can create clients
router.get("/clients", protect, getClients);

module.exports = router;