const routes = require('express').Router()
const apiController = require('../controllers/api')

routes.get('/release1', apiController.release1)
routes.get('/release2', apiController.release2)
routes.get('/release3', apiController.release3)
routes.post('/release4', apiController.release4)

module.exports = routes