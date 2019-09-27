const mongoose = require('mongoose');

const PersonalBookingSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Personal_Booking', PersonalBookingSchema)