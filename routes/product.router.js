var express = require('express')
var router = express.Router()
var productControl = require('../controllers/product.controller')


router.get('/', productControl.index )

module.exports = router