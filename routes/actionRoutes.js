const express = require('express')
const router = express.Router()

//Routes for action APIs

router.post('/pendingBookingRequests', (req,res)=>{
    console.log(req.params);
    res.send('I will give you bookings requests which are pending.');
});

router.post('/pendingBookingRequestAction', (req, res)=>{
    console.log(req.params);
    res.send('I will Accept or reject your pending booking requests when you will command');
});

router.post('/addFriend', (req,res)=>{
    console.log(req.params);
    res.send('I will send your friend a request to add you in Booked');
});

router.post('/friendAvailable', (req,res)=>{
    console.log(req.params);
    res.send('I will check for a friend or group of friends\' availability for your booking time');
});

router.post('/groupAvailable', (req,res)=>{
    console.log(req.params);
    res.send('I will check for your group\'s availability for the time you selected');
});

module.exports = router