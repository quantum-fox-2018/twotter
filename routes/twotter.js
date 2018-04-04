const routes = require('express').Router()
const twotterController = require('../controllers/twotter-controller')

routes.post('/search-tweet', twotterController.searchTweets)


module.exports = routes