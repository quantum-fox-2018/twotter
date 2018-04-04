const {getTimeline,searchTweet,postTweet}  = require('../controllers.js/api-controller')
const express = require('express');
const router = express.Router()

router.get('/',getTimeline)
router.get('/search',searchTweet)
router.post('/postTweet',postTweet)

module.exports = router
