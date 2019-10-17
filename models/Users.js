const mongoose = require('mongoose')
const MemberSchema = require('../models/MemberSchema')

const UsersSchema = mongoose.Schema({
    user:{
        type:String,
        unique:true,
        required:true
    },
    name:{
        first:{
            type:String,
            required:true
        },
        middle:{
            type:String,
            required:false
        },
        last:{
            type:String,
            required:true
        }
    },
    emailId:{
        type:String,
        unique:true,
        required:true
    },
    friendList:{
        type:[MemberSchema],
        required:false
    }
});

module.exports = mongoose.model('Users', UsersSchema)