const Client = require("../models/Client");

// Create a new client
exports.createClient = async (req, res) => {
  try {
    const { name, email, phone, company } = req.body;

    // Check if client already exists
    const existingClient = await Client.findOne({ email });
    if (existingClient) return res.status(400).json({ message: "Client already exists" });

    const client = await Client.create({ name, email, phone, company });

    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all clients
exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};