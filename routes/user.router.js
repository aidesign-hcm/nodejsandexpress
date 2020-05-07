var express = require('express')
var router = express.Router()
var ControllerModule = require('../controllers/user.controller')
var userValidate =  require('../validate/user.validate')


router.get('/', ControllerModule.index )

router.get('/search', ControllerModule.search )

router.get('/create', ControllerModule.creatGet )

router.post('/create', userValidate.userCreate, ControllerModule.creatPost )

router.get('/:id', ControllerModule.getId )


module.exports = router