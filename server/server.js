const dns = require("dns");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const weatherRoutes = require("./routes/weatherRoutes");
const historyRoutes = require("./routes/historyRoutes");

// Use public DNS servers because of the DNS issue
// encountered on the W-Link network.
dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "Weather App API is running",
  });
});

// Weather routes
app.use("/api/weather", weatherRoutes);
app.use("/api/history", historyRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});