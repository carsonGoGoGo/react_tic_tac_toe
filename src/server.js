"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var mongoose = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    userName: String,
    email: String,
    password: String,
    city: String
});
var db = mongoose.connection;
db.on('error', function () {
});
mongoose.connect('mongodb://localhost/myTest').then(function () {
    console.log("connect to db successfully");
});
