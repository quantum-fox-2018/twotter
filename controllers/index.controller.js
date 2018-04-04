const OAuth = require('oauth');
const oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
     process.env.ConsumerKey,
     process.env.ConsumerSecret,
    '1.0A',
    null,
    'HMAC-SHA1'
  );
  const { success, failed } = require('../helpers/success_error_handling')
  
  module.exports = {

    searchTweet: function(req, res){

        let searchData = req.params.something
        
        oauth.get(
            `https://api.twitter.com/1.1/users/search.json?q=${searchData}`,
            process.env.AccessToken,
            process.env.AccessTokenSecret,
            function(err, data, response){
                if(err){
                    failed(res, err, 500)
                }else{
                    let message = "success search tweet"
                    success(res, message, data, 200)
                }
            }
        )
    },
    searchTweetById: function(req, res){

        let getId = req.params.id
        oauth.get(
            `https://api.twitter.com/1.1/statuses/show.json?id=${getId}`,
            process.env.AccessToken,
            process.env.AccessTokenSecret,
            function(err, data, response){
                if(err){
                    failed(res, err, 500)
                }else{
                    let message = "success show tweet by id"
                    success(res, message, data, 200)
                }
            }
        )
    },
    showFollower: function(req, res){
        
        oauth.get(
            `https://api.twitter.com/1.1/followers/list.json`,
            process.env.AccessToken,
            process.env.AccessTokenSecret,
            function(err, data, response){
                if(err){
                    failed(res, err, 500)
                }else{
                    let message = "success show search follower"
                    success(res, message, data, 200)
                }
            }
        )
    },
    getMyTimeline: function(req, res){
        oauth.get(
            'https://api.twitter.com/1.1/statuses/user_timeline.json?count=5',
            process.env.AccessToken,
            process.env.AccessTokenSecret,
            function(err, data, response){
                if(err){
                    failed(res, err, 500)
                }else{
                    let message = "success show timeline"
                    success(res, message, data, 200)
                }
            }
        )
    },
    updateNewTweet: function(req, res){

        oauth.post(
            'https://api.twitter.com/1.1/statuses/update.json',
            process.env.AccessToken,
            process.env.AccessTokenSecret,
            { status: req.body.tweet},
            function(err, data, response){
                if(err){
                    failed(res, err, 500)
                }else{
                    let message = "success add tweet"
                    success(res, message, data, 201)
                }
            }
        )
    },
    deleteTweet: function(req, res){

        let getId = req.body.id
        oauth.post(
            `https://api.twitter.com/1.1/statuses/destroy/${getId}.json`,
            process.env.AccessToken,
            process.env.AccessTokenSecret,
            { id: getId.json},
            function(err, data, response){
                if(err){
                    failed(res, err, 500)
                }else{
                    let message = "success delete"
                    success(res, message, data, 200)
                }
            }
        )
    },
    blockContact: function(req, res){
        
        let getId = req.body.id                
        oauth.post(
            `https://api.twitter.com/1.1/blocks/create.json`,
            process.env.AccessToken,
            process.env.AccessTokenSecret,
            { user_id: getId },
            function(err, data, response){
                if(err){
                    failed(res, err, 500)
                }else{
                    let message = "success block contact"
                    success(res, message, data, 200)
                }
            }
        )
    }
  }