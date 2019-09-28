const mongoose = require('mongoose')

const UsersSchema = mongoose.Schema({
    user:{
        type:String,
        required:true
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
    },
    emailId:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Users', UsersSchema)