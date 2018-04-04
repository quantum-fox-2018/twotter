const routes = require('express').Router()
const twotterController = require('../controllers/twotter-controller')

routes.post('/search-tweet', twotterController.searchTweets)
routes.get('/home-timeline', twotterController.getHomeTimeline)

module.exports = routes