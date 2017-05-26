var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
   // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.create([
    "burger_name", "devour"
  ], [
    req.body.burger_name, req.body.devour
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id.substr(1);
  //console.log("condition", condition);
  burger.update({
    devour: 1,
    //req.body.devour
  }, condition, function() {
    res.redirect("/");
  })});
router.put("/del/:id", function(req, res) {
  //.substr(1);
  var condition = "id = " + req.params.id
 console.log("condition", condition);
  burger.delete(condition, function() {
    res.redirect("/");
  })
});
// Export routes for server.js to use.
module.exports = router;