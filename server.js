// Import
const express = require("express");

// Execute
const app = express();

//////////// REST API ////////////

// ROUTES
app.get("/", (req, res) => {
  res.send("Server is running.. in /Root");
});

app.get("/posts", (req, res) => {
  res.send("Server is running.. in /Posts");
});

// Listen
app.listen(9000);
