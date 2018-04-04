const express = require('express')
const OAuth = require('oauth')
const indexRoutes = require('./routes/index')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', indexRoutes)

app.listen(port, log => {
    console.log(`Apps is running on port "${port}"`)
})