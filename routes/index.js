const index = require('express').Router()

index.get('/',(req,res)=>{
  res.send('Home sweet home')
})

module.exports = index
