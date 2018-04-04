const OAuth = require('oauth')
const oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.CONSUMERKEY,
  process.env.CONSUMERSECRET,
  '1.0A',
  null,
  'HMAC-SHA1'
)

module.exports = {
  getOwn: (req,res)=>{
    oauth.get(
      'https://api.twitter.com/1.1/statuses/user_timeline.json',
      process.env.USERKEY,
      process.env.USERSECRET,
      (err, data, response)=>{
        if(err){
          res.status(400).json({
            message: `You can not see your own tweets`,
            err: err,
            data: data
          })
        } else {
          res.status(200).json({
            message: `This is your tweets`,
            tweets: JSON.parse(data)
          })
        }
      })
  },
  getTimeline: (req,res)=>{
    oauth.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      process.env.USERKEY,
      process.env.USERSECRET,
      (err, data, response)=>{
        if(err){
          res.status(400).json({
            message: `You can not see your timeline`,
            err: err,
            data: data
          })
        } else {
          res.status(200).json({
            message: `This is your tweets on timeline`,
            tweets: JSON.parse(data)
          })
        }
      })
  },
  searchTweet: (req,res)=>{
    oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${req.body.searchkey}`,
      process.env.USERKEY,
      process.env.USERSECRET,
      (err, data, response)=>{
        if(err){
          res.status(400).json({
            message: `You can not see the tweets`,
            err: err,
            data: data
          })
        } else {
          res.status(200).json({
            message: `This is your tweets basic on search key`,
            tweets: JSON.parse(data)
          })
        }
      })
  },
  makeTweet: (req,res)=>{
    oauth.post(
      `https://api.twitter.com/1.1/statuses/update.json`,
      process.env.USERKEY,
      process.env.USERSECRET,
      {
        status: req.body.status
      },
      (err, data, response)=>{
        if(err){
          res.status(400).json({
            message: `You can not make tweet`
          })
        } else {
          res.status(200).json({
            message: `This is your new tweets`,
            tweets: JSON.parse(data)
          })
        }
      })
  }
}
