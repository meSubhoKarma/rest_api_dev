// Import
const express = require("express");

// Execute
const app = express();

// Middlewares
// A function that executes when/ where ever we
// need to execute inside a route
app.use("/posts", () => {
  console.log("Middleware running..");
});

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
