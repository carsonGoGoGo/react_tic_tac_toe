"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose = require("mongoose");
var db_url = 'mongodb://localhost/test';
/**
 * connect to db
 */
mongoose.connect(db_url, function (err) {
    if (err) {
        console.log("connection failed");
    }
    else {
        console.log("connect to db successfully");
        saveUser();
    }
});
function saveUser() {
    var connection = mongoose.createConnection(db_url);
    var userSchema = new mongoose_1.Schema({
        user_name: String,
        email: String,
        password: String,
        city: String
    });
    var UserMode = connection.model('User', userSchema);
    var myFirstUser = new UserMode({
        user_name: 'putilaozu',
        email: 'putilaozu@qq.com',
        password: '12345',
        city: 'heaven'
    });
    return myFirstUser.save(function (error, rst) {
        if (error) {
            console.log(error);
        }
        else {
            return "rst" + rst;
        }
    });
}
;
