const express = require('express');
const app = express()
require('dotenv').config()

const port = 3000

const index = require('./routes/index')
const api = require('./routes/api')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', index)
app.use('/api', api)

app.listen(port, ()=>{
  console.log(`App listen on port ${port}`)
})
