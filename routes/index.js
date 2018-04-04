const router = require('express').Router()
const { getMyTimeline, 
        updateNewTweet, 
        searchTweet, 
        searchTweetById, 
        showFollower, 
        deleteTweet,
        blockContact } = require('../controllers/index.controller')

router.get('/search/id/:id', searchTweetById)
router.get('/search/tweet/:something', searchTweet)
router.get('/follower/list', showFollower)


router.get('/myTimeline', getMyTimeline) // only get 5 recent tweet
router.post('/myTimeline/update', updateNewTweet)
router.post('/myTimeline/delete', deleteTweet)
router.post('/block/contact', blockContact)

module.exports = router