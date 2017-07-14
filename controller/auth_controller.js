var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var express = require("express");
var authRouter = express.Router();
var path = require("path");
var User = require("./../models/user");
var Admin = require("./../models/admin");
var tokenSecret = "abcdefghijklmnopqrstuvwxyz";

authRouter.get("/login", function(req, res, next) {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

authRouter.post("/login", function(req, res, next) {

  User.findOne({"EmailAddress": req.body.email}, function(error, doc) {

    if (error) {
      res.send({ success: false, message: error });
    }

    if (doc) {
      bcrypt.compare(req.body.password, doc.Password, function(err, valid) {
        if (err || !valid) {
          res.send({ success: false, message: "Invalid username or password." });
        } else {

          var jwtAuthToken = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            employee: {
              id: doc._id,
              email: doc.EmailAddress,
              auth_lvl: "employee"
            }
          }, tokenSecret);

            res.cookie('empToken', jwtAuthToken, {
              secure: process.env.NODE_ENV === 'production',
              signed: true
            });

          if (doc.isNewEmployee === true) {
            res.send({ success: true, message: "Employee login successful.", auth_lvl: "employee", isNew: true });
          } else {
            res.send({ success: true, message: "Employee login successful.", auth_lvl: "employee", isNew: false });
          }
        }
      });
    } else {

      Admin.findOne({"EmailAddress": req.body.email}, function(error1, doc) {

        if (error1) {
          res.send({ success: false, message: error1 });
        }

        if (doc) {
          bcrypt.compare(req.body.password, doc.Password, function(err1, valid) {
            if (err1 || !valid) {
              res.send({ success: false, message: "Invalid username or password." });
            } else {

              var jwtAuthToken = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                admin: {
                  id: doc._id,
                  email: doc.EmailAddress,
                  auth_lvl: "admin"
                }
              }, tokenSecret);

              res.cookie('adminToken', jwtAuthToken, {
                secure: process.env.NODE_ENV === 'production',
                signed: true
              });
              res.send({ success: true, message: "Admin login successful.", auth_lvl: "admin" });
            }
          });
        } else {
          res.send({ success: false, message: "You are neither an employee nor an admin." });
        }
      });
    }
  });
});

authRouter.get("/logout", function(req, res) {
  res.clearCookie("empToken");
  res.clearCookie("adminToken");
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  res.send({ success: true });
});

module.exports = authRouter;
