import {Schema} from 'mongoose'
import * as mongoose from "mongoose";

export interface IUser {
    userName: string;
    email: string;
    password: string;
    city: string;
}

export var userSchema = new Schema({
    userName: String,
    email: String,
    password: String,
    city: String
});

const db = mongoose.connection;
db.on('error', function () {

});

mongoose.connect('mongodb://localhost/myTest').then(()=>{
    console.log("connect to db successfully");
});
