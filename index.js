const express = require('express')
const app = express()
const cors = require('cors')
const createRoutes = require('./routes/createRoutes')
const fetchRoutes = require('./routes/fetchRoutes')
const exitRoutes = require('./routes/exitRoutes')
const actionRoutes = require('./routes/actionRoutes')
const mongoose = require('mongoose')
require('dotenv/config')
const port = 3100
/*const sqlite3 = require('sqlite3').verbose();
 
let db = new sqlite3.Database('./booked.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the chinook database.');
}); */

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use('/create', createRoutes);
app.use('/fetch', fetchRoutes);
app.use('/exit', exitRoutes);
app.use('/action', actionRoutes);

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    {  useNewUrlParser: true, useUnifiedTopology: true  },
    () => {
        console.log('Connected to DB');
    });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))