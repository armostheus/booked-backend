const mongoose = require('mongoose');
const MemberSchema = require('../models/MemberSchema')

const GroupsSchema = mongoose.Schema({
    owner: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    groupName: {
        type: String,
        required: true
    },
    groupMembers: {
        type: [MemberSchema]
    }
});

module.exports = mongoose.model('Groups', GroupsSchema)