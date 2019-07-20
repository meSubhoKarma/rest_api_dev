// Import
const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

// Execute
const app = express();

// Import Routes
const postsRoutes = require("./routes/posts");

app.use("/posts", postsRoutes);

// ROUTES
app.get("/", (req, res) => {
  res.send("Server is running.. in /Root");
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("DB is Connected!")
);

// Listen
app.listen(9000);
