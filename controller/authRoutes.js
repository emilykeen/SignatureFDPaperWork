var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var express = require("express");
var authRouter = express.Router();
var path = require("path");
var User = require("./../models/user.js");

var tokenSecret = "abcdefghijklmnopqrstuvwxyz";

authRouter.get("/", function(req, res) {
    res.send("index.html");
});

authRouter.post("/", function(req, res, next) {

  User.find({"email": req.body.email}, function(error, doc) {
    if (error) {
      res.send("Error: " + error);
    } else {
      if (doc.password === "illegaloperations") {
        var jwtAuthToken = jwt.sign({
          exp: Math.floor(Date.now() / 1000) + (60 * 60),
          user: {
            id: doc._id,
            email: doc.email
          }
        }, tokenSecret);

        res.cookie("authToken", jwtAuthToken, {
          secure: process.env.NODE_ENV === "production",
          signed: true
        });

        res.send("Cookie created.");
      } else {
        res.send("Invalid username or password.");
      }

      // bcrypt.compare(req.body.password, doc.password, function(err, valid) { 
      //   if (err || !valid) {
      //     res.send("Invalid username or password.");
      //   } else {
      //     var jwtAuthToken = jwt.sign({
      //       exp: Math.floor(Date.now() / 1000) + (60 * 60),
      //       data: {
      //         userId: doc._id,
      //         email: doc.email
      //       }
      //     }, tokenSecret);

      //     res.cookie("authToken", jwtAuthToken, {
      //       secure: process.env.NODE_ENV === "production",
      //       signed: true
      //     });

      //     res.redirect("/");
      //   }
      // });

    }
  });
});





// authRouter.post("/updatePassword", function(req, res) {

//   // Generate salt in 10 rounds
//   bcrypt.genSalt(10, function(err, salt) {

//     // If error, render register page with error status
//     if (err) {
//       console.log("there is an error");
//       res.render("register", {
//         status: "Unable to create username with password provided."
//       });

//       // If no error...
//     } else {

//       // Hash password and create user
//       bcrypt.hash(req.body.password, salt, function(err, hash) {
//         // ******store user password in mongodb******
//         //
//         //
//         //
//         //
//         //
//       });
//     }
//   });
// });



module.exports = authRouter;