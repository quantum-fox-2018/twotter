const OAuth = require('oauth')

const oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  `${process.env.CONSUMER_KEY}`,
  `${process.env.CONSUMER_SECRET}`,
  '1.0A',
  null,
  'HMAC-SHA1'
)

module.exports = {
  release1(req, res) {
    oauth.get(
      'https://api.twitter.com/1.1/users/search.json?q=hacktiv8',
      `${process.env.USER_TOKEN}`,
      `${process.env.USER_SECRET}`,
      function (err, data, result) {
        if (err) {
          res.status(400).json({message: 'bad request'})
        } else {
          res.status(200).json({
            message: 'success release 1',
            data: JSON.parse(data)
          })
        }
      }
    )
  },

  release2(req, res) {
    oauth.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      `${process.env.USER_TOKEN}`,
      `${process.env.USER_SECRET}`,
      function (err, data, result) {
        if (err) {
          res.status(400).json({message: 'bad request'})
        } else {
          res.status(200).json({
            message: 'success release 2',
            length: JSON.parse(data).length,
            data: JSON.parse(data)
          })
        }
      }
    )
  },

  release3(req, res) {
    oauth.get(
      'https://api.twitter.com/1.1/search/tweets.json?q=nanasetiawati',
      `${process.env.USER_TOKEN}`,
      `${process.env.USER_SECRET}`,
      function (err, data, result) {
        if (err) {
          res.status(400).json({message: 'bad request'})
        } else {
          res.status(200).json({
            message: 'success release 3',
            length: JSON.parse(data).length,
            data: JSON.parse(data)
          })
        }
      }
    )
  },

  release4(req, res) {
    let newStatus = req.body.status
    oauth.post(
      'https://api.twitter.com/1.1/statuses/update.json',
      `${process.env.USER_TOKEN}`,
      `${process.env.USER_SECRET}`,
      {status : newStatus},
      function (err, data, result) {
        if (err) {
          res.status(400).json({message: 'bad request'})
        } else {
          res.status(200).json({
            message: 'success release 4',
            length: JSON.parse(data).length,
            data: JSON.parse(data)
          })
        }
      }
    )
  }
}
