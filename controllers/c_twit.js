require('dotenv').config()
const API_key = process.env.APIKEY;
const API_secret = process.env.APISECRET;
const ACC_key = process.env.ACCKEY;
const ACC_secret = process.env.ACCSECRET;

const OAuth = require('oauth');
const oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    API_key,
    API_secret,
    '1.0A',
    null,
    'HMAC-SHA1'
);

module.exports = {
    test: (req,res) => {
        res.status(200).json({
            message: "berhasil",
            test: API_key,
            test2: API_secret,
            test3: ACC_key,
            test4: ACC_secret
        })
    },

    getTweets: (req,res) => {
        oauth.get(
            'https://api.twitter.com/1.1/search/tweets.json?q=hacktiv8',
            ACC_key, 
            ACC_secret,            
            function (err, data, response) {
                if (err) {
                    res.status(400).json({
                        message: "Bad Request"
                    })
                } else {
                    res.status(200).json({
                        message: "getTweets Success",
                        tweets: JSON.parse(data)
                    })
                }
            }
        )    
    },

    getOwnTweets: (req,res) => {
        oauth.get(
            'https://api.twitter.com/1.1/statuses/home_timeline.json',
            ACC_key, 
            ACC_secret,            
            function (err, data, response) {
                if (err) {
                    res.status(400).json({
                        message: "Bad Request"
                    })
                } else {
                    res.status(200).json({
                        message: "getTweets Success",
                        tweets: JSON.parse(data)
                    })
                }
            }
        )
    },

    getSearchTweets: (req,res) => {
        let search_key = req.body.serachkey;

        oauth.get(
            `https://api.twitter.com/1.1/search/tweets.json?q=${search_key}`,
            ACC_key, 
            ACC_secret,            
            function (err, data, response) {
                if (err) {
                    res.status(400).json({
                        message: "Bad Request"
                    })
                } else {
                    res.status(200).json({
                        message: "getTweets Success",
                        tweets: JSON.parse(data)
                    })
                }
            }
        )  
    },

    postTweets: (req,res) => {
        let post = req.body.post
        // console.log(post);

        oauth.post(
            `https://api.twitter.com/1.1/statuses/update.json`,
            ACC_key, 
            ACC_secret,
            {status: post},
            function (err, data, response) {
                if (err) {
                    res.status(400).json({
                        message: "Bad Request"
                    })
                } else {
                    res.status(200).json({
                        message: "postTweets Success",
                        tweets: JSON.parse(data)
                    })
                }
            }
        )
    },


}