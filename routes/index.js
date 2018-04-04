const routes = require('express').Router()

routes.get('/', (req, res) => {
  res.status(200).json({
    message: 'hello twotter!'
  })
})

routes.use('/api', require('./api'))

module.exports = routes