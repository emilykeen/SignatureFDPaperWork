var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var express = require("express");
var router = express.Router();
var path = require("path");
var User = require("./../models/user");
var Admin = require("./../models/admin");
var tokenSecret = "abcdefghijklmnopqrstuvwxyz";

router.post("/update/password", function(req, res) {
  
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      res.send(err);
    } else {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        User.findOneAndUpdate({
          "EmailAddress": req.body.email
        }, {
          "Password": hash,
          "isNewEmployee": false
        }).exec(function(err, doc) {
          if (err) {
            res.send(err);
          } else {
            res.send({ success: true });
          }
        });
      });
    }
  });
});

router.get("/data", function(req, res) {
  User.find({"EmailAddress": req.user.employee.email}, function(err, doc) {
    if (err) {
      res.send(err);
    } else {
      res.send(doc);
    }
  });
});

router.post("/data", function(req, res) {
  User.findOneAndUpdate({
    "EmailAddress": req.user.employee.email
  }, req.body).exec(function(err, doc) {
    if (err) {
      res.send(err);
    } else {
      res.send({ success: true });
    }
  });
});


module.exports = router;