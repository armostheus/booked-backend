const mongoose = require('mongoose');

const PersonalBookingSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: Date,
        required: false
    },
    endTime: {
        type: Date,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    private: {
        type: Boolean,
        required: false,
        default: false
    },
    description: {
        type: String,
        required: false
    },
    reminder: {
        type: Boolean,
        required: false
    },
    reminderTime: {
        type: Date,
        required: false
    }
});

module.exports = mongoose.model('Personal_Booking', PersonalBookingSchema)