const mongoose = require('mongoose');

const EventsSchema = mongoose.Schema({
    user: {
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
    eventName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Events', EventsSchema)