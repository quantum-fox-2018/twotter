module.exports = {

    success: function(res, message, data, status){
        return res.status(status).json({
            message: message,
            data: JSON.parse(data)
        })
    },
    failed: function(res, err, status){
        return res.status(err.statusCode).json({
            message: err
        })
    }
}