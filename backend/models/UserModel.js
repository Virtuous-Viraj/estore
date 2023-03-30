const mongoose = require("mongoose")

const {Schema} = mongoose

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    lastname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phoneNumber : {
        type : String,

    },
    country : {
        type : String
    },
    zipCode : {
        type : String
    },
    city : {
        type : String
    },
    state : {
        type : String
    },
    password : {
        type : String,
        required : true
    },
    isAdmin : {
        type : Boolean,
        required : true,
        default : false
    }

}, {
    timestamps : true
})

const User = mongoose.model("User", userSchema)
module.exports = User;