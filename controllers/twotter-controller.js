const OAuth = require('oauth')

module.exports = {
    searchTweets : (req, res) => {
        const oauth = new OAuth.OAuth(
            'https://api.twitter.com/oauth/request_token',
            'https://api.twitter.com/oauth/access_token',
            process.env.CONSUMER_KEY,
            process.env.CONSUMER_SECRET,
            '1.0A',
            null,
            'HMAC-SHA1'
        );
        oauth.get(
            `https://api.twitter.com/1.1/search/tweets.json?q=${req.body.search}`,
            process.env.ACCESS_TOKEN, 
            process.env.ACCESS_TOKEN_SECRET,             

            function (err, data, response) {
                if(err){
                    res.status(400).json({
                        message: 'Get Data ERROR',
                        error: err
                    })
                } else {
                    res.status(200).json({
                        message: 'Get Data Successed',
                        data: JSON.parse(data)
                    })
                }
            }
        );         
    },

    

}