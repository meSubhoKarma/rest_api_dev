// Here we created a separate file for posts routes
const express = require("express");
// import schema model to add data
const Post = require("../models/Post");

// Invoking the Router in express
const router = express.Router();

// using this router instaed of app
// just like this we can have posts router/ user router/ and else
router.get("/", (req, res) => {
  res.send("Server is running.. in /Posts");
});

// testing by passing data using postman/ POST/ Body/ raw/ json -- result - undefined
// why is that, because there's no conversion of json to output
// here come Body-Parser
// body-parser extract the entire body portion of an incoming request stream and
// exposes it on "req.body". The middleware was a part of Express.js earlier but
//now you have to install it separately. This body-parser module parses the JSON,
// buffer string and URL encoded data submitted using HTTP POST request.
// now go to the server file to import and it just need one line of code.
router.post("/", (req, res) => {
  //console.log(req.body);

  // lets post the entries to db by using the schema
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  // save the post/ then parse the data as json to see-on-screen/ and catch error if any
  // test on postman/ POST --
  // {"title": "first test post", "description": "this is a description"}
  post
    .save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json({
        message: err
      });
    });
});

module.exports = router;
