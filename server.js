// Import
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

// Execute
const app = express();

// to parse the incoming JSON data to body as something readable by the "res"
app.use(bodyParser.json());

// May be we dont want to have track of /posts or anyhting else
// here comes the midddleware function
// import the posts routes, so anytime you go to posts,
// the routes through posts gonna run like -- /posts/specific
// Importing Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("Server is running.. in /Root");
});

// Connect to DB
// importing the API key to db using dotenv lib
// DB_CONNECTION in .env file pointing to the key
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("DB is Connected!")
);

// Listen
app.listen(9000);
