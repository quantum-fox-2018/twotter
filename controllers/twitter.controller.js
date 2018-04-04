const OAuth = require('oauth')
var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.CONSUMER_KEY,
    process.env.CONSUMER_SECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
)

module.exports = {
    getTweet: function(req, res) {
        oauth.get(
            'https://api.twitter.com/1.1/statuses/user_timeline.json',
            process.env.TOKEN,
            process.env.TOKEN_SECRET,          
            function (err, data, response){

              if (err) {
                res.status(400).json({
                    message: err
                })
              } else {
                let tweets = []
                for(let i = 0; i < JSON.parse(data).length; i++){
                    tweets.push(JSON.parse(data)[i].text)
                }
                res.status(200).json({
                    message: 'get tweets succeed',
                    data: tweets
                })
              }
            });  
    },
    getHomeTimeline: function(req, res) {
        oauth.get(
            'https://api.twitter.com/1.1/statuses/home_timeline.json',
            process.env.TOKEN,
            process.env.TOKEN_SECRET,          
            function (err, data, response){
                if (err) {
                    res.status(400).json({
                        message: err
                    })
                } else {
                    let homeTimeline = []
                    for(let i = 0; i < JSON.parse(data).length; i++){
                        homeTimeline.push(JSON.parse(data)[i].text)
                    }
                    res.status(200).json({
                        message: 'get home timeline succeed',
                        data: homeTimeline
                    })
                }
            });  
    },

    postTweet: function(req, res){
        oauth.post(
            'https://api.twitter.com/1.1/statuses/update.json',
            process.env.TOKEN,
            process.env.TOKEN_SECRET,
            {status: req.body.tweet},    
            function (err, data, response){
              if (err) {
                res.status(400).json({
                    message: err
                })
              } else {
                res.status(201).json({
                    message: 'post tweets succeed',
                    data
                })
              }
            });  
    },

    searchTweet: function(req, res) {
        oauth.get(
            `https://api.twitter.com/1.1/search/tweets.json?q=${req.body.search}`,
            process.env.TOKEN,
            process.env.TOKEN_SECRET,  
            function (err, data, response){
              if (err) {
                res.status(400).json({
                    message: err
                })
              } else {
                let searchResult = []
                for(let i = 0; i < JSON.parse(data).statuses.length; i++){
                    searchResult.push(JSON.parse(data).statuses[i].text)
                }
                res.status(200).json({
                    message: 'search tweets succeed',
                    result: searchResult
                })
            }
        });  
    },

    getFollowers: function(req, res) {
        oauth.get(
            `https://api.twitter.com/1.1/followers/list.json`,
            process.env.TOKEN,
            process.env.TOKEN_SECRET,  
            function (err, data, response){
              if (err) {
                res.status(400).json({
                    message: err
                })
              } else {
                let followers = []
                for(let i = 0; i< JSON.parse(data).users.length; i++){
                    followers.push(JSON.parse(data).users[i].name)
                }
                res.status(200).json({
                    message: 'get followers succeed',
                    result: followers
                })
            }
        });  
    },

    searchUser: function(req, res) {
        oauth.get(
            `https://api.twitter.com/1.1/users/lookup.json?screen_name=${req.params.name}`,
            process.env.TOKEN,
            process.env.TOKEN_SECRET,  
            function (err, data, response){
              if (err) {
                res.status(400).json({
                    message: err
                })
              } else {
                res.status(200).json({
                    message: 'get user succeed',
                    realName: JSON.parse(data)[0].name,
                    tweetUser: JSON.parse(data)[0].screen_name
                })
            }
        });  
    },

    getLocation: function(req, res){
        oauth.get(
            `https://api.twitter.com/1.1/trends/closest.json?lat=${req.params.lat}&long=${req.params.long}`,
            process.env.TOKEN,
            process.env.TOKEN_SECRET,  
            function (err, data, response){
              if (err) {
                res.status(400).json({
                    message: err
                })
              } else {
                res.status(200).json({
                    message: 'get location succeed',
                    result: JSON.parse(data)
                })
            }
        }); 
    },
    
    sendMessage: function(req, res) {
    oauth.post(
        'https://api.twitter.com/1.1/direct_messages/new.json',
        process.env.TOKEN,
        process.env.TOKEN_SECRET,
        {
            screen_name: req.body.name,
            text: req.body.text
        },    
        function (err, data, response){
          if (err) {
            res.status(400).json({
                message: err
            })
          } else {
            res.status(201).json({
                message: 'send message succeed',
                dm: JSON.parse(data)
            })
          }
        }); 
    },

    filter: function(req, res) {
        oauth.get(
            `https://stream.twitter.com/1.1/statuses/filter.json?track=twitter`,
            process.env.TOKEN,
            process.env.TOKEN_SECRET,
            function(err, data, response){
                if (err) {
                    res.status(400).json({
                        message: err
                    })
                  } else {
                    res.status(201).json({
                        message: 'send message succeed',
                        filter: JSON.parse(data)
                    })
                  }
            }
        )
    },
    
    getGeo: function(req, res) {
        let id = req.params.placeId
        oauth.get(
            `https://api.twitter.com/1.1/geo/id/${id}.json`,
            process.env.TOKEN,
            process.env.TOKEN_SECRET,
            function(err, data, response){
                if (err) {
                    res.status(400).json({
                        message: err
                    })
                  } else {
                    res.status(201).json({
                        message: 'get geo succeed',
                        filter: JSON.parse(data)
                    })
                  }
            }
        )
    },
    
    getSuggestions: function(req, res) {
        oauth.get(
            `https://api.twitter.com/1.1/users/suggestions.json`,
            process.env.TOKEN,
            process.env.TOKEN_SECRET,
            function(err, data, response){
                if (err) {
                    res.status(400).json({
                        message: err
                    })
                  } else {
                    res.status(201).json({
                        message: 'get suggestion succeed',
                        filter: JSON.parse(data)
                    })
                  }
            }
        )
    },

    destroy: function(req, res) {
        oauth.post(
            `https://api.twitter.com/1.1/statuses/destroy/${req.params.tweetId}.json`,
            process.env.TOKEN,
            process.env.TOKEN_SECRET,
            {id: req.params.tweetId},
            function(err, data, response) {
                if (err) {
                    res.status(400).json({
                        message: err
                    })
                } else { 
                    res.status(201).json({
                        message: 'destory success',
                        filter: JSON.parse(data)
                    })
                }
            }
        )
    },

    follow: function(req, res) {
        oauth.post(
            `https://api.twitter.com/1.1/friendships/create.json`,
            process.env.TOKEN,
            process.env.TOKEN_SECRET,
            {screen_name: req.body.name},
            function(err, data, response) {
                if (err) {
                    res.status(400).json({
                        message: err
                    })
                } else { 
                    res.status(201).json({
                        message: 'follow success',
                        filter: JSON.parse(data)
                    })
                }
            }
        )
    },

    block: function(req, res) {
        oauth.post(
            `https://api.twitter.com/1.1/blocks/create.json`,
            process.env.TOKEN,
            process.env.TOKEN_SECRET,
            {screen_name: req.body.name},
            function(err, data, response) {
                if (err) {
                    res.status(400).json({
                        message: err
                    })
                } else { 
                    res.status(201).json({
                        message: 'block success',
                        filter: JSON.parse(data)
                    })
                }
            }
        )
    },

    unblock: function(req, res) {
        oauth.post(
            `https://api.twitter.com/1.1/blocks/destroy.json`,
            process.env.TOKEN,
            process.env.TOKEN_SECRET,
            {screen_name: req.body.name},
            function(err, data, response) {
                if (err) {
                    res.status(400).json({
                        message: err
                    })
                } else { 
                    res.status(201).json({
                        message: 'unblock success',
                        filter: JSON.parse(data)
                    })
                }
            }
        )
    },
} 