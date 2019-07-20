// Here we created a separate file for posts routes
const express = require("express");
// import schema model to add data
const Post = require("../models/Post");

// Invoking the Router in express
const router = express.Router();

// using this router instaed of app
// just like this we can have posts router/ user router/ and else
// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({
      message: err
    });
  }
});

// testing by passing data using postman/ POST/ Body/ raw/ json -- result - undefined
// why is that, because there's no conversion of json to output
// here come Body-Parser
// body-parser extract the entire body portion of an incoming request stream and
// exposes it on "req.body". The middleware was a part of Express.js earlier but
//now you have to install it separately. This body-parser module parses the JSON,
// buffer string and URL encoded data submitted using HTTP POST request.
// now go to the server file to import and it just need one line of code.
// Submits a post
router.post("/", async (req, res) => {
  //console.log(req.body);

  // lets post the entries to db by using the schema
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  // save the post/ then parse the data as json to see-on-screen/ and catch error if any
  // test on postman/ POST --
  // {"title": "first test post", "description": "this is a description"}

  // simplifying with async/await and to catch error enclosing the call with try{}
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch {
    err => {
      res.json({
        message: err
      });
    };
  }
});

// Specific post
// test it by adding an id from any previous post
router.get("/:postId", async (req, res) => {
  //console.log(req.params.postId);
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({
      message: err
    });
  }
});

module.exports = router;
