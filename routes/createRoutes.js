const express = require('express')
const router = express.Router()

//Routes for create APIs
router.post('/personalBooking', (req,res)=>{
    console.log(req.params);
    res.send('I will create a personal booking for you');
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