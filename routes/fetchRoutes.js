const express = require('express')
const router = express.Router()

//Routes for Fetch API
router.post('/yearBooking', (req,res)=>{
    console.log(req.params);
    res.send('I will send you year booking for required year');
});

router.post('/yourBooking', (req,res)=>{
    console.log(req.params);
    res.send('I will give you bookings created by you');
});

router.post('/events', (req,res)=>{
    console.log(req.params);
    res.send('I will fetch for you all the events created by you');
});

router.post('/groups', (req,res)=>{
    console.log(req.params);
    res.send('I will fetch for you the details of group created by you');
});

router.post('/users', (req,res)=>{
    console.log(req.params);
    res.send('I will get for you the users matching your search results');
});

router.post('/userDetails', (req,res)=>{
    console.log(req.params);
    res.send('I will fetch for you all the details of the user whom you are seeing in the booked UI');
});

router.post('/othersBooking', (req,res) => {
    console.log(req.params);
    res.send('I will give you bookings created by others');
});

module.exports = router;