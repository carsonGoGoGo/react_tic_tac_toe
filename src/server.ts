import {Schema} from 'mongoose'
import mongoose = require("mongoose");


const db_url = 'mongodb://localhost/test';

/**
 * connect to db
 */

mongoose.connect(db_url, (err) => {
    if (err) {
        console.log("connection failed")
    } else {
        console.log("connect to db successfully");
        saveUser();
    }
});
function saveUser() {
    var connection = mongoose.createConnection(db_url);
    var userSchema = new Schema({
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
        } else {
            return "rst" + rst;
        }
    })
};
