require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/users");
const app = express();
const playRoutes = require("./routes/plays");

const { PORT = 3001 } = process.env;

app.use(cors());

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log("MongoDB connection error:", err);
});

app.get("/", (req, res) => {
  res.send({
    message: "Hoop IQ backend is running",
  });
});

app.use(userRoutes);
app.use(playRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});