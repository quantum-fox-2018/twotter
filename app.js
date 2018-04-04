const express = require('express')
const api = require('./routes/api.router')
const app = express()

require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api', api)

app.listen(3000, () => {
    console.log('Aplikasi berjalan di 3000')
})