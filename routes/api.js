var express = require('express');
var router = express.Router();
const api = require('../controllers/apiController');

/* GET users listing. */
router.get('/', api.getTimeline);
router.post('/', api.postTweet);
router.get('/search/:keyword', api.searchTweet);

module.exports = router;
