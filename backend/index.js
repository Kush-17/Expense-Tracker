const express = require('express');
const app = express();
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')
const colors = require('colors');
require('dotenv').config()

//middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))


db();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`.yellow.underline);
})