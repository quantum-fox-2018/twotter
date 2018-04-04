const express = require('express')
const morgan = require('morgan')
const app = express()

require('dotenv').config()

const twotter = require('./routes/twotter')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.use('/twotter', twotter)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server starts on ${port}`)
})