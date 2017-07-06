// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var appController = require("./controller/app_controller")

// Require Schemas
var Admin = require("./models/admin.js");
var User = require("./models/user.js");

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));


// MongoDB Configuration configuration
mongoose.connect("mongodb://heroku_3w462mdh:1r5oq9vp57okbbgkbi18nvue3i@ds053198.mlab.com:53198/heroku_3w462mdh");
// mongoose.connect("mongodb://localhost/SignatureFD");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.use("/", appController);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
})
