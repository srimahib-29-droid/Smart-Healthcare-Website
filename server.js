const connectDB = require("./config/db");
require("dotenv").config();

connectDB();
const express = require("express");
const cors = require("cors");
const appointmentRoutes = require("./routes/appointment");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/appointments", appointmentRoutes);

app.get("/", (req, res) => {
  res.send("Smart Healthcare Backend is Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});