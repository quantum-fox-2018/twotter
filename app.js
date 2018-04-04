require('dotenv').config()
const express = require('express');
const app = express();
const indexRoutes = require('./routes/index');


app.use(express.json())
app.use(express.urlencoded({extended:false}));

// console.log(process.env);

app.use('/', indexRoutes)

app.listen(3000, ()=> {
  console.log('Server started on port 3000');
})
