const express = require('express');
const router = express.Router();
const twitterController = require('../controllers/twitter.controller')

router.get('/gettweet', twitterController.getTweet)
router.get('/gethometimeline', twitterController.getHomeTimeline)
router.get('/getfollowers',twitterController.getFollowers)
router.get('/searchuser/:name', twitterController.searchUser)
router.post('/posttweet',twitterController.postTweet)
router.post('/searchtweet', twitterController.searchTweet)
router.post('/sendmessage', twitterController.sendMessage)
router.get('/getLocation/:lat/:long', twitterController.getLocation)
router.get('/filter', twitterController.filter)
router.get('/getgeo/:placeId', twitterController.getGeo)
router.get('/getsuggestions', twitterController.getSuggestions)
router.post('/destroy/:tweetId', twitterController.destroy)
router.post('/follow', twitterController.follow)
router.post('/block', twitterController.block)
router.post('/unblock', twitterController.unblock)
module.exports = router;

