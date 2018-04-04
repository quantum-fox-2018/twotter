const OAuth = require('oauth')
const oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.APPCONSUMERKEY,
    process.env.APPSECRETKEY,
    '1.0A',
    null,
    'HMAC-SHA1'
)

module.exports = {
    
    homeTimeline : function(req, res) {
        oauth.get(
            'https://api.twitter.com/1.1/statuses/home_timeline.json',
            process.env.USERTOKEN, //test user token 
            process.env.USERSECRET, //test user secret 
            function (err, data, response){
                if(err) {
                    res
                        .status(400)
                        .json({
                            message: 'Bad Request'
                        })
                } else {
                    res
                        .status(200)
                        .json({
                            message: 'Data berhasil didapatkan',
                            data: JSON.parse(data)
                        })
                }
            }
        )
    },

    searchTwatt : function(req, res) {
        let pencarian = req.body.cari
        oauth.get(
            `https://api.twitter.com/1.1/search/tweets.json?q=${pencarian}`,
            process.env.USERTOKEN, //test user token 
            process.env.USERSECRET, //test user secret 
            function (err, data, response) {
                if(err){
                    res
                        .status(400)
                        .json({
                            message: 'Bad Request',
                        })
                } else {
                    res
                        .status(200)
                        .json({
                            message: 'Data berhasil didapatkan',
                            data: JSON.parse(data)
                        })
                }
            }
        )
    },

    createStatus : function(req, res) {
        oauth.post(
            `https://api.twitter.com/1.1/statuses/update.json`,
            process.env.USERTOKEN, //test user token 
            process.env.USERSECRET, //test user secret 
            {status: req.body.status},
            function(err, data, response) {
                // console.log(response)
                if(err){
                    res
                        .status(400)
                        .json({
                            message: 'Bad Request',
                        })
                } else {
                    res
                        .status(201)
                        .json({
                            message: 'Status berhasil terupdate',
                            data: JSON.parse(data)
                        })
                }
            }
        )
    },

    myTimeLine : function(req, res) {
        oauth.get(
            `https://api.twitter.com/1.1/statuses/user_timeline.json`,
            process.env.USERTOKEN, //test user token 
            process.env.USERSECRET, //test user secret 
            function(err, data, response) {
                // console.log(response)
                if(err){
                    res
                        .status(400)
                        .json({
                            message: 'Bad Request',
                        })
                } else {
                    res
                        .status(201)
                        .json({
                            message: 'Status ditimeline berhasil didapatkan',
                            data: JSON.parse(data)
                        })
                }
            }
        )
    }

}