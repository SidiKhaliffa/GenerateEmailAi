const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const clientRoutes = require("./routes/clientRoutes");
const aiRoutes = require("./routes/aiRoutes");
const protect = require("./middleware/authMiddleware");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api", clientRoutes);
app.use("/api/ai", aiRoutes);

// Protected test route
app.get("/api/protected", protect, (req, res) => {
  res.json({ message: "You have access to this protected route", userId: req.user.id });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
