var express = require("express");

var router = express.Router();

// Import the model (book.js) to use its database functions

var book = require("../models/book.js");

// Create all our routes and set up logic within those routes where required
router.get("/", function(req, res) {
  book.all(function(data) {
    var hbsObject = {
      books: data
    };
    console.log("hbsObject ", hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/books", function(req, res) {
  book.create([
    "name", "hasRead"
  ], [
    req.body.name, req.body.hasRead
  ], function(result) {
    res.json({ id: result.insterId });
  });
});

router.put("/api/books/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition ", condition);

  book.update({
    hasRead: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/books/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  book.delete(condition, function(result) {
    if (result. affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
});

// Export routes for server.js
module.exports = router;
