const mongoose = require('mongoose')

const MemberSchema = mongoose.Schema({
    user:{
        type:String,
        requires:true
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
    }
});

module.exports = MemberSchema