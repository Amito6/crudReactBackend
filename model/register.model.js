const mongo = require("mongoose");
const { Schema } = mongo;

const registerSchema = new Schema({
    name : String,
    email : {
        type : String,
        unique : true
    },
    mobile : Number,
    dob : String,
    password : String,
    profile : String,
    createdAt : {
        type : Date,
        default : Date.now
    },
    updatedAt : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongo.model("register",registerSchema);