const express = require('express');
const {test,getTweets,getOwnTweets,getSearchTweets,postTweets} = require('../controllers/c_twit');

const routes = express.Router();

routes.get('/api', test);
routes.get('/api/getTweets', getTweets);
routes.get('/api/getOwnTweets', getOwnTweets);
routes.post('/api/getTweets', getSearchTweets);
routes.post('/api/postTweets', postTweets);


module.exports = routes;