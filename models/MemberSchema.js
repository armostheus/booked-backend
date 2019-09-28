const mongoose = require('mongoose')

const MemberSchema = mongoose.Schema({
    user:{
        type:String,
        requires:true
    },
    firstName:{
        type:String,
        required:true
    },
    middleName:{
        type:String,
        required:false
    },
    lastName:{
        type:String,
        required:true
    }
});

module.exports = MemberSchema