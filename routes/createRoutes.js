const express = require('express')
const router = express.Router()
const PersonalBooking = require('../models/PersonalBooking') 
const GroupBooking = require('../models/GroupBooking')
const Events = require('../models/Events')
const Groups = require('../models/Groups')

//Routes for create APIs
router.post('/personalBooking', (req,res)=>{
    const personalBooking = new PersonalBooking({
        user : req.body.user,
        date : new Date(req.body.date),
        startTime : new Date(req.body.startTime),
        endTime : new Date(req.body.endTime),
        title : req.body.title,
        private : req.body.private,
        description : req.body.description,
        reminder : req.body.reminder,
        reminderTime : new Date(req.body.reminderTime)
    });
    personalBooking.save()
     .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json({message : err})
    }) 
});

router.post('/groupBooking', (req,res)=>{
    const groupBooking = new GroupBooking({
        user : req.body.user,
        date : new Date(req.body.date),
        startTime : new Date(req.body.startTime),
        endTime : new Date(req.body.endTime),
        title : req.body.title,
        private : req.body.private,
        description : req.body.description,
        reminder : req.body.reminder,
        reminderTime : new Date(req.body.reminderTime),
        groupMembers : req.body.groupMembers
    });
    groupBooking.save()
     .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json({message : err})
    }) 
});

router.post('/event', (req,res)=>{
    const event = new Events({
        user : req.body.user,
        title : req.body.title,
        description : req.body.description,
        eventName : req.body.eventName
    });
    event.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json({message : err})
    })
});

router.post('/group', (req,res)=>{
    const groups = new Groups({
        owner : req.body.owner,
        title : req.body.title,
        description : req.body.description,
        groupName : req.body.groupName,
        groupMembers : req.body.groupMembers
    });
    groups.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json({message : err})
    })
});

module.exports = router