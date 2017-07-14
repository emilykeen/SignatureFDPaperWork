// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var appController = require("./controller/app_controller");
var authController = require("./controller/auth_controller");
var employeeController = require("./controller/employee_controller");
var adminController = require("./controller/admin_controller");
var jwtExp = require("express-jwt");

// Require Schemas
var Admin = require("./models/admin.js");
var User = require("./models/user.js");

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000;

var tokenSecret = "abcdefghijklmnopqrstuvwxyz";

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(cookieParser(tokenSecret));

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

var path = require("path");

app.use("/", appController);

app.use("/auth", authController);


app.use("/employee", jwtExp({
  secret: tokenSecret,
  getToken: function fromCookie(req) {
    if (req.signedCookies) {
      return req.signedCookies.empToken;
    }
    return null;
  }
}));

app.use("/employee", function(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.redirect("/");
  }
});

app.use("/employee", employeeController);

app.use("/admin", jwtExp({
  secret: tokenSecret,
  getToken: function fromCookie(req) {
    if (req.signedCookies) {
      return req.signedCookies.adminToken;
    }
    return null;
  }
}));

app.use("/admin", function(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.redirect("/");
  }
});

app.use("/admin", adminController);


app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'views', 'index.html'))
});


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
