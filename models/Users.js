const mongoose = require('mongoose')

const FriendDetail = mongoose.Schema({
    friendUser:{
        type:String,
        required : true
    },
    friendFirstName:{
        type:String,
        required:true
    },
    friendMiddleName:{
        type:String,
        required:false
    },
    friendLastName:{
        type:String,
        required:false
    }
})

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
    },
    friendList:{
        type:[FriendDetail],
        required:false
    }
});

module.exports = mongoose.model('Users', UsersSchema)