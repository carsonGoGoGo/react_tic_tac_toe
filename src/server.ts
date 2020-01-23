import {Schema} from 'mongoose'
import * as mongoose from "mongoose";

export interface IUser {
    userName: string;
    email: string;
    password: string;
    city: string;
}


const db = mongoose.connection;

const db_url = 'mongodb://localhost/myTest';

/**
 * 连接到数据库
 */
mongoose.connect(db_url).then(()=>{
    console.log("connect to db successfully");

    var userSchema = new Schema({
        userName: String,
        email: String,
        password: String,
        city: String
    });

    var userModel = mongoose.model('UserName', userSchema);


    var myFirstUser = new userModel({
        userName: 'putilaozu',
        email: 'putilaozu@qq.com',
        password: '12345',
        city: 'heaven'
    });

    myFirstUser.save(function(error){
        console.log('save error');
    })



});
