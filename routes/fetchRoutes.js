const express = require('express')
const router = express.Router()
const PersonalBooking = require('../models/PersonalBooking')

//Routes for Fetch API
router.post('/yearBooking', (req,res)=>{
    PersonalBooking.find({date: { $gte: `${req.body.year}-01-01T00:00:00.000Z`, $lte: `${req.body.year}-12-31T23:59:59.999Z` }}, (err,docs) => {
        if(err) res.send(err);
        console.log(`/yearBooking called with year ${req.body.year}`)
        res.send(docs)
    });
});

router.post('/friendList', (req, res)=>{
    UserDetails.find({user : req.body.user})
        .select('firendList')
        .exec((err, docs) => {
            if(err) res.send(err);
            res.send(docs)
        })
        //Need to develop create/user route to create models. Adding friends to your user.
        
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