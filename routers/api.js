const router = require('express').Router();
const tweets = require('../controllers/tweet_controller');

//Get home tweets
router.get('/show', tweets.getHomeTweet);

//Get Users tweets
router.get('/show-user-tweet', tweets.getTweet);

//Search tweet
router.get('/search/:search', tweets.searchTweet);

//Post Tweet
router.post('/post', tweets.postTweet);

module.exports = router