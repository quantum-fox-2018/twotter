const api = require('express').Router()
const apiController = require('../controllers/api.controller')

api
  .get('/', (req,res)=>{res.send('API')})
  .get('/getown', apiController.getOwn) // see own tweets
  .get('/gettimeline', apiController.getTimeline) // see timeline
  .post('/searchtweet', apiController.searchTweet) // search tweet based on key
  .post('/maketweet', apiController.makeTweet) // post new tweet

module.exports = api
