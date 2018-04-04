const OAuth = require('oauth');


  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.CONSUMER_KEY,
    process.env.CONSUMER_SECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
  );


module.exports = {
  getTimeline: (req,res) => {
    oauth.get(
      'https://api.twitter.com/1.1/statuses/user_timeline.json',
      process.env.ACCESS_TOKEN, //test user token
      process.env.ACCESS_TOKEN_SECRET, //test user secret
      function (err, data, response){
        if (err) {
          res.status(400).json({
            message: 'get data failed'
          })
        } else {
          res.status(200).json({
            message: 'get time line berhasil !',
            tweet: JSON.parse(data)
          })
        }
    });
  },
  postTweet: (req, res) => {
    let tweet = req.body.status
    oauth.post(
      'https://api.twitter.com/1.1/statuses/update.json',
      process.env.ACCESS_TOKEN, //test user token
      process.env.ACCESS_TOKEN_SECRET, //test user secret
      { status : tweet },
      function (err, data, response){
        if (err) {
          res.status(400).json({
            message: 'get data failed'
          })
        } else {
          res.status(200).json({
            message: 'get time line berhasil !',
            tweet: JSON.parse(data)
          })
        }
    });
  },
  searchTweet: (req, res) => {
    oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.keyword}`,
      process.env.ACCESS_TOKEN, //test user token
      process.env.ACCESS_TOKEN_SECRET, //test user secret
      function (err, data, response){
        if (err) {
          res.status(400).json({
            message: 'get data failed'
          })
        } else {
          res.status(200).json({
            message: 'search berhasil !',
            tweet: JSON.parse(data)
          })
        }
    });
  }
}
