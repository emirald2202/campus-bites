const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Set static folder (serving the frontend from backend/../public)
app.use(express.static(path.join(__dirname, "../public")));

// Define Routes
app.use("/", authRoutes);
app.use("/", orderRoutes);

// Catch-all route to serve index.html for frontend
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
});

module.exports = app;
