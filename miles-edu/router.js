const express = require('express')
const router = express.Router()
const customerController = require('./controller/customer');

router.get('/', customerController.findAll);

module.exports = router