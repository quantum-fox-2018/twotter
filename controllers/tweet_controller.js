const OAuth = require('oauth');
var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    'NMOAKDU9J0nRXVM8LyJZGo2V2',
    'PYd7NjXs31qmokP9uXT8nff87d9IxR7MT0lAYKmH0Ca3yf5rM2',
    '1.0',
    null,
    'HMAC-SHA1',
)

module.exports= {
    getHomeTweet: function(req, res){
        oauth.get(
            'https://api.twitter.com/1.1/statuses/home_timeline.json',
            '93130694-2xmkPy7z1jKjXZG22rCoflR8P4WgMsMfIlLLHXBAY', //user token
            'o7th0E5rYOdUnt69gdGP1WwTbpsnZckRifOQ0ulcEEACl', //user secret
            function(err, data, response){
                if(err){
                    res.status(400).json({
                        message:"Bad request!",
                        error: err
                    })
                } else {
                    res.status(200).json({
                        message:"Success!",
                        data: JSON.parse(data)
                    })
                }
            }
        )
    },
    getTweet: function(req, res){
        oauth.get(
            'https://api.twitter.com/1.1/statuses/user_timeline.json',
            '93130694-2xmkPy7z1jKjXZG22rCoflR8P4WgMsMfIlLLHXBAY', //user token
            'o7th0E5rYOdUnt69gdGP1WwTbpsnZckRifOQ0ulcEEACl', //user secret
            function(err, data, response){
                if(err){
                    res.status(400).json({
                        message:"Bad request!",
                        error: err
                    })
                } else {
                    res.status(200).json({
                        message:"Success!",
                        data: JSON.parse(data)
                    })
                }
            }
        )
    },
    postTweet: function(req, res){
        let tweet = req.body.tweet;
        oauth.post(
            'https://api.twitter.com/1.1/statuses/update.json',
            '93130694-2xmkPy7z1jKjXZG22rCoflR8P4WgMsMfIlLLHXBAY', //user token
            'o7th0E5rYOdUnt69gdGP1WwTbpsnZckRifOQ0ulcEEACl', //user secret
            {status : tweet},
            function(err, data, response){
                if(err){
                    res.status(400).json({
                        message:"Bad request!",
                        error: err
                    })
                } else {
                    res.status(200).json({
                        message:"Success!",
                        data: data
                    })
                }
            }
        )
    },
    searchTweet: function(req, res){
        oauth.get(
            `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.search}`,
            '93130694-2xmkPy7z1jKjXZG22rCoflR8P4WgMsMfIlLLHXBAY', //user token
            'o7th0E5rYOdUnt69gdGP1WwTbpsnZckRifOQ0ulcEEACl', //user secret
            function(err, data, response){
                if(err){
                    res.status(400).json({
                        message:"Bad request!",
                        error: err
                    })
                } else {
                    res.status(200).json({
                        message:"Success!",
                        data: JSON.parse(data)
                    })
                }
            }
        )
    }
}