var express = require("express");

var router = express.Router();

var path = require("path");
var User = require("./../models/user.js")

router.get("/", function(req, res) {
    res.send("index.html");
});

router.get("/data", function(req, res) {
    User.find({"email": "user@gmail.com"}, function(error, doc) {
        if (error) {
            res.send("GET error: "error);
        } else {
            res.send(doc);

        }
    });
});

router.post("/data", function(req, res) {
    console.log(req.body.email);

    User.findOneAndUpdate({
            "email": req.body.email
        
        },req.body.data)
        // Execute the above query
        .exec(function(err, doc) {
            // Log any errors
            if (err) {
                res.send(err);
            } else {
                // Or send the document to the browser
                res.send({
                    status: "Update Successful"
                });
            }
        });
});


router.get("/Handbook", function(req, res) {
    User.find({}, function(error, doc) {
        if (error) {
            res.send(error);
        } else {
            res.send(doc);
        }
    });
});
router.get("/FirmDirectory", function(req, res) {
    User.find({}, function(error, doc) {
        if (error) {
            res.send(error);
        } else {
            res.send(doc);
        }
    });
});


router.get("/reactIndex", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/ReactIndex.html"));
});

module.exports = router;