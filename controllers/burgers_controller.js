var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burgerInfo = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

router.get('/', function (req, res) {
    burgerInfo.all(function (data) {
        var burgerObject = {
            burgerInfo: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});







// Export routes for server.js to use.
module.exports = router;