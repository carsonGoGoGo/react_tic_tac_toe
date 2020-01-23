import * as mongoose from 'mongoose'
import {Schema} from 'mongoose'

const db_url = 'mongodb://localhost/myTest';

/**
 * 连接到数据库
 */

mongoose.connection.on('connected', function () {
    mongoose.connect(db_url);
    console.log("connect to db successfully");

    function saveUser() {
        var userSchema = new Schema({
            user_name: String,
            email: String,
            password: String,
            city: String
        });

        var userModel = mongoose.model('UserName', userSchema);
        var myFirstUser = new userModel({
            user_name: 'putilaozu',
            email: 'putilaozu@qq.com',
            password: '12345',
            city: 'heaven'
        });
        myFirstUser.save(function (error, rst) {
            if (error) {
                console.log('save error 00');
            } else {
                return "rst" + rst;
            }
        })
    }


    saveUser();
});
