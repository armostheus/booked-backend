const express = require('express')
const router = express.Router()

//Routes for exit API

router.post('/booking', (req,res)=>{
    console.log(req.params);
    res.send('I will exit a booking for you');
});

router.post('/event', (req,res)=>{
    console.log(req.params);
    res.send('I will exit a event for you');
});

router.post('/group', (req,res)=>{
    console.log(req.params);
    res.send('I will exit a group for you');
});

module.exports = router;