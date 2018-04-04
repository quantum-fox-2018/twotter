const routes = require('express').Router()
const twotterController = require('../controllers/twotter-controller')

routes.get('/search-tweet', twotterController.searchTweets)
routes.get('/home-timeline', twotterController.getHomeTimeline)
routes.get('/user-timeline', twotterController.getUserTimeline)
routes.post('/update-status', twotterController.updateStatus)

module.exports = routes