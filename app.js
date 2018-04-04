require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const apiRoute = require('./routers/api');
app.use('/api', apiRoute)

app.listen(3000, () =>{
    console.log('RUNNING IN PORT 3000')
})

