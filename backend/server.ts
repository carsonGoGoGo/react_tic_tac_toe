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
        // saveUser();
        // // updateDocument()
        // removeOneDocument();
        // insertThenRemove(saveUser(), removeOneDocument())
    }
});

/**
 * step 1: insert into collection
 * step 2: remove doc
 * @param insertFn
 * @param removeFn
 */
function insertThenRemove(insertFn:Function, removeFn:Function) {

}


/**
 * insert document
 */
var userSchema = new Schema({
    user_name: String,
    email: String,
    password: String,
    city: String
});

var UserMode = mongoose.model('User', userSchema);

var myFirstUser = new UserMode({
    user_name: 'zhangsanfeng',
    email: 'zhangshangfeng@qq.com',
    password: '12345',
    city: 'wugongshang'
});

function saveUser() {
    return myFirstUser.save(function (error, rst) {
        if (error) {
            console.log(error);
        } else {
            console.log("successfully saved" + rst);
        }
    })
};


/**
 * update document
 */
function updateDocument() {
    const query = {user_name: 'alibaba'};
    UserMode.update(query, function (err: any, docs: any) {
        if (err) {
            console.log(err)
        } else {
            console.log("update success" + docs)
        }
    })

}

function removeOneDocument() {
    const query = {user_name: 'zhangsanfeng'};
    UserMode.deleteOne(query, function (err: any) {
        if (err) {
            console.log(err);
        } else {
            console.log('remove one document success')
        }
    })
}

/**
 * remove all documents
 */
function removeAllDocuments() {

}

/**
 * query one document
 */
function queryOneDocument() {

}

