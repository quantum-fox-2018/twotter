const routes = require('express').Router()
const twotter = require('./twotter')

routes.use('/api', twotter)

module.exports = routes