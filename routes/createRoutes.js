const express = require('express')
const router = express.Router()
const PersonalBooking = require('../models/PersonalBooking') 

//Routes for create APIs
router.post('/personalBooking', (req,res)=>{
    const personalBooking = new PersonalBooking({
        user : req.body.user
    });
    console.log(req.body.user);
    personalBooking.save((err,data)=>{
        if(err) res.send(err);
        res.json(data)
    });
    /* .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json({message : err})
    }) */
});

router.post('/groupBooking', (req,res)=>{
    console.log(req.params);
    res.send('I will create a group booking for you');
});

router.post('/event', (req,res)=>{
    console.log(req.body);
    res.send('I will create a new event for you');
});

router.post('/group', (req,res)=>{
    console.log(req.params);
    res.send('I will create a group for you');
});

module.exports = router