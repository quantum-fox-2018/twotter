const app = require('express')()
const bodyParser = require('body-parser')
const api = require('./routes/api')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/api',api)
app.listen(3000, ()=>{
  console.log('App listening on port 3000');
})
