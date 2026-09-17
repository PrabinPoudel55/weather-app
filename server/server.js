const dns = require("dns");

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dns.setServers(["8.8.8.8", "1.1.1.1"]);
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.get("/", (req, res) => {
  res.json({
    message: "Weather App API is running",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});