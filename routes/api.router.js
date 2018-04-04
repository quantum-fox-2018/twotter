const router = require('express').Router()
const { homeTimeline,searchTwatt,createStatus,myTimeLine } = require('../controllers/api.controller')

router.get('/hometimeline', homeTimeline)
router.get('/mytimeline', myTimeLine)
router.post('/search', searchTwatt)
router.post('/tweet', createStatus)

module.exports = router