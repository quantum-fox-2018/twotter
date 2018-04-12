var OAuth = require('oauth');
var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.CONSUMERKEY,
  process.env.CONSUMERSECRET,
  '1.0A',
  null,
  'HMAC-SHA1'
);


module.exports = {
  getTimeline : function(req,res){
    oauth.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      process.env.USERKEY,
      process.env.USERSECRET,
      function (err, data, result){
        if(!err){
          res.status(200).json({
            message : 'get timeline success',
            data: JSON.parse(data)
          })
        }
         else{
           res.status(500).json({
            message : 'get timeline failed',
            err
           })
         } 
      
      })
  },
  searchTweet : function(req,res){
    oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.tweet}`,
      process.env.USERKEY,
      process.env.USERSECRET,
      function (err, data, result){
        if(!err){
          res.status(200).json({
            message : 'search success',
            data: JSON.parse(data)
          })
        }
         else{
           res.status(500).json({
            message : 'search failed',
            err
           })
         } 
      
      })
  },
  postTweet : function(req,res){
    oauth.post(
      `https://api.twitter.com/1.1/statuses/update.json`,
      process.env.USERKEY,
      process.env.USERSECRET,
      {status : req.body.status},
      function (err, data, result){
        if(!err){
          res.status(200).json({
            message : 'post success',
            data: JSON.parse(data)
          })
        }
         else{
           res.status(500).json({
            message : 'post failed',
            err
           })
         } 
      
      })
  }
}
