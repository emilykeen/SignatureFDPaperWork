var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var express = require("express");
var adminRouter = express.Router();
var path = require("path");
var User = require("./../models/user");
var Admin = require("./../models/admin");
var tokenSecret = "abcdefghijklmnopqrstuvwxyz";


module.exports = adminRouter;