const express = require('express')
const app = express()
const createRoutes = require('./routes/createRoutes')
const fetchRoutes = require('./routes/fetchRoutes')
const exitRoutes = require('./routes/exitRoutes')
const actionRoutes = require('./routes/actionRoutes')
const port = 3100
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./booked.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the chinook database.');
});

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/create', createRoutes);
app.use('/fetch', fetchRoutes);
app.use('/exit', exitRoutes);
app.use('/action', actionRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))