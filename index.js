const express = require('express')
const app = express()
const port = 3000
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./booked.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the chinook database.');
  });

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/getYearBooking', (req,res)=>{
    console.log(req.params);
    res.send('I will send you year booking for required year');
});

app.post('/createPersonalBooking', (req,res)=>{
    console.log(req.params);
    res.send('I will create a personal booking for you');
});

app.post('/createGroupBooking', (req,res)=>{
    console.log(req.params);
    res.send('I will create a group booking for you');
});

app.post('/exitBooking', (req,res)=>{
    console.log(req.params);
    res.send('I will exit a booking for you');
});

app.post('/viewYourBooking', (req,res)=>{
    console.log(req.params);
    res.send('I will give you bookings created by you');
});

app.post('/viewOthersBooking', (req,res) => {
    console.log(req.params);
    res.send('I will give you bookings created by others');
});

app.post('/pendingBookingRequests', (req,res)=>{
    console.log(req.params);
    res.send('I will give you bookings requests which are pending.');
});

app.post('/pendingBookingRequestAction', (req, res)=>{
    console.log(req.params);
    res.send('I will Accept or reject your pending booking requests when you will command');
});

app.post('/createEvent', (req,res)=>{
    console.log(req.params);
    res.send('I will create a new event for you');
});

app.post('/getEvents', (req,res)=>{
    console.log(req.params);
    res.send('I will fetch for you all the events created by you');
});

app.post('/createGroup', (req,res)=>{
    console.log(req.params);
    res.send('I will create a group for you');
});

app.post('/getGroups', (req,res)=>{
    console.log(req.params);
    res.send('I will fetch for you the details of group created by you');
});

app.post('/addFriend', (req,res)=>{
    console.log(req.params);
    res.send('I will send your friend a request to add you in Booked');
});

app.post('/getUsers', (req,res)=>{
    console.log(req.params);
    res.send('I will get for you the users matching your search results');
});

app.post('/getUserDetails', (req,res)=>{
    console.log(req.params);
    res.send('I will fetch for you all the details of the user whom you are seeing in the booked UI');
});

app.post('/friendAvailable', (req,res)=>{
    console.log(req.params);
    res.send('I will check for a friend or group of friends\' availability for your booking time');
});

app.post('/groupAvailable', (req,res)=>{
    console.log(req.params);
    res.send('I will check for your group\'s availability for the time you selected');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))