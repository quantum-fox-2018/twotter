var express = require('express');
var router = express.Router();
var OAuth = require('oauth');
require('dotenv').config()
const user =require('../controllers/usercontroller.js')


/* GET users listing. */
router.get('/', user.timelineuser);

router.post('/',user.timelineuser);

router.get('/trends', function(req, res, next) {
  var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.KEY,
      process.env.SECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      'https://api.twitter.com/1.1/trends/place.json?id=1',
      '2941858074-yyk7efmWebuLdI4HzPj45ruK62Nj79UuaU7dqeJ', //test user token
      'cLHzFPiEGAgf3WymlTB4ff68HwZyJRT7Qt3kXN2qdbMnU', //test user secret
      function (e, data){
        res.status(200).send(data)
      });
});

  router.get('/search', function(req, res, next) {
  var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.KEY,
      process.env.SECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(//?tweet=hacktiv8
      `https://api.twitter.com/1.1/search/tweets.json?q=?tweet=${req.query.key}`,
      '2941858074-yyk7efmWebuLdI4HzPj45ruK62Nj79UuaU7dqeJ', //test user token
      'cLHzFPiEGAgf3WymlTB4ff68HwZyJRT7Qt3kXN2qdbMnU',
      function (e, data){
        res.status(200).send(data)
      });
  // res.send(req.body.search)
});

module.exports = router;
