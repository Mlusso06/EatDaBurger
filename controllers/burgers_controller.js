var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burgerInfo = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

router.get("/", function (req, res) {
    burgerInfo.selectAll(function (data) {
        var burgerObject = {
            burgerInfo: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });

    router.post("/api/burgers", function (req, res) {
        burgerInfo.insertOne(["burger_name"], [req.body.burger_name], function (data) {
            res.json({ id: data.insertId });
        }
        );
    });

    router.put("/burgers/update/:id", function (req, res) {
        var condition = "id = " + req.params.id;
        console.log("condition", condition);
        burgerInfo.updateOne({
            devoured: req.body.devoured
        }, condition, function (data) {
            if (data.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
    router.deleteOne(condition, function (req, res) {
        var condition = "id =" + req.params.id;
        console.log("condition", condition);

        burgerInfo.deleteOne(condition, function (data) {
            if (data.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
});
    // Export routes for server.js to use.
    module.exports = router;