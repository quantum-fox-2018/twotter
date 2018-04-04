const express = require('express')
const morgan = require('morgan')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000



app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))

app.use('/', require('./routes'))

app.listen(port, () => {
  console.log(`this twotter is running on port: ${port}`)
})