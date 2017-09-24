var express = require("express");
var fetch = require("node-fetch")

var router = express.Router();
var Key = process.env.Key

var apiURL = "https://api.wunderground.com/api/" + Key + "/geolookup/conditions/q/"

//GET route for getting all of the white cards
router.get("/:state/:city", function (req, res) {
  var urlEx = apiURL + req.params.state + "/" + req.params.city + ".json";
  
  fetch(urlEx).then(function(response) {
        return response.json();
    }).then(function(json) {
        res.json(json);
    });
});

module.exports = router;
